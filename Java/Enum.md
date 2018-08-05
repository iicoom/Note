> 枚举类型就是为状态机而生的。
https://blog.csdn.net/i_love_deserts/article/details/79602022
## Java 的枚举
```
package com.icoom.sell.enums;

public enum PayStatusEnum {

    WAIT(0, "等待支付"),
    SUCCESS(1, "支付成功"),

    ;

    private Integer code;

    private String message;

    PayStatusEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}

```