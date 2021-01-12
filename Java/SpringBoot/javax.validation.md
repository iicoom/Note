> spring boot中使用javax.validation以及org.hibernate.validator校验入参

```java
import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Future;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
```

## 实例
```java
package com.zhonghe.basicsservice.pojo.request.account;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * 修改到款账号实体
 */
@Data
public class AccountUpdateRequest {

    @NotNull(message = "ID不能为空")
    private Integer id;

    @NotBlank(message = "部门名称不能为空")
    private String departmentName;
}
```
数字校验@NotNull   字符串校验@NotBlank