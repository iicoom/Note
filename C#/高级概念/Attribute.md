[Attribute](https://www.runoob.com/csharp/csharp-attribute.html)

> Attributes provide a powerful method of associating metadata, or declarative information, with code (assemblies, types, methods, properties, and so forth). After an attribute is associated with a program entity, the attribute can be queried at run time by using a technique called reflection. For more information, see Reflection (C#).

> 特性（Attribute）是用于在运行时传递程序中各种元素（比如类、方法、结构、枚举、组件等）的行为信息的声明性标签。您可以通过使用特性向程序添加声明性信息。一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的。
> 一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的

预定义特性（Attribute）
.Net 框架提供了三种预定义特性：

- AttributeUsage
- Conditional
- Obsolete

[Use Attributes in C#](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/attributes)

[Attributes (C#)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)
## Using attributes
```c#
[Serializable]
public class SampleClass
{
    // Objects of this type can be serialized.
}
```

## [Creating Custom Attributes (C#)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/creating-custom-attributes)
```c#
[System.AttributeUsage(System.AttributeTargets.Class |  
                       System.AttributeTargets.Struct)  
]  
public class Author : System.Attribute  
{  
    private string name;  
    public double version;  
  
    public Author(string name)  
    {  
        this.name = name;  
        version = 1.0;  
    }  
}


// 使用
[Author("P. Ackerman", version = 1.1)]  
class SampleClass  
{  
    // P. Ackerman's code goes here...  
}  
```

## 实例
```c#
using System;

namespace Fatang.Dormon
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public class FTRPC : Attribute
    {
        public FTRPC() { }
    }

    public enum RPCMode : byte
    {
        /// <summary>
        /// The RPC will only be sent to the server. This is the only allowed RPCMode in clients when the server is authoritative.
        /// </summary>
        Server = 0,
        /// <summary>
        /// The RPC will be sent to every connected peer and I will not get the RPC myself.
        /// </summary>
        Others = 1,
        /// <summary>
        /// The RPC will be sent to every connected peer, including myself.
        /// </summary>
        All = 2,
        /// <summary>
        /// The RPC will be sent to every connected peer and I will not get the RPC myself. The server will also buffer this RPC.
        /// </summary>
        OthersBuffered = 3,
    }
}
```

在controller中使用上边定义好的特性FTRPC
```c#
using Fangtang.Doraemon;
using System;
using UnityEngine;

public class PlayerDriftController : RPCElementBehavior<Player>
{
    private void OnEnable()
    {
        Context.PlayerCamera.FollowPlayer.MoveModel.OnDriftStateChange += OnDriftStateChange;
    }

    private void OnDisable()
    {
        Context.PlayerCamera.FollowPlayer.MoveModel.OnDriftStateChange -= OnDriftStateChange;
    }

    private void OnDriftStateChange(DriftState oldDrift, DriftState newDrift) 
    {
        if (newDrift == DriftState.Drifting)
        {
            Context.PlayerCamera.FollowPlayer.Controllers.Get<PlayerDriftController>().InputDrift(true);
        }
        else
        {
            Context.PlayerCamera.FollowPlayer.Controllers.Get<PlayerDriftController>().InputDrift(false);
        }
    }

    public void InputDrift(bool IsDrift)
    {
        if (NetworkManager.IsConnected && Context.Type == PlayerType.Human)
        {
            Context.PlayerCamera.FollowPlayer.RPCView.RPCToServer("DriftApply", IsDrift);
        }
        else
        {
            Context.Vehicle.GetView<VehicleEffect>().ShowDriftEffect(IsDrift);
        }
    }

    [FTRPC]
    public void DriftApplyEffect(bool IsDrift,int playerID)   // 这个方法是RPC客户端来调用的
    {
        Debug.Log("playerID==>" + playerID  +"===========DriftApplyEffect======================Context.Type==>" + Context.Type);
        if (NetworkManager.IsConnected)
        {
            Debug.Log("wd_IsDrift==>" + IsDrift + "     playerID==>" + playerID  +"  Context.Type==>" + Context.Type);
            Player players = Context.Level.InGame.GetPlayerByIndex(playerID);
            players.Vehicle.GetView<VehicleEffect>().ShowDriftEffect(IsDrift);
        }
    }
}
```
