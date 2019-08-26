import { getKey, multipartUpload, getPath } from "./oss_client";

class Lesson extends Component {
    state = {}

    progress = p => {
        const progress = parseFloat((p * 100).toFixed(2));
        this.setState({ progress });
    }

    beforeUpload = async file => {
        // 1. 图片文件上传

        // 2. 视频文件上传
        this.setState({ showBar: true });
        const fileName = getKey(file.name);
        await multipartUpload(fileName, file, { type: 2}, this.progress);
        this.setState({
            video: getPath(file.type, fileName)
        })
    }

    render() {
        const props = {
            multiple: true,
            listType: 'picture',
            fileList
        }

        return (
            <FormItem {...formItemLayout} label="PPT">
              <Upload
                beforeUpload={this.beforeUpload}
                onChange={this.onChange}
                onRemove={this.onRemove}
              >
                <Button>
                  <Icon type="upload" /> 上传图片
                </Button>
              </Upload>
              <Spin spinning={sortState}>
                <SortableList items={pptImg} onSortEnd={this.onSortEnd} />
              </Spin>
            </FormItem>
        )
    }
}

// 总结： Ant 的Upload组件知识帮你获取到了本地文件的信息，需要自己把文件上传到服务器