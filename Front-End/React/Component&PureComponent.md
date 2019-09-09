> The major difference between React.PureComponent and React.Component is PureComponent does a shallow comparison on state change. 

[React.Component vs React.PureComponent
](https://stackoverflow.com/questions/41340697/react-component-vs-react-purecomponent)

## React.PureComponent

You should go for React.PureComponent when you can satisfy any of the below conditions.

- State/Props should be an immutable object
- State/Props should not have a hierarchy
- You should call forceUpdate when data changes

## 挑战地图实例

组件如下：

```
import React, { PureComponent, Component, Fragment } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Divider,
  DatePicker,
  Icon,
  message,
  Popconfirm,
  Select,
} from 'antd';


class ChallengeCreate extends Component {
	state = {
		chanlenges: [],
	}

	// 移除challenge item
	handleRemoveChallenge = index => {
	    const { challenges } = this.state;

	    challenges.splice(index, 1);

	    this.setState({ challenges });		// 如果组件 extends PureComponent 这里的setState不会使得组件重新渲染

	    message.success('删除成功');
	};

	handleAddChallenge = () => {
	    const { challenges } = this.state;

	    const newItem = { desc: '', receipt: '', sample: '', notice: '' };

	    this.setState({ challenges: [...challenges, newItem] });
	};

	render() {
		const { chanllenges } = this.state;

		return (
			<Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}>
	            <FormItem {...formItemLayout} label="地图名称">
	              {getFieldDecorator('name', {
	                rules: [{ required: true, message: '请输入地图名称' }],
	              })(<Input placeholder="请输入地图名称" />)}
	            </FormItem>
				{chanllenges.map((item, index) => (
					<Fragment key={item.id}>
						<Divider>
							第{index + 1}关
							<Popconfirm
			                    title="确认删除本关吗?"
			                    onConfirm={() => this.handleRemoveChallenge(index)}
			                    okText="是"
			                    cancelText="否"
			                  >
			                    <Button
			                      type="danger"
			                      size="small"
			                      shape="circle"
			                      style={{ marginLeft: '10px' }}
			                      htmlType="button"
			                    >
			                      <Icon type="delete" />
			                    </Button>
			                  </Popconfirm>
						</Divider>
						<FormItem {...formItemLayout} label="任务名称">
		                  {getFieldDecorator(`challenges.${index}.name`, {
		                    rules: [{ required: true, message: '请输入任务名称' }],
		                  })(<Input placeholder="请输入任务名称" />)}
		                </FormItem>
					</Fragment>
					))}

		            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
		              <Button type="primary" htmlType="submit" loading={submitting}>
		                <FormattedMessage id="form.submit" />
		              </Button>

		              <Button
		                type="success"
		                onClick={this.handleAddChallenge}
		                style={{ margin: '0 20px' }}
		                htmlType="button"
		              >
		                添加挑战地图
		              </Button>
		            </FormItem>
	        </Form>  
			)
	}
}

export default ChallengeCreate;
```







