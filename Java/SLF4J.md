[SLF4J MDC在全链路跟踪中的应用](https://fredal.xin/mdc-in-tracing)

## 多参数输出
```java
List<DropConfig> all = oceanDropConfigRepository.all();
log.info("----------------------------total documents-------{}", all.size());
```