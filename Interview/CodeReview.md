> Code Review 的首要目的是改善和保证代码质量，预防 bug。此外还有益于制定团队代码规范，形成团队技术氛围，加深技术团队成员沟通，老带新互助成长等等。

Code Review is nothing but testing the Source Code. Generally, it is used to find out the bugs at early stages of the development of software.

http://szuwest.github.io/code-reviewfang-an.html
## code review 的好处
- 提高代码质量。
- 及早发现潜在缺陷，降低修改/弥补缺陷的成本。
- 促进团队内部知识共享，提高团队整体水平。
- 评审过程对于评审人员来说，也是一种思路重构的过程。帮助更多的人理解系统。
- 是一个传递知识的手段，可以让其它并不熟悉代码的人知道作者的意图和想法，从而可以在以后轻松维护代码。
- 鼓励程序员们相互学习对方的长处和优点。
- 可以被用来确认自己的设计和实现是一个清楚和简单的

## code review形式
一般code review有两种形式，一种是代码评审会议，我称之为Code Review Meeting，就是将团队成员都组织起来开会，让代码Owner上去讲自己代码的实现和思路，其它人发表意见和进行讨论，也有把这种叫做team review。另外一种是一对一评审，我称之为Single Review，就是项目owner提交代码之后，让reviewer在空闲的时候帮忙评审代码，并且写出批注，owner收到批注后，进行修改或者回复。但注意这里的reviewer并不是只有技术主管或架构师之类的才能做，代码质量监管仅仅靠架构师是不够的，需要所有经验丰富或有专长的同学参与其中。也有人将这个形式叫peer review。 现在大部分公司都使用为Single Review形式，或者两者混合使用。

## code review 工具
我们这里只介绍single review形式的工具。现在有比较受好评code review工具有Facebook的Phabricator，Google的Gerrit，他们都是开源的.另外微软也有他的code review工具TFS(Team Foundation Server),据说也挺好用，不过是收费的。不过现在大家用得最多的code review方式是基于Pull Request工作流方法，结合gitlab或者github来使用。现在Git是最流行的代码管理工具，结合gitlab的pull request，很容易实现code review。

## Code Review流程
这里介绍一下基于gitflow+gitlab来做code review的流程。要在gitlab里做好code review需要有个前提，就是做好权限管理。每个成员在项目里都有对应的角色，例如owner，master，developer等。然后项目代码里设置受保护分支，master一定是受保护的分支，还可以根据需要设置其他分支为受保护分支。developer权限的成员是不能向master或者其他受保护分支push代码的。

所以结合code review，开发中的整个流程就是：建立feature分支-->编写代码-->push分支代码-->gitlab上发起一个合并请求（pull request）-->审核人员审核代码，如有需要，提出修改意见-->开发人员修改代码-->审核人员审核通过，合并代码，删除分支

总结：核心流程就是 建立分支--发起PR请求--审核--合并，不断的循环反复。


## Top 10 Most Popular Code Review Tools For Developers And Testers
https://www.softwaretestinghelp.com/code-review-tools/

ReviewBoard
