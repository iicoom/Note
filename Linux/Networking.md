> I have listed down 10 basic Linux networking and monitoring commands which each Linux user should know. These Linux basic networking and monitoring commands like hostname, ping, ifconfig, iwconfig, netstat, nslookup, traceroute, finger, telnet, ethtool are used for viewing the IP address of the Linux server, managing Linux server network adapter configuration, making network connections among Linux servers over telnet and ethernet, Linux server information etc. Lets have a look on the following Linux networking and monitoring commands.

1. hostname
hostname –f displays the fully qualified host and domain name
hostname –i displays the IP address for the current machine

2. ping

ping sends packets of information to the user-defined source. If the packets are received, the destination device sends packets back. ping can be used for two purposes

* To ensure that a network connection can be established.
* Timing information as to the speed of the connection.

If you do ping www.yahoo.com it will display its IP address. Use ctrl+C to stop the test. 

3. ifconfig

View network configuration, it displays the current network adapter configuration. It is handy to determine if you are getting transmit (TX) or receive (RX) errors.

4. iwconfig

The iwconfig tool is like ifconfig and ethtool for wireless cards. You can view and set the basic Wi-Fi network details, such as the SSID, channel, and encryption. There's also many advanced settings you can view and change, including receive sensitivity, RTS/CTS, fragmentation, and retries.

5. nslookup

If you know the IP address it will display hostname. To find all the IP addresses for a given domain name, the command nslookup is used. You must have a connection to the internet for this utility to be useful.

e.g. nslookup blogger.com

You can also use nslookup to convert hostname to IP Address and from IP Address from hostname.

6. traceroute

A handy utility to view the number of hops and response time to get to a remote system or web site is traceroute. Again you need an internet connection to make use of this tool.

7. finger

View user information, displays a user’s login name, real name, terminal name and write status. this is pretty old unix command and rarely used now days.

8. telnet

Connects destination host via telnet protocol, if telnet connection establish on any port means connectivity between two hosts is working fine.

telnet hostname port - will telnet hostname with the port specified. Normally it is used to see whether host is alive and network connection is fine or not.

9. ethtool

Ethtool lets you view and change many different settings for ethernet adapters (which does not include Wi-Fi cards). You can manage many different advanced settings, including tx/rx, checksumming, and wake-on-LAN settings. However, here are more basic commands you might be interested in:

Display the driver information for a specific network adapter, great when checking for software compatibility.

ethtool -i

Initiate an adapter-specific action, usually blinking the LED lights on the adapter, to help you identify between multiple adapters or interface names:

ethtool -p

Display network statistics:

ethtool -s

Set the connection speed of the adapter in Mbps:

ethtool speed <10|100|1000>

10. netstat

Most useful and very versatile Linux command for finding connection to and from the host. You can find out all the multicast groups (network) subscribed by this host by issuing "netstat -g"

netstat -nap | grep port will display process id of application which is using that port
netstat -a  or netstat –all will display all connections including TCP  and UDP  
netstat --tcp  or netstat –t will display only TCP  connection
netstat --udp or netstat –u will display only UDP  connection
netstat -g will display all multicast network subscribed by this host.