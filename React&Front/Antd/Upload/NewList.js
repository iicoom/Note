class News extends Component {

    render() {
        const props = {
            name: 'file',
            action: `${baseURL}/upload`,
            headers: {
              authorization: 'authorization-text',
            },
            onChange: this.onChange
          };

        return (
            <FormItem {...formItemLayout} label="上传图片">
                <Upload {...props}>
                <Button>
                    <Icon type="upload" /> 点击上传
                </Button>
                </Upload>
            </FormItem>
        )
    }
}

// 上传到自己的服务器 则可以使用Upland的action 属性，在服务器端处理接收到的文件流