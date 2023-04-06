const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home/',
    componentUrl: './pages/chat.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
