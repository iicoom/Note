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
            Debug.Log("wd_漂移中");
            Context.Controllers.Get<PlayerDriftController>().InputDrift(true);
        }
        else
        {
            Debug.Log("wd_漂移结束");
            Context.Controllers.Get<PlayerDriftController>().InputDrift(false);
        }
    }

    private void InputDrift(bool IsDrift)
    {
        if (NetworkManager.IsConnected)
        {
            Context.RPCView.RPCToOthers("DriftApply", IsDrift);
        }
    }

    [FTRPC]
    public void DriftApplyEffect(bool IsDrift,int playerID)
    {
        if (NetworkManager.IsConnected)
        {
            Debug.Log("wd_IsDrift==>" + IsDrift + "     playerID==>" + playerID);
            Player players = Context.Level.InGame.GetPlayerByIndex(playerID);
            players.Vehicle.GetView<VehicleEffect>().ShowDriftEffect(IsDrift);
        }
    }

}
