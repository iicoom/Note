// 判断字符串不为空，快速获取布尔值
!"hello"
false
!!"hello"
true

// 判断对象不为空，快速获取布尔值
!{user: "nimei"}
false
!!{user: "nimei"}
true

// 判断数组不为空，快速获取布尔值
!![1, 2]
true

!![]
true

!!''
false

!!{}
true

!!null
false

!!undefined
false
