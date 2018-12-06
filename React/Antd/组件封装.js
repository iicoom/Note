// mapAdd.js 父组件
import MapItem from '@/components/MapItem';

handleDel = index => {
	console.log('delete-key:', index);
	const { entryCach } = this.state;
	console.log('old-entryCach', entryCach);
	// entryCach = _.dropWhile(entryCach, (o) => o.key === index);
	// entryCach.splice(index, 1);
	const newArr = [];
	entryCach.forEach((item, i) => {
	  if (index !== i) {
	    newArr.push(item);
	  }
	});
	console.log('new-entryCach', newArr);
	this.setState({ entryCach: newArr });
};

render() {
	return (
		<FormItem {...formItemLayout} label="添加模块">
		  <div>
		    <Button type="primary" onClick={this.showModal}>
		      选择学习地图模块
		    </Button>
		    <Modal
		      title=""
		      visible={visible}
		      onOk={this.handleOk}
		      confirmLoading={confirmLoading}
		      onCancel={this.handleCancel}
		      closable={false}
		    >
		    </Modal>
		    {entryCach &&
		      entryCach.map((item, i) => (
		        <MapItem comment={item} key={`${i + 1}`} index={i} onDel={this.handleDel} />
		      ))}
		  </div>
		</FormItem>
	)

}


// 子组件

import React, { PureComponent } from 'react';
import { Tag, Button } from 'antd';

class MapItem extends PureComponent {
  handleDelete = () => {
    const { onDel, index } = this.props;
    if (onDel) {
      onDel(index);
    }
  };

  render() {
    const { comment } = this.props;
    console.log('component-mapitem', comment);

    return (
      <div>
        <Tag color="magenta">{comment.name}</Tag>
        <Button type="primary" size="small" onClick={this.handleDelete}>
          移除
        </Button>
      </div>
    );
  }
}

export default MapItem;
