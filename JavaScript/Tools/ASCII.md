[键盘按键与 ASCII 字符集对照表](https://www.runoob.com/note/29592)
```
键盘 Key Code 对照表
按键	键码	按键	键码	按键	键码	按键	键码
A	    65	   J	  74	   S	  83	 1	    49
B	    66	   K	  75	   T	  84	 2	    50
C	    67	   L	  76	   U	  85	 3	    51
D	    68	   M	  77	   V	  86	 4	    52
E	    69	   N	  78	   W	  87	 5	    53
F	    70	   O	  79	   X	  88	 6	    54
G	    71	   P	  80	   Y	  89	 7	    55
H	    72	   Q	  81	   Z	  90	 8	    56
I	    73	   R	  82	   0	  48	 9	    57
```

使用下面的原生JS，就可以在浏览器控制台监听按键
```
document.onkeydown = function(event){
    console.log(`你按下了${event.key} 键; keyCode: ${event.keyCode}`)
}
你按下了a 键; keyCode: 65
你按下了A 键; keyCode: 65

a和A的keyCode 相同, 但是Unicode 不同
"A".charCodeAt()
65
"a".charCodeAt()
97

'A'.codePointAt()
65
'a'.codePointAt()
97


// 查看整个event对象
document.onkeydown = function(event){
    console.log(event)
}
KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}
altKey: false
bubbles: true
cancelBubble: false
cancelable: true
charCode: 0
code: "KeyA"
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 0
eventPhase: 0
isComposing: false
isTrusted: true
key: "a"
keyCode: 65
location: 0
metaKey: false
path: (4) [body, html, document, Window]
repeat: false
returnValue: true
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: body
target: body
timeStamp: 19960.704999990412
type: "keydown"
view: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
which: 65
__proto__: KeyboardEvent
```
