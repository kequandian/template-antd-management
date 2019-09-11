import React from 'react';
import { Icon } from 'antd';

const iconStyle = {
  marginRight: 12,
  userSelect: 'none',
}

export default function Operation(props) {
  const { data, editId, handle } = props;
  const { onEdit, onRemove, onEditCancel, onEditConfirm } = handle;

  if (editId > -1 && editId === data.id) {
    return <div>
      <Icon
        type="close"
        style={{
          color: '#f5222d',
          ...iconStyle,
        }}
        onClick={onEditCancel}
      />
      <Icon
        type="check"
        style={{
          color: '#1890ff',
          ...iconStyle,
        }}
        onClick={onEditConfirm.bind(null, data)}
      />
    </div>;
  }

  return <div>
    <Icon
      type="edit"
      style={{
        color: '#1890ff',
        ...iconStyle,
      }}
      onClick={onEdit.bind(null, data)}
    />
    <Icon
      type="delete"
      style={{
        color: '#f5222d',
        ...iconStyle,
      }}
      onClick={onRemove.bind(null, data)}
    />
  </div>;
}