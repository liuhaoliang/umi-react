// https://umijs.org/config/
import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';
// import defaultSettings from '../src/defaultSettings';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
      },
    },
  ],
];

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 11,
  },
  // 路由配置
  routes: pageRoutes,
  // theme: {
  //   'primary-color': defaultSettings.primaryColor,
  // },
  proxy: {
    '/users': {
      target: 'https://api.github.com',
      changeOrigin: true,
      secure: false,
      // pathRewrite: { '^/api': '' },
    },
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `umi${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },

  chainWebpack: webpackPlugin,
};
