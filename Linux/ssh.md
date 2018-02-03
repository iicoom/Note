## ssh 生成公钥私钥
1. 首先需要检查你电脑是否已经有 SSH key  cd ~/.ssh
2. 创建一个 $ ssh-keygen -t rsa -C "your_email@example.com"
3. 复制公钥 cat ~/.ssh/id_rsa.pub
