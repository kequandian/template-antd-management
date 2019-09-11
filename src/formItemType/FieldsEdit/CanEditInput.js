import React from 'react';
import { Input } from 'antd';

export default function CanEditInput(props) {
  const { field, value, editId, data, onChange } = props;

  function handleChange(e) {
    onChange(field, e.target.value);
  }

  if (editId > -1 && editId === data.id) {
    return <Input
      defaultValue={value}
      onChange={handleChange}
    />;
  }
  return value;
}