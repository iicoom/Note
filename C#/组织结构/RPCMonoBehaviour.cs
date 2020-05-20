namespace Fangtang.Doraemon
{
    public abstract class RPCMonoBehaviour : UnityEngine.MonoBehaviour, IRPCRegistrable
    {
        public RPCView RPCView
        {
            get
            {
                return _rpcView;
            }
        }

        public void RegisterNetwork(RPCView rpcView)
        {
            _rpcView = rpcView;
            RegisterRPCMethod();
        }

        public void UnregisterNetwork()
        {
            if (_rpcView != null)
            {
                UnregisterRPCMethod();
            }
        }

        protected void RegisterRPCMethod()
        {
            var type = this.GetType();
            var methods = type.GetMethods(System.Reflection.BindingFlags.Instance | 
                System.Reflection.BindingFlags.Public |
                System.Reflection.BindingFlags.NonPublic);
            for (int i = 0; i < methods.Length; ++i)
            {
                var method = methods[i];
                if (method.GetCustomAttributes(typeof(FTRPC), false).Length > 0)
                {
                    var rpcInstance = new RPCInstance(this, method.Name);
                    // Fangtang.Log.DebugFormat(2, "RegisterRPCMethod:[{0}] syncID:[{1}]", method.Name, _rpcView.SyncID);
                    RPCFactory.Instance.RegisterRPC(_rpcView.SyncID, rpcInstance);
                }
            }
        }

        protected void UnregisterRPCMethod()
        {
            var type = this.GetType();
            var methods = type.GetMethods(System.Reflection.BindingFlags.Instance | 
                System.Reflection.BindingFlags.Public |
                System.Reflection.BindingFlags.NonPublic);
            for (int i = 0; i < methods.Length; ++i)
            {
                var method = methods[i];
                if (method.GetCustomAttributes(typeof(FTRPC), false).Length > 0)
                {
                    var rpcInstance = new RPCInstance(this, method.Name);
                    RPCFactory.Instance.UnregisterRPC(_rpcView.SyncID, rpcInstance);
                }
            }
        }

        private RPCView _rpcView = null;
    }
}
