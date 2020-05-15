[用FSM轻松管理复杂状态](https://zhuanlan.zhihu.com/p/44976296)

## FSM概念
FSM(finite-state machine):表示有限个状态以及在这些状态之间的转移和动作等行为的数学模型

## FSM-3特点
- 一个时刻，只有一个状态。
- 某种条件下，会从一种状态转变（transition）到另一种状态。（比如待支付的下个状态是支付成功）
- 状态有限(finite)

## FSM-4要素
- currentState(当前状态)
- nextState(下一个状态)
- transition(currentState,action)。当前状态和下个状态的关系。接收当前的状态，根据不同的action返回不同的nextState.
- action.state变动的event