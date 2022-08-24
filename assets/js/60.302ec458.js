(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{389:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_1-4-贡献者协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-贡献者协作"}},[s._v("#")]),s._v(" 1.4 贡献者协作")]),s._v(" "),t("p",[s._v("准备工作: 如果你没有github账号, 您需要申请一个Github账号, 接下来可以继续下一步.")]),s._v(" "),t("h2",{attrs:{id:"_1-4-1-fork-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-fork-代码"}},[s._v("#")]),s._v(" 1.4.1 Fork 代码")]),s._v(" "),t("ol",[t("li",[s._v("访问 "),t("a",{attrs:{href:"https://github.com/douyu/jupiter",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/douyu/jupiter"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v('点击 "Fork" 按钮 (位于页面的右上方)')])]),s._v(" "),t("h2",{attrs:{id:"_1-4-2-clone-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-clone-代码"}},[s._v("#")]),s._v(" 1.4.2 Clone 代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your-github-account"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/jupiter\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" jupiter\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/douyu/jupiter'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_1-4-3-创建-feature-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-创建-feature-分支"}},[s._v("#")]),s._v(" 1.4.3 创建 feature 分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" feature/my-feature \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_1-4-4-同步代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-4-同步代码"}},[s._v("#")]),s._v(" 1.4.4 同步代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase upstream/master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_1-4-5-提交-commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-5-提交-commit"}},[s._v("#")]),s._v(" 1.4.5 提交 commit")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin my-feature\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_1-4-6-提交-pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-6-提交-pr"}},[s._v("#")]),s._v(" 1.4.6 提交 PR")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("访问 https://github.com/douyu/jupiter, \n\n点击 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Compare"')]),s._v(" 比较变更并点击 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Pull request"')]),s._v(" 提交 PR\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("可以使用 "),t("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("github desktop"),t("OutboundLink")],1),s._v(" 快速发起 PR")])])])}),[],!1,null,null,null);t.default=r.exports}}]);