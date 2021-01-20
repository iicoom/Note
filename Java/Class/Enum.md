> 枚举类型就是为状态机而生的。
https://blog.csdn.net/i_love_deserts/article/details/79602022
## Java 的枚举
```java
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

## 应用
### Http 请求参数校验
```java
package com.zhonghe.userim.common.enums;

/**
 * 学员跟进商机阶段
 */
public enum EnumBusinessStage {
    
    firstContact("firstContact","初步接洽"),
    requirement("requirement","需求确定"),
    recommend("recommend","课程推荐"),
    negotiation("negotiation","客户谈判"),
    win("win","赢单"),
    lose("lose","输单")
    ;

    EnumBusinessStage(String code, String message) {
        this.code = code;
        this.message = message;
    }
    private String code;

    private String message;

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    /**
     * 校验商机阶段是否合法
     * @param code 商机阶段
     * @return bool
     */
    public static boolean isValidStage(final String code) {
        for (EnumBusinessStage item : values()) {
            return true;
        }
        return false;
    }
}
```

```java
package com.zhonghe.userim.pojo.request.student;

import com.zhonghe.userim.common.annotation.EnumValueValidator;
import com.zhonghe.userim.common.enums.EnumAdminStatus;
import com.zhonghe.userim.common.enums.EnumBusinessStage;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Date;

/**
 * 写学员跟进参数校验
 */
@Data
public class StudentWriteFollowRequest {

    /**
     * 学员id
     */
    @NotBlank(message = "studentId不能为空")
    private String studentId;

    /**
     * 商机阶段
     */
    @NotBlank(message = "businessStage不能为空")
    @EnumValueValidator(enumClass = EnumBusinessStage.class, message="商机阶段取值不正确")
    private String businessStage;
}

```