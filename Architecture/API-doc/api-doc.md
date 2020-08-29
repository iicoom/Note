https://github.com/apidoc/apidoc

## package.json
```
"scripts": {
    "doc": "apidoc -i ./src/router -o public/",
  },
```

## 源文件添加doc
```
/**
 *
 * @api {get} / 查户
 * @apiGroup Account
 * @apiSuccessExample {json} Success-Response:
 * { code: 200,
      msg: 'OK',
      data:
       { accounts: [
                {
                    
                }
            ]
        }
   }
 *
 */
router.get('/',account.GetReceives);
```
$ apidoc -i src/ -o doc/

## express静态fuwu
```
app.use('/docs',express.static(path.join(__dirname, '../doc')));
```