import React, { useRef, useReducer } from 'react';
import { Table, Button, Input } from 'antd';
import CanEditInput from './CanEditInput';
import Operation from './Operation';

const initState = {
  editId: -1,
};
const handler = function (state, action) {
  const { type, payload } = action;
  const typeMap = {
    canEdit() {
      return {
        ...state,
        ...payload,
      };
    },
    cancelEdit() {
      return {
        ...state,
        editId: -1,
      }
    },
  };
  const func = typeMap[type];
  return func();
};

export default (props) => {
  const { value, onChange } = props;

  const [state, dispatch] = useReducer(handler, initState);
  const { editId } = state;
  const editValue = useRef({});

  function handleEdit(data) {
    dispatch({
      type: 'canEdit',
      payload: {
        editId: data.id,
      }
    });
    editValue.current = {};
  }
  function handleRemove(data) {
    const filterList = value.filter(row => row.id !== data.id);
    onChange([...filterList]);
  }
  function handleFieldValue(field, value) {
    editValue.current[field] = value;
  }
  function handleCancel() {
    dispatch({
      type: 'cancelEdit',
    });
  }
  function handleConfirm(data) {
    dispatch({
      type: 'cancelEdit',
    });

    const target = value.find(item => item.id === data.id);
    Object.keys(editValue.current).forEach(key => {
      target[key] = editValue.current[key];
    });

    onChange([...value]);
  }
  function handleAppend() {
    const newID = getID(value);
    value.push({
      id: newID,
      name: '新字段',
      field: `field_${newID}`,
    });

    onChange([...value]);
  }

  return <>
    <Button type="primary" onClick={handleAppend}>
      新增
    </Button>
    <Table
      dataSource={value || []}
      rowKey="id"
      columns={[
        {
          dataIndex: 'name', title: '名称', render: (text, record) => {
            return <CanEditInput
              field="name"
              value={text}
              editId={editId}
              data={record}
              onChange={handleFieldValue}
            />;
          }
        },
        {
          dataIndex: 'field', title: '字段', render: (text, record) => {
            return <CanEditInput
              field="field"
              value={text}
              editId={editId}
              data={record}
              onChange={handleFieldValue}
            />;
          }
        },
        {
          dataIndex: 'operation', title: '操作', width: 140,
          render: (text, record) => {
            return <Operation
              data={record}
              editId={editId}
              handle={{
                onEdit: handleEdit,
                onRemove: handleRemove,
                onEditCancel: handleCancel,
                onEditConfirm: handleConfirm,
              }}
            />
          }
        },
      ]}
    />
  </>
}

/**
 * 迭代 list 里面的 id，返回 列表里面的 id 最大值 +1
 *
 * @param {array} list
 * @returns number
 */
function getID(list) {
  let max = 0;
  list.forEach(item => {
    max = Math.max(max, Number(item.id) || 0);
  });
  return max + 1;
}