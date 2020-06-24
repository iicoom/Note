## What is the difference between Child_process and Worker Threads?
- Cluster: 
  
	Built on top of Child_process, but with TCP distributed between clusters.
	Best for distributing/balancing incoming http requests, while bad for cpu intensive tasks.
	Works by taking advantage of available cores in cpu, by cloning nodeJS webserver instances on other cores.
- Child_process:
  
	Make use also of different cores available, but its bad since it costs huge amount of resources to fork a child process since it creates virtual memory.
  Forked processes could communicate with the master thread through events and vice versa, but there is no communication between forked processes.

- Worker threads:

	Same as child process, but forked processes can communicate with each other using bufferArray

1) Why worker threads is better than child process and when we should use each of them?

2) What would happen if we have 4 cores and clustered/forked nodeJS webserver 4 times(1 process for each core), then we used worker threads (There is no available cores) ?