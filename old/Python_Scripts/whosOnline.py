import socket, sys, os, json
#utalizes arp to check devices
def arpRequest():
	#enters arp request into terminal and dumps to a txt file
	rep = os.system('arp -a >arp.txt')
	if (rep == 0):
		return True
	return False

device = {}

results = arpRequest()

#read results from arp.txt and build json
if results:
	response = open('arp.txt', 'r')
	lines = response.readlines()
	for line in lines:
		line = line.split(' ')
		ip = line[1].strip('(').strip(')')
		device['ip'] = ip
		device['mac'] = line[3].upper()
		print json.dumps(device)


sys.stdout.flush()