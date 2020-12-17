```js
const roleMap = {
    '5eeb422aefd4632b160a97b3': '超级管理员',
    '5efc3a63ac5e23a593b184ea': '客服经理',
    '5efc3a84ac5e23a593b184eb': '客服专员',
    '5efc3aa6ac5e23a593b184ec': '总部销售经理',
    '5efc3abdac5e23a593b184ed': '总部销售专员',
    '5efd762dee5300b06eb29d76': '财务',
    '5f812506805a25184113a683': '分校销售经理',
    '5f8012bec86ab92ce16eae4f': '分校销售专员',
    '5f617339500c4a4f89ba0148': 'SEM专员',
    '5fa50a3e2c72bb15ef22504c': '班主任',
    '5fa50e2e2c72bb15ef22504d': '班主任经理',
    '5fa50e832c72bb15ef22504e': '顾问',
    '5fa50eda2c72bb15ef22504f': '顾问经理'
  }
  
  
const list = [
    {
        mobile: '12323334444',
        password: 'af42fa2b0eddb56b2a54c0a104f6f345',
        no: 10000004,
        name: 'wee',
        availableRoles: [
        '5efc3abdac5e23a593b184ed',
        '5efc3a63ac5e23a593b184ea',
        '5efd762dee5300b06eb29d76',
        '5efc3a84ac5e23a593b184eb'
        ],
        roleId: '5efc3a84ac5e23a593b184eb',
    },
    {
        mobile: '12345678900',
        password: 'af42fa2b0eddb56b2a54c0a104f6f345',
        no: 10000003,
        name: '测试绑定',
        availableRoles: [ '5efc3abdac5e23a593b184ed' ],
        roleId: '5efc3abdac5e23a593b184ed',
    },
    {
        mobile: '12345678900',
        password: 'af42fa2b0eddb56b2a54c0a104f6f345',
        no: 10000003,
        name: '测试绑定',
        availableRoles: [null],
        roleId: '5efc3abdac5e23a593b184ed',
    }
]

list.forEach(item => {
    item.roleNames = item.availableRoles.map(v => roleMap[v])
})

// list
[
  {
    mobile: '12323334444',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000004,
    name: 'wee',
    availableRoles: [
      '5efc3abdac5e23a593b184ed',
      '5efc3a63ac5e23a593b184ea',
      '5efd762dee5300b06eb29d76',
      '5efc3a84ac5e23a593b184eb'
    ],
    roleId: '5efc3a84ac5e23a593b184eb',
    roleNames: [ '总部销售专员', '客服经理', '财务', '客服专员' ]
  },
  {
    mobile: '12345678900',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000003,
    name: '测试绑定',
    availableRoles: [ '5efc3abdac5e23a593b184ed' ],
    roleId: '5efc3abdac5e23a593b184ed',
    roleNames: [ '总部销售专员' ]
  },
  {
    mobile: '12345678900',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000003,
    name: '测试绑定',
    availableRoles: [ null ],
    roleId: '5efc3abdac5e23a593b184ed',
    roleNames: [ undefined ]
  }
]

list.forEach(item => {
    item.roleNames = item.availableRoles.map(v => roleMap[v]).filter(v => v !== undefined)
})

// 过滤掉 roleNames: [ undefined ]
[
  {
    mobile: '12323334444',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000004,
    name: 'wee',
    availableRoles: [
      '5efc3abdac5e23a593b184ed',
      '5efc3a63ac5e23a593b184ea',
      '5efd762dee5300b06eb29d76',
      '5efc3a84ac5e23a593b184eb'
    ],
    roleId: '5efc3a84ac5e23a593b184eb',
    roleNames: [ '总部销售专员', '客服经理', '财务', '客服专员' ]
  },
  {
    mobile: '12345678900',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000003,
    name: '测试绑定',
    availableRoles: [ '5efc3abdac5e23a593b184ed' ],
    roleId: '5efc3abdac5e23a593b184ed',
    roleNames: [ '总部销售专员' ]
  },
  {
    mobile: '12345678900',
    password: 'af42fa2b0eddb56b2a54c0a104f6f345',
    no: 10000003,
    name: '测试绑定',
    availableRoles: [ null ],
    roleId: '5efc3abdac5e23a593b184ed',
    roleNames: []
  }
]
```

