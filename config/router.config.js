module.exports = [
  {
    path: '/',
    name: '首页',
    icon: 'home',
  },
  {
    path: '/sys',
    name: '管理',
    icon: 'appstore',
    items: [
      {
        "path": "/sys/fields",
        "name": "字段",
        "icon": "tag"
      }
    ],
  },
]