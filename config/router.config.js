module.exports = [
  {
    path: '/a',
    name: '导航1',
    icon: 'edit',
  },
  {
    name: '导航2',
    icon: 'form',
    items: [
      {
        path: '/b',
        name: '子导航1',
        icon: 'copy',
      },
      {
        path: '/c',
        name: '子导航2',
        icon: 'copy',
      },
      {
        path: '/d',
        name: '子导航3',
        icon: 'copy',
      },
    ],
  },
  {
    path: '/',
    name: '导航3',
    icon: 'scissor',
  },
  {
    name: '分割线',
  },
  {
    path: '/test',
    name: '导航4',
    icon: 'delete',
  },
]