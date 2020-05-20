using UnityEngine;

namespace Fangtang
{
    public interface IElementComponent
    {
        bool IsInited { get; }
        void Init(SceneElement context, IElementComponents container);
        void Activate();
        void Deactivate();
    }
}
