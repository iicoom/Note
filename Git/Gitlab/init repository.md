## Create a new repository
```
git clone http://gitlab.example.com/Monkey/sai.git
cd sai
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```
通过http clone需要输入gitlab用户名密码，可以添加pub-key解决这个问题

## Existing folder
```
cd existing_folder
git init
git remote add origin http://gitlab.example.com/Monkey/sai.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

➜  Sai ls
README.md           blog.html           cases.html          humanrc.html        index.html          js                  plugins             professors.html     styles              test_detail         user.html
about.html          blog_post.html      contact.html        images              issues.html         news.html           portfolio_item.html services.html       tech_services.html  user-pro.html
➜  Sai git init
Initialized empty Git repository in /Users/guitar/Repo/Sai/.git/

➜  .git git:(master) git push -u origin master
Counting objects: 184, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (177/177), done.
Writing objects: 100% (184/184), 6.68 MiB | 10.13 MiB/s, done.
Total 184 (delta 35), reused 0 (delta 0)
remote: Resolving deltas: 100% (35/35), done.
To http://127.0.0.1:2280/Monkey/sai.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
至此已经把本地项目推送到远程仓库

## Existing Git repository
```
cd existing_repo
git remote rename origin old-origin
git remote add origin http://gitlab.example.com/Monkey/sai.git
git push -u origin --all
git push -u origin --tags
```