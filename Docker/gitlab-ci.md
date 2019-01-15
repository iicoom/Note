> Auto DevOps will automatically build, test, and deploy your application based on a predefined Continuous Integration and Delivery configuration.

## So in brief, the steps needed to have a working CI can be summed up to:
1. Add .gitlab-ci.yml to the root directory of your repository
2. Configure a Runner

### install gitlab-runner(macOS)
1. Download the binary for your system:
```
 sudo curl --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64
```

2. Give it permissions to execute:
```
 sudo chmod +x /usr/local/bin/gitlab-runner
```

3. Install the Runner as service and start it:
```
 cd ~
 gitlab-runner install
 gitlab-runner start
```

### Registering Runners(macOS)
https://docs.gitlab.com/runner/register/index.html
1. Run the following command:
```
 gitlab-runner register
```
2. Enter your GitLab instance URL:
```
 Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
 https://gitlab.com
```
3. Enter the token you obtained to register the Runner:
```
 Please enter the gitlab-ci token for this runner
 xxx
```

## Kubernetes cluster
