using System;
using UnityEngine;

namespace Fangtang
{
    public abstract class SceneElement : MonoBehaviour
    {
        [SerializeField]
        public string ID;
        public abstract void Init(object data);
        public virtual void Free() { }
        public virtual void OnDependencyReady() { }
    }
}
