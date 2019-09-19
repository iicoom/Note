> A jump server, jump host or jumpbox is a computer on a network used to access and manage devices in a separate security zone. The most common example is managing a host in a DMZ from trusted networks or computers.

运维堡垒机的理念起源于跳板机。2000年左右，高端行业用户为了对运维人员的远程登录进行集中管理，会在机房里部署跳板机。跳板机就是一台服务器，维护人员在维护过程中，首先要统一登录到这台服务器上，然后从这台服务器再登录到目标设备进行维护。

但跳板机并没有实现对运维人员操作行为的控制和审计，使用跳板机过程中还是会有误操作、违规操作导致的操作事故，一旦出现操作事故很难快速定位原因和责任人。