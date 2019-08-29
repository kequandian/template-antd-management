import ZEle_antd from 'zero-element-antd';

// import { saveToken } from 'zero-element/lib/utils/request/token';

import { set as LASet } from 'zero-element-global/lib/listAction';
import { set as AITSet } from 'zero-element-global/lib/actionItemType';
import { set as FITSet } from 'zero-element-global/lib/formItemType';
// import { set as setEndpoint } from 'zero-element/lib/utils/request/endpoint';

import path from './actionItemType/path';
import FieldsEdit from './formItemType/FieldsEdit';

import onPath from './listAction/onPath';

// if (process.env.NODE_ENV === 'development') {
//   setEndpoint('http://127.0.0.1:8080');

//   saveToken({
//     token: '',
//   });
// }

FITSet({
  'fields-edit': FieldsEdit,
});

LASet({
  'onPath': onPath,
});

AITSet({
  path,
});