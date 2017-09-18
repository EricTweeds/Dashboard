import sys, struct, socket
broadcastIp = '255.255.255.0'
wol_port = 9

xBoxMac = "50:1A:C5:55:A0:B4"

def wakeOnLan(mac):
	mac_octets = mac.split(":")
	address = struct.pack('BBBBBB', int(mac_octets[0], 16), 
		int(mac_octets[1], 16), 
		int(mac_octets[2], 16), 
		int(mac_octets[3], 16), 
		int(mac_octets[4], 16), 
		int(mac_octets[5], 16))

	message = '\xff' * 6 + address * 16

	sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
	sock.sendto(message,(broadcastIp, wol_port))
	sock.close()
	print "3rd try"

wakeOnLan(xBoxMac)