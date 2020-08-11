const moment = require('moment');
module.exports = {
    title: 'Jupiter',
    description: 'Governance-oriented Microservice Framework',
    head: [
        ['link', {rel: 'icon', href: '/icon.png'}],
        ['script', { type: "text/javascript" }, `var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?c77f15742ac7b6883fb18421ee33a702";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
      `],
       ['meta', { name: 'keywords', content: 'Go,golang,jupiter,gRPC,micro service,govern,web-framework' }]
    ],

    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav: [
        {
          text: '首页',
          link: '/'
        },
        {
          text: '框架',
          link: '/jupiter/'
        },
        {
          text: '管理平台',
          link: '/juno/'
        },
        {
              text: '加入我们',
              link: '/join/'
        },
        {
          text: '了解更多',
          items: [
              { text: '微服务管理平台', link: 'https://github.com/douyu/juno' },
          ]
        },

      ],
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/douyu/jupiter',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '在github.com上编辑此页',
        sidebar: {
            "/summary/": [""], //这样自动生成对应文章
            "/jupiter/": [
                {
                    title: '第1章 Jupiter简介',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/1.1quickstart',
                        '/jupiter/1.2example',
                        '/jupiter/1.3feature',
                        '/jupiter/1.4contribute',
                    ]
                },
                {
                    title: '第2章 基础模块',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/2.1startup',
                        '/jupiter/2.2config',
                        '/jupiter/2.3logger',
                    ]
                },
                {
                    title: '第3章 服务模块',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/3.1http',
                        '/jupiter/3.2grpc',
                        '/jupiter/3.3worker',
                    ]
                },
                {
                    title: '第4章 调用模块',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/4.1clientetcd',
                        '/jupiter/4.2clientgrpc',
                        '/jupiter/4.3clientgorm',
                        '/jupiter/4.4clientredis',
                    ]
                },
                {
                    title: '第5章 服务治理',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/5.1governintro',
                    ]
                },
                {
                    title: '第6章 配置范式',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/6.1logger',
                        '/jupiter/6.2httpserver',
                        '/jupiter/6.3grpcserver',
                        '/jupiter/6.4worker',
                        '/jupiter/6.5clientetcd',
                        '/jupiter/6.6clientgrpc',
                        '/jupiter/6.7clientgorm',
                        '/jupiter/6.8clientredis',
                    ]
                },
                {
                    title: '第7章 自动治理',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/jupiter/7.1autologger',
                    ]
                }
            ], //这样自动生成对应文章
            "/juno/": [
                {
                    title: '第一章 基本介绍',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/1.1quickstart',
                        '/juno/1.2install_docker',
                        '/juno/1.3install_binary',
                        '/juno/1.4quickuse',
                    ]
                },
                {
                    title: '第二章 资源中心',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/2.1intro',
                    ]
                },
                {
                    title: '第三章 配置中心',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/3.1intro',
                        '/juno/3.2feature',
                        '/juno/3.3design',
                        '/juno/3.4ui',
                    ]
                },
                {
                    title: '第四章 治理中心',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/4.1govern',
                        '/juno/4.2pprof',
                    ]
                },
                {
                    title: '第五章 监控中心',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/5.1monitor',
                    ]
                },
                {
                    title: '第六章 注册中心',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/6.1register',
                    ]
                },
                {
                    title: '第七章 任务平台',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/7.1task',
                    ]
                },
                {
                    title: '第八章 测试平台',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/8.1grpc_test',
                        '/juno/8.2http_test',
                    ]
                },
                {
                    title: '第九章 Juno-Agent',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/9.1quickstart',
                        '/juno/9.2configuration',
                        '/juno/9.3proxy',
                        '/juno/9.4configdown',
                        '/juno/9.5configparse',
                        '/juno/9.6agentReport',
                        '/juno/9.7pmt',
                    ]
                },
                {
                    title: '第十章 架构文档',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/10.1arch',
                    ]
                },
                {
                    title: '第十一章 授权模块',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/11.1intro',
                        '/juno/11.2authproxy',
                        '/juno/11.3gitlab',
                    ]
                },
                {
                    title: '第十二章 API文档',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        '/juno/12.1apiauth',
                        '/juno/12.2openapi',
                    ]
                },

            ],
            "/awesome/": [{
                title: '扩展阅读',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/awesome/register',
                ]
            }],
        },
        sidebarDepth : 2,
        lastUpdated: '上次更新',
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
    },
    plugins: [
        ['@vuepress/last-updated',
         {
             transformer: (timestamp, lang) => {
                 // 不要忘了安装 moment
                 const moment = require('moment')
                moment.locale("zh-cn")
                 return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
             },

             dateOptions:{
               hours12: true
             }
        }],
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress'
    ]
  }
