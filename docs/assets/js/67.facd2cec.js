(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{499:function(t,e,s){"use strict";s.r(e);var a=s(27),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-10-client-rocketmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-10-client-rocketmq"}},[t._v("#")]),t._v(" 6.10 Client RocketMQ")]),t._v(" "),s("h2",{attrs:{id:"范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#范式"}},[t._v("#")]),t._v(" 范式")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/douyu/jupiter/blob/master/pkg/client/rocketmq/config.toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"rocketmqconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rocketmqconfig"}},[t._v("#")]),t._v(" RocketMQConfig")]),t._v(" "),s("h4",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("configName")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("该mq配置名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("enable")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("addr")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[]string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("地址")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("group")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("消费组，默认为空")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("topic")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("消费topic，默认为空")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("subExpression")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("标签，默认为*")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("rate")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("消费速率，默认为0，不限速")])])])]),t._v(" "),s("p",[t._v("....")]),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-toml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.rocketmq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.rocketmq.configName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.rocketmq.configName.consumer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9876"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_group"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("topic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_topic"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("subExpression")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("rate")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.rocketmq.configName.producer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9876"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_group"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("topic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test_topic"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);