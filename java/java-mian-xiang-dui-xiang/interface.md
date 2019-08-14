# interface

> 接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。 除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类

* 接口不能用于实例化对象。
* 接口没有构造方法。
* 接口中所有的方法必须是抽象方法。
* 接口不能包含成员变量，除了 static 和 final 变量。
* 接口不是被类继承了，而是要被类实现。
* 接口支持多继承。

## 接口的声明语法格式如下：

```text
[可见度] interface 接口名称 [extends 其他的类名] {
        // 声明变量
        // 抽象方法
}

如：
// OrderService
public interface OrderService {

    /**
     * 按条件分页查询
     * @param queryDTO
     * @param pg_index
     * @param pg_count
     * @param sort_type
     * @return
     */
    public Page<OrderDTO> findByPage(OrderQueryDTO queryDTO, int pg_index, int pg_count, String sort_type);


    /**
     * 根据order_id获取订单详情
     * @param order_id
     * @return
     */
    public OrderDTO get(Integer order_id);
}
```

## 接口的实现

当类实现接口的时候，类要实现接口中所有的方法。否则，类必须声明为抽象的类。

类使用implements关键字实现接口。在类声明中，Implements关键字放在class声明后面。

实现一个接口的语法，可以使用这个公式：

...implements 接口名称\[, 其他接口名称, 其他接口名称..., ...\] ...

```text
// OrderServiceImpl
@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderDao orderDao;

    @Override
    public Page<OrderDTO> findByPage(OrderQueryDTO queryDTO, int pg_index, int pg_count, String sort_type) {
        PageRequest pageRequest = buildPageRequest(pg_index, pg_count, sort_type);
        Specification<OrderEntity> spec = buildSpecification(queryDTO);
        Page<OrderEntity> page = orderDao.findAll(spec, pageRequest);
        List<OrderDTO> orderDTOList = OrderDataConvert.entityToDto(page.getContent());
        if (null != queryDTO.order_type && queryDTO.order_type == 1) {
            for (OrderDTO orderDTO : orderDTOList) {
                // 查询子订单
                List<OrderEntity> orderChildrensEntity = orderDao.findByPayOrderSn(orderDTO.order_sn);
                if (null != orderChildrensEntity) {
                    List<OrderDTO> orderChildrens = OrderDataConvert.entityToDto(orderChildrensEntity);
                    List<OrderDTO> orderChildrensExtend = orderExtendList(orderChildrens);
                    orderDTO.orderChildrens = orderChildrensExtend;
                }
            }
        }
        for (OrderDTO orderDTO : orderDTOList) {
            if (null != orderDTO.pay_order_sn && orderDTO.order_state > 1) {
                OrderDTO payOrderDTO = findByOrderSn(orderDTO.pay_order_sn);
                orderDTO.payment_time = payOrderDTO.payment_time;
            }
        }
        List<OrderDTO> orderExtend = orderExtendList(orderDTOList);
        return new PageImpl<OrderDTO>(orderExtend, pageRequest, page.getTotalElements());
    }
}
```

重写接口中声明的方法时，需要注意以下规则：

类在实现接口的方法时，不能抛出强制性异常，只能在接口中，或者继承接口的抽象类中抛出该强制性异常。 类在重写方法时要保持一致的方法名，并且应该保持相同或者相兼容的返回值类型。 如果实现接口的类是抽象类，那么就没必要实现该接口的方法。 在实现接口的时候，也要注意一些规则：

一个类可以同时实现多个接口。 一个类只能继承一个类，但是能实现多个接口。 一个接口能继承另一个接口，这和类之间的继承比较相似。

