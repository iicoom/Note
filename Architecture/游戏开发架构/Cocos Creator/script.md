## script文件的组成
### properties

```
properties: {
    // 预制资源
    starPrefab: {
        default: null,
        type: cc.Prefab
    },

    // 普通数值属性：星星产生后消失时间的随机范围
    maxStarDuration: 5,
    minStarDuration: 3,

    // 节点，通常会挂有方法：player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
        default: null,
        type: cc.Node
    },

    // label，通常用作文字展示：score label 的引用
    scoreDisplay: {
        default: null,
        type: cc.Label
    },
}
```

