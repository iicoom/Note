[Attribute](https://www.runoob.com/csharp/csharp-attribute.html)

> 特性（Attribute）是用于在运行时传递程序中各种元素（比如类、方法、结构、枚举、组件等）的行为信息的声明性标签。您可以通过使用特性向程序添加声明性信息。一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的。
> 一个声明性标签是通过放置在它所应用的元素前面的方括号（[ ]）来描述的

预定义特性（Attribute）
.Net 框架提供了三种预定义特性：

- AttributeUsage
- Conditional
- Obsolete

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

    [Flags]
    public enum NetworkFlags : byte
    {
        /// <summary>
        /// This is the base value. The RPC will be reliable, buffered, encrypted, typesafe and include a timestamp.
        /// </summary>
        Normal = 0,
        /// <summary>
        /// The RPC is sent over an unreliable network channel in uLink. Default is OFF.
        /// </summary>
        Unreliable = 1 << 0,
        /// <summary>
        /// The RPC is not stored in the RPC buffer on the server. This flag
        /// overrules the <see cref="uLink.RPCMode"/> buffer setting. Default Value is OFF.
        /// </summary>
        /// <value></value>
        Unbuffered = 1 << 1,
        /// <summary>
        /// The RPC is never encrypted, even if security is turned on. Default value is OFF.
        /// </summary>
        Unencrypted = 1 << 2,
        /// <summary>
        /// The RPC has no timestamp (to save bandwidth). Default value is OFF.
        /// </summary>
        NoTimestamp = 1 << 3,
        /// <summary>
        /// The types of the arguments in the RPC will not be checked when this RPC is received. Default value is OFF.
        /// </summary>
        TypeUnsafe = 1 << 4,
        /// <summary>
        /// The RPC is not to be culled due to Scope or Group (except when the NetworkView is hidden). Default value is OFF.
        /// </summary>
        NoCulling = 1 << 5,
    }

//    public enum RPCReceiver : byte
//    {
//        /// <summary>
//        /// Does not listen for incoming RPCs to this networkView, RPCs will be ignored.
//        /// </summary>
//        Off,
//
//        /// <summary>
//        /// Forwards incoming RPCs only to the observed component property, if it is a MonoBehaviour.
//        /// </summary>
//        OnlyObservedComponent,
//
//        /// <summary>
//        /// Forwards incoming RPCs to all MonoBehaviours in this gameobject. Default value.
//        /// </summary>
//        ThisGameObject,
//
//        /// <summary>
//        /// Forwards incoming RPCs to all MonoBehaviours in this gameobject and also to all 
//        /// MonoBehaviours in all of this GameObject's children.
//        /// </summary>
//        ThisGameObjectAndChildren,
//
//        /// <summary>
//        /// Forwards incoming RPCs to all MonoBehaviours in the root gameobject, which this
//        /// gameobject belongs to, and also to all MonoBehaviours in all the root's children.
//        /// </summary>
//        RootGameObjectAndChildren,
//
//        /// <summary>
//        /// Forwards incoming RPCs to all MonoBehaviours in all GameObjects activated in the scene.
//        /// </summary>
//        AllActiveGameObjects,
//
//        /// <summary>
//        /// Forwards incoming RPCs to all MonoBehaviours in the GameObjects specified by the rpcReceiverGameObjects property.
//        /// </summary>
//        GameObjects
//    }
}
```

在controller中使用特性
```c#
﻿using Fangtang.Doraemon;
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

    private void Update()
    {
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
    public void DriftApplyEffect(bool IsDrift,int playerID)
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
