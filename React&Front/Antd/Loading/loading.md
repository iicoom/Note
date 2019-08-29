## loading状态的自动更新
```
@connect(({ entry, loading }) => ({
  entry,
  loading: loading.models.entry,
}))

class TableList extends PureComponent {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'entry/fetchArticleList',
            payload: {},
        });
    }

    render() {
        const { loading, entry: { article } } = this.props;

        return (
            <Table
              loading={loading}
              rowKey="id"
              dataSource={article ? article.rows : []}
              columns={this.getColumns()}
              pagination={paginationProps}
              onChange={this.handleStandardTableChange}
            />
        )
    }
}
```
