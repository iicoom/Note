const os = require("os");
const NI = os.networkInterfaces();

console.log(NI)
/*
{
  'VirtualBox Host-Only Network': [
    {
      address: 'fe80::c1a8:a88f:c2d0:b1d0',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '0a:00:27:00:00:03',
      internal: false,
      cidr: 'fe80::c1a8:a88f:c2d0:b1d0/64',
      scopeid: 3
    },
    {
      address: '192.168.56.1',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '0a:00:27:00:00:03',
      internal: false,
      cidr: '192.168.56.1/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ],
  '以太网': [
    {
      address: 'fe80::c8b9:6d09:2539:c32f',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '04:d9:f5:c9:51:8c',
      internal: false,
      cidr: 'fe80::c8b9:6d09:2539:c32f/64',
      scopeid: 15
    },
    {
      address: '192.168.10.71',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '04:d9:f5:c9:51:8c',
      internal: false,
      cidr: '192.168.10.71/24'
    }
  ]
}
*/
delete NI["Loopback Pseudo-Interface 1"];
delete NI["VirtualBox Host-Only Network"];
console.log(NI)
let ip = NI[Object.keys(NI).pop()].pop().address;
console.log("ip: ", ip)
