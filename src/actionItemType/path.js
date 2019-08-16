import React from 'react';
import { Button } from 'antd';
import router from 'next/router';

export default (props) => {
  const { title, options } = props;

  function handleClick() {
    router.push({
      pathname: options.path,
    });
  }

  return <div>
    <Button onClick={handleClick} type="primary">
      {title}
    </Button>
  </div>
}