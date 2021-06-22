export const ROUTER_PATH = {
  root: '/',
  resume: '/resume'
}

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume'
}

export const ROUTER_ENTRY = [
  {
    url: 'https://github.com/Wait1997',
    key: 'intro',
    text: '介绍'
  },
  {
    url: ROUTER_PATH.resume,
    key: ROUTER_KEY.resume,
    text: '简历'
  },
  {
    url: 'https://github.com/Wait1997/electron-mook',
    key: 'code',
    text: '源码'
  }
]
