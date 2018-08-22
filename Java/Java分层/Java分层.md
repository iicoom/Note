> 代码结构中Dao，Service，Controller，Util，Model是什么意思，为什么划分？

* DAO = Data Access Object = 数据存取对象

* Service = 服务(业务层)

* Controller = 控制器

* Util = 工具

* Model = 模型

### DAO（数据库的 增删改查）
DAO，数据存取对象。通常我们会遇到很多要和数据库打交道的场景，如果为每一个场景都去写一些SQL语句，会让我们代码变得很奇怪，我们希望我们的代码比较干净整洁，那么一个很容易想到的方案就是把数据库封装一下，让我们和数据库的交道看起来比较像和一个对象打交道。这个对象通常就是DAO，当我们操作这个对象的时候，这个对象会自动的产生SQL语句来和数据库打交道，而我们只需要和DAO打交道就可以了。

### Service
我们有时候会需要一些相对独立，与业务系统没啥关系的功能。但不是所有的功能都可以做成一个服务，服务是一个相对独立的功能模块，完成一些指定的工作，这些工作高度抽象和通用。一个典型的服务像是数据库服务、缓存服务、文件存储服务、身份验证服务、消息队列服务等。
并不是所有的模块都适合做成服务，一个服务首先最重要的是独立性，这个服务必须可以独立的完成指定的工作。复杂的服务可能依赖于一个或者多个更基础的服务，但是服务通常不应当依赖于任何具体的业务代码，服务必须具有高度的抽象性。关系型数据库服务就具有高度的抽象性，事实上只要我们撰写标准的SQL，不论后面是MySQL、SQL Server还是Oracle，他们都会呈现出几乎完全相同的行为。

当你的代码需要一个高度抽象高度标准化的功能，而这个功能又不能简单的实现，或者这个功能需要很多资源的配合，例如缓存服务需要内存资源，而数据库服务通常需要磁盘资源，身份验证服务通常需要数据库服务支持。这个时候就可以考虑将这个功能模块做成一个服务。

所以服务的特征：抽象、独立、稳定。

在完成一个大型的业务系统时，我们发现一些子模块或者子系统也可以像服务一样独立的部署和测试。例如会员系统、支付系统、订单系统等等，他们的业务逻辑可能非常复杂，但是逻辑相对独立，并且高度内聚。如果我们将这些系统分别独立的测试和部署，就可以大大的降低我们的测试、部署和运维的成本。

这些可以独自完成某一方面业务功能，高度内聚，可以独立部署测试的模块，我们可以称之为Business Service，业务服务。它同样具有服务的特征，抽象、独立和稳定。一个会员系统内部的逻辑可能非常复杂（积分规则，分级规则，风险控制，行为数据），但是在其外部，会员的概念可以非常简单。

* service 都有对应的implement 如：OrderService 且类型为interface，需要一个OrderService的实现类 OrderServiceImpl
```
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

// OrderServiceImpl
@Service("orderService")
public class OrderServiceImpl implements OrderService {
	@Resource
	private OrderDao orderDao;
	@Resource
	private OrderCommonDao orderCommonDao;
	@Resource
	private StoreDao storeDao;
	@Resource
	private MemberDao memberDao;
	@Resource
	private OrderGoodsDao orderGoodsDao;
	@Resource
	private GoodsDao goodsDao;
	@Resource
	private GoodsCommonDao goodsCommonDao;
	@Resource
	private ExpressDao expressDao;

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

### Util
Util通常来说是我们找不到合适的名字的时候的选择，Util就是工具，在做项目的时候我们总会遇到一些奇奇怪怪的小功能或者重复的代码需要提取。像是URL编码或者解码（当然这个类库通常会提供，不过就以 .NET Framework 为例，提供这个方法的类型名称叫做HttpUtility），或是自创的加密签名算法等等。

### Model
模型，通常来讲，我们会把模型和另一个东西放在一起来说：View，视图。模型通常认为是视图的内核，何谓之视图？我们正在与之交互的知乎网站的界面就是视图，而模型是指他的内核：数据。知乎的数据是问题和答案，问题分为标题和描述，答案有内容和作者以及各种状态。知乎有很多个UI，例如移动页面，普通PC页面，手机APP，以及改版前的旧界面，这些被称作不同的视图。而所有这些形态迥异的视图，其内核都是一样的，这个内核我们就称之为模型（Model）。将Model和View的概念拆分开来，有助于我们关注不同的方面，也可以更有效的分工。有些工程师更关注于内核也就是模型，通常来说，他们被称之为后端工程师。有些工程师更关注于用户界面的交互和展示，通常来说，他们被称之为前端工程师。

作者：Ivony
链接：https://www.zhihu.com/question/58410621/answer/157049250
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### Controller （数据的展现）
@Controller  处理http请求
@RestController  Spring4新加的原来返回json需要@ResponseBody配合@Controller
@RequestMapping  配置URL映射


## Sell 项目分层分析
### dataobject => Entity => 与数据库字段相映射 
### repository => Dao 
继承 JpaRepository 传入 Entity和数据类型
### service
impl => service 的实现








