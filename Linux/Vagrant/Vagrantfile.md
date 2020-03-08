## Config namespace: config.vm
The settings within config.vm modify the configuration of the machine that Vagrant manages.

- config.vm.box (string) - This configures what box the machine will be brought up against. 
The value here should be the name of an installed box or a shorthand name of a box in HashiCorp's Vagrant Cloud.

- config.vm.box_url (string, array of strings) - The URL that the configured box can be found at.
  The URLs can also be local files by using the file:// scheme. For example: "file:///tmp/test.box".
  URL可以是本地的box文件，指定文件路径。
  ```
  config.vm.box_url = "/Users/mxj/Downloads/doraemon/doraemonkart-v14.box"
  ```

- config.vm.hostname (string) - The hostname the machine should have. Defaults to nil. If nil, Vagrant will not manage the hostname. If set to a string, the hostname will be set on boot. If set, Vagrant will update /etc/hosts on the guest with the configured hostname.
要注意是sudo su切换到root用户才有 /etc/hosts


##Config namespace: config.ssh
- config.ssh.host (string) - The hostname or IP to SSH into. By default this is empty, because the provider usually figures this out for you.
