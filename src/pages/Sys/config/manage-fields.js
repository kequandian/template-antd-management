const API = require('../.API/Fields.api.js');

module.exports = {
  layout: 'Content',
  title: '字段管理',
  items: [
    {
      layout: 'Empty',
      component: 'BaseSearch',
      config: {
        fields: [
          { field: 'name', label: '名字', type: 'input' }
        ],
      },
    },
    {
      layout: 'Empty',
      component: 'BaseList',
      config: {
        API: {
          listAPI: API.listAPI,
        },
        actions: [
          {
            title: '新增', type: 'modal',
            options: {
              modalTitle: '新增字段',
              items: [
                {
                  layout: 'Grid',
                  component: 'BaseForm',
                  config: {
                    API: {},
                    fields: [
                      { field: 'field', label: 'field', type: 'input' }
                    ],
                  },
                }
              ],
            },
          }
        ],
        fields: [
          { field: 'entityName', label: '名称' },
        ],
        operation: [
          {
            title: '编辑', action: 'modal',
            options: {
              outside: true,
              modalTitle: '编辑字段',
              layout: 'Empty',
              items: [
                {
                  layout: 'Grid',
                  component: 'BaseForm',
                  config: {
                    API: {
                      getAPI: API.getAPI,
                      updateAPI: API.updateAPI,
                    },
                    fields: [
                      { field: 'entityName', label: '名称', type: 'plain' },
                      { field: 'items', label: '', type: 'fields-edit' },
                    ],
                  },
                }
              ],
            },
          },
        ]
      },
    },
  ],
};
