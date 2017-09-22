import sys, json
from pynetgear import Netgear

password = "350lester303";
host = "routerlogin.net"
username = "admin"
port = 5000;


device = {}

netgear = Netgear(password, host, username, port)

for i in netgear.get_attached_devices():
	device['signal'] = i.signal
	device['ip'] = i.ip
	device['name'] = i.name
	device['mac'] = i.mac
	device['type'] = i.type
	print json.dumps(device)

sys.stdout.flush()