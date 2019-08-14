[Distributed locks with Redis](https://redis.io/topics/distlock)

> Distributed locks are a very useful primitive in many environments where different processes must operate with shared resources in a mutually exclusive way.

```
function Redlock(client, option) {
    this.client = client;
    this.option = option;
}


```