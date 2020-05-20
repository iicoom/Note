using UnityEngine;

namespace Fangtang.Doraemon
{
    public class RPCElementBehavior<T> : RPCMonoBehaviour, IElementComponent where T : SceneElement, IHasSyncID
    {
        public bool IsInited { get; private set; }

        public T Context
        {
            get
            {
                return _context;
            }
            private set
            {
                _context = value;
            }
        }

        public void Init(SceneElement context, IElementComponents container)
        {
            _components = container;
            Context = context as T;

            OnInit();
            IsInited = true;
        }

        public R Get<R>() where R : class, IElementComponent 
        {
            return _components.Get<R>() as R;
        }

        public virtual void Activate()
        {
            enabled = true;
        }

        public virtual void Deactivate()
        {
            enabled = false;
        }

        protected virtual void OnInit() { }

        private void Awake()
        {
            IsInited = false;
        }

        [SerializeField]
        [HideInInspector]
        protected T _context;

        private IElementComponents _components;
    }
}

