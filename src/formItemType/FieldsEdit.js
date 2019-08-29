import React, { useReducer } from 'react';
import { Table, Button } from 'antd';

export default (props) => {
  const { value, onChange } = props;
  // const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleMoveUp(index) {
    if (index > 0) {
      [value[index], value[index - 1]] = [value[index - 1], value[index]];
    }
    onChange([...value]);
    // forceUpdate();
  }
  function handleMoveDown(index) {
    if ((value.length - 1) > index) {
      [value[index], value[index + 1]] = [value[index + 1], value[index]];
    }
    onChange([...value]);
    // forceUpdate();
  }

  return <Table
    dataSource={value || []}
    rowKey="id"
    columns={[
      { dataIndex: 'id', title: 'ID' },
      { dataIndex: 'entityId', title: 'entity ID' },
      { dataIndex: 'attributeName', title: 'attributeName' },
      {
        dataIndex: 'operation', title: '操作', render: (text, record, index) => {
          return <div>
            <Button type="link"
              size="small"
              onClick={handleMoveUp.bind(null, index)}
            >
              上移
            </Button>
            <Button type="link"
              size="small"
              onClick={handleMoveDown.bind(null, index)}
            >
              下移
            </Button>
          </div>
        }
      },
    ]}
  />
}