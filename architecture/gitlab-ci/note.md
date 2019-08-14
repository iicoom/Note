# note

> GitLab CI 是 GitLab 为了提升其在软件开发工程中作用，完善 DevOps 理念所加入的 CI/CD 基础功能。可以便捷的融入软件开发环节中。通过 GitLab CI 可以定义完善的 CI/CD Pipeline。

## Pipeline

Pipeline 相当于一个构建任务，里面可以包含多个流程，如依赖安装、编译、测试、部署等。

任何提交或者 Merge Request 的合并都可以触发 Pipeline

## Stage

Stage 表示构建的阶段，即上面提到的流程。

所有 Stages 按顺序执行，即当一个 Stage 完成后，下一个 Stage 才会开始

任一 Stage 失败，后面的 Stages 将永不会执行，Pipeline 失败

只有当所有 Stages 完成后，Pipeline 才会成功

## Job

Job 是 Stage 中的任务。

相同 Stage 中的 Jobs 会并行执行

任一 Job 失败，那么 Stage 失败，Pipeline 失败

相同 Stage 中的 Jobs 都执行成功时，该 Stage 成功

## GitLab Runner

Runner 是任务的实际执行者， 可以在 MacOS/Linux/Windows 等系统上运行。使用 Golang 进行开发。 同时也可部署在 Kubernetes 上。

