(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{470:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_9-2-agent配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-agent配置"}},[s._v("#")]),s._v(" 9.2 Agent配置")]),s._v(" "),a("p",[s._v("Juno Agent加载配置会通过以下步骤处理配置。当Agent获得环境变量、文本配置、命令行变量、ETCD配置后，会根据优先级，合并配置。运行后，我们可以通过SIGHUP信号量，对配置进行reload。")]),s._v(" "),a("p",[s._v("我们通常可以指定以下两种方式启动Juno Agent：")]),s._v(" "),a("ul",[a("li",[s._v("命令行启动")]),s._v(" "),a("li",[s._v("配置启动")]),s._v(" "),a("li",[s._v("ETCD配置")])]),s._v(" "),a("p",[s._v("以下我们开始介绍Juno Agent里的三种配置")]),s._v(" "),a("h2",{attrs:{id:"_9-2-1-环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-1-环境变量"}},[s._v("#")]),s._v(" 9.2.1 环境变量")]),s._v(" "),a("p",[s._v("环境变量用于配置不做更改的基础信息，例如本机IP")]),s._v(" "),a("ul",[a("li",[s._v("JUNO_HOST: 本机地址")]),s._v(" "),a("li",[s._v("JUNO_GRPC_PORT:启动gRPC端口")]),s._v(" "),a("li",[s._v("JUNO_HTTP_PORT:启动HTTP端口")]),s._v(" "),a("li",[s._v("JUNO_GOVEN_PORT:启动治理端口")]),s._v(" "),a("li",[s._v("JUNO_DEBUG: 开启调试信息")])]),s._v(" "),a("h2",{attrs:{id:"_9-2-2-文本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-2-文本配置"}},[s._v("#")]),s._v(" 9.2.2 文本配置")]),s._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.regProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册中心地址")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wsd-projecta-etcd-rd.pre.unp.oyw:2379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3s"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.confProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置中心地址")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"live"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("prefix")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Juno-agent"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3s"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置中心数据源")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("pugin.confProxy.mysql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dsn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("secure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.confProxy.etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wsd-projecta-etcd-cc.pre.unp.oyw:2379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.supervisor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/supervisor/conf.d1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.systemd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/systemd/system1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.report")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://10.1.50.13:60812/api/v1/resource/node/heartbeat"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("internal")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60s"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("hostName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JUNO_HOST"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量的名称，或者命令行参数的名称")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("regionCode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REGION_CODE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量的名称，或者命令行参数的名称")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("regionName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"REGION_NAME"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("zoneCode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZONE_CODE"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("zoneName")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ZONE_NAME"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("env")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.healthCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("plugin.process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("enable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("jupiter.logger.default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("debug")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("jupiter.server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("jupiter.server.grpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60813")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("jupiter.server.http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60814")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("ul",[a("li",[s._v("plugin 设置组件信息，配置了该组件，开启enable，那么该组件启用")]),s._v(" "),a("li",[s._v("server 设置服务的gRPC，HTTP，govern端口")])]),s._v(" "),a("h2",{attrs:{id:"_9-2-3-命令行配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-3-命令行配置"}},[s._v("#")]),s._v(" 9.2.3 命令行配置")]),s._v(" "),a("p",[s._v("使用文本配置，启用一个"),a("code",[s._v("test")]),s._v("组件")]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Juno-agent --config=Juno-agent.toml --report  代表打开report插件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_9-2-4-etcd配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-4-etcd配置"}},[s._v("#")]),s._v(" 9.2.4 ETCD配置")]),s._v(" "),a("p",[s._v("todo")])])}),[],!1,null,null,null);t.default=e.exports}}]);