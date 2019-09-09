## React 富文本页面展示
```
expandedRowRender = data => {
    function createMarkup(string) {
      return { __html: string };
    }

    const columns = [
      { title: '课程描述', dataIndex: 'desc', width: 200 },
      {
        title: '逐字稿',
        dataIndex: 'doc',
        width: 300,
        render: text => (
          <div
            dangerouslySetInnerHTML={createMarkup(text)}
            style={{ maxHeight: 200, overflowY: 'scroll' }}
          />
        ),
      }
    ];

    const arr = [];
    arr.push(data);
    return <Table rowKey="id" columns={columns} dataSource={arr} pagination={false} />;
  };
```

## 标签 onclick事件传值
```
reply = o => {
    const {
      id: pid,
      manager: { nickname },
    } = JSON.parse(o.currentTarget.getAttribute('item'));
    this.setState({ pid, nickname });
    const anchorElement = document.getElementsByClassName('public-DraftEditor-content')[0];
    // if(anchorElement) { anchorElement.scrollIntoView(); }
    anchorElement.focus();
  };

return (
      <Fragment>
        <h3 style={{ marginTop: 30 }}>{comments.count} 条回复</h3>
        <List
          className="comments-list"
          dataSource={comments.rows}
          bordered={false}
          renderItem={item => {
            const { manager } = item;
            let { content } = item;

            if (item.pid > 0) {
              const origin = comments.rows.find(row => row.id === item.pid);

              if (origin) content = `回复 @${origin.manager.nickname}: ${content}`;
            }

            return (
              <List.Item
                actions={[
                  <a href="javascript:;" item={JSON.stringify(item)} onClick={this.reply}>
                    回复
                  </a>,
                ]}
              >
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={manager.avatar} />}
                    title={<a href="#">{manager.nickname}</a>}
                    description={<div dangerouslySetInnerHTML={createMarkup(content)} />}
                  />
                </Skeleton>
              </List.Item>
            );
          }}
        />
        <Card bordered={false} bodyStyle={{ padding: 0 }}>
          <Avatar src={currentUser.avatar} />
          <BraftEditor
            value={editorState}
            className={styles.comments}
            height={200}
            onChange={this.onEditorStateChange}
          />
          <Button
            type="primary"
            className={styles.submit}
            htmlType="submit"
            onClick={this.handleSubmit}
          >
            回复
          </Button>
          <span style={{ display: nickname ? 'inline-block' : 'none', marginLeft: 20 }}>
            Reply to@
            {nickname}
          </span>
        </Card>
      </Fragment>
    );
```

## BraftEditor 光标定位问题
获取到editor元素，元素的focus()
```
const anchorElement = document.getElementsByClassName('public-DraftEditor-content')[0];
    // if(anchorElement) { anchorElement.scrollIntoView(); }
    anchorElement.focus();

```

