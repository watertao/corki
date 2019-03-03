// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';
import path from "path";

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        routes: {
          exclude: [
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        targets: {
          ie: 11,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
        // dll: {
        //   exclude: [],
        // },
        // hardSource: true,
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: {
    ie: 11,
  },

  /**
   * 路由相关配置
   */
  // routes: [
  //   {
  //     path: '/login',
  //     component: '../pages/login'
  //   },
  //   {
  //     path: '/',
  //     component: '../layouts/BasicLayout',
  //     routes: [
  //       { path: '/', redirect: '/welcome' },
  //       // dashboard
  //       {
  //         path: '/welcome',
  //         name: 'welcome',
  //         icon: 'smile',
  //         component: './Welcome',
  //       },
  //       {
  //         path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
  //         name: 'more-blocks',
  //         icon: 'block',
  //       },
  //     ],
  //   },
  // ],
  disableRedirectHoist: true,

  /**
   * webpack 相关配置
   */
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  alias: {
    environment: process.env.target ? path.resolve(__dirname, `../src/environment.${process.env.target}.js`) :
      path.resolve(__dirname, '../src/environment.dev.js'),
    projectConfig: path.resolve(__dirname, '../src/defaultSettings.js'),
  },
};
