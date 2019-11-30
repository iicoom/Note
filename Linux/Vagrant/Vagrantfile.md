## Config namespace: config.vm
The settings within config.vm modify the configuration of the machine that Vagrant manages.

- config.vm.box (string) - This configures what box the machine will be brought up against. 
The value here should be the name of an installed box or a shorthand name of a box in HashiCorp's Vagrant Cloud.

- config.vm.box_url (string, array of strings) - The URL that the configured box can be found at.

##Config namespace: config.ssh
- config.ssh.host (string) - The hostname or IP to SSH into. By default this is empty, because the provider usually figures this out for you.
