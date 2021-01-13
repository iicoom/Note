## for 遍历 List
```java
List<CrmVisitPlan> visitPlans = crmVisitPlanDao.selectByExample(example);
for (CrmVisitPlan plan : visitPlans) {

}
```

## stream().filter()
本文主要说明在Java8及以上版本中，使用来过滤一个List对象，查找符合条件的对象集合。

```java
List<CrmVisitPlan> visitPlans = crmVisitPlanDao.selectByExample(example);
List<CrmVisitPlan> complete = visitPlans.stream().filter(s -> s.getStatus().equals("done")).collect(Collectors.toList());


```