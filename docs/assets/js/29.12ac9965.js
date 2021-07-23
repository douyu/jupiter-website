(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{433:function(t,e,r){t.exports=r.p+"assets/img/arch.a43ddb31.png"},511:function(t,e,r){"use strict";r.r(e);var v=r(27),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"jupiter-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jupiter-介绍"}},[t._v("#")]),t._v(" Jupiter 介绍")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://img.shields.io/badge/Language-Go-blue.svg",alt:"Language"}}),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://github.com/douyu/jupiter",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://goproxy.cn/stats/github.com/douyu/jupiter/badges/download-count.svg",alt:"goproxy.cn"}}),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://travis-ci.org/douyu/jupiter",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://travis-ci.org/douyu/jupiter.svg?branch=master",alt:"Build Status"}}),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://codecov.io/gh/douyu/jupiter",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://codecov.io/gh/douyu/jupiter/branch/master/graph/badge.svg",alt:"codecov"}}),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://pkg.go.dev/github.com/douyu/jupiter?tab=doc",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white&style=flat-square",alt:"go.dev reference"}}),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://goreportcard.com/report/github.com/douyu/jupiter",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:"https://goreportcard.com/badge/github.com/douyu/jupiter",alt:"Go Report Card"}}),v("OutboundLink")],1),t._v(" "),v("img",{attrs:{src:"https://img.shields.io/badge/license-Apache--2.0-green.svg",alt:"license"}})]),t._v(" "),v("p",[t._v("Jupiter 是斗鱼开源的一套微服务治理框架，提供丰富的后台功能，管理应用的资源、配置，应用的性能、配置等可视化。")]),t._v(" "),v("blockquote",[v("p",[t._v("Jupiter 是罗马神话的众神之神，在天界掌管诸神，在互联网掌管所有微服务！")])]),t._v(" "),v("h2",{attrs:{id:"架构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构图"}},[t._v("#")]),t._v(" 架构图")]),t._v(" "),v("p",[v("img",{attrs:{src:r(433),alt:"image"}})]),t._v(" "),v("h2",{attrs:{id:"目标"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),v("p",[t._v("我们致力于将 Go 微服务框架标准化，统一错误码、日志、监控、注册、流控的 Schema。将微服务的各个模块可观测、可治理，管理微服务研发侧的全套生命周期。")]),t._v(" "),v("h2",{attrs:{id:"功能点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能点"}},[t._v("#")]),t._v(" 功能点")]),t._v(" "),v("ul",[v("li",[t._v("gRPC：基于官方 gRPC 开发，集成流控和多数据中心方式的服务注册，支持多种 roundrobin，p2c 等负载均衡策略；")]),t._v(" "),v("li",[t._v("配置：使用 toml、yaml 方式管理配置，规范化核心配置，结合远程配置中心，实现配置版本管理和更新，查看配置依赖关系；")]),t._v(" "),v("li",[t._v("日志：基于 zap 日志类库，实现高性能日志库，并对不同环境和条件，实现日志库的自动降级，并对服务端，客户端的慢日志通过配置条件，实现全部慢日志接入；")]),t._v(" "),v("li",[t._v("监控：基于 prometheus go sdk 类库，实现对服务端，客户端的数据监控，并与 prometheus、cond、etcd 数据打通，实现应用自动化数据采集；")]),t._v(" "),v("li",[t._v("数据库：基于 gorm 的封装，将数据库的 trace，慢日志，监控进行了采集；")]),t._v(" "),v("li",[t._v("缓存：基于 go-redis 的封装，将数据库的 trace，慢日志，监控进行了采集，并实现了单个 redis、多从库 redis，客户端 redis 分片，服务端 redis 分片的 api；")]),t._v(" "),v("li",[t._v("系统错误码：区分框架和业务的错误码，将框架错误码文档自动生成，自动化的错误码 SRE 分析工具；")]),t._v(" "),v("li",[t._v("工程化：基于服务标准、创建、开发、运行、治理等生命周期，完成了"),v("code",[t._v("Jupiter")]),t._v("对项目的工程化；")]),t._v(" "),v("li",[t._v("服务治理：基于监控，etcd，配置中心，对服务实现了良好的可观测性，可控制性；")])]),t._v(" "),v("h2",{attrs:{id:"快速开始"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),v("p",[t._v("要求 Go version>=1.13 and GO111MODULE=on")]),t._v(" "),v("h2",{attrs:{id:"安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("go get -u github.com/douyu/jupiter/tools/jupiter\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/workspace\njupiter new jupiter-demo\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("h2",{attrs:{id:"理念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#理念"}},[t._v("#")]),t._v(" 理念")]),t._v(" "),v("h3",{attrs:{id:"工程化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工程化"}},[t._v("#")]),t._v(" 工程化")]),t._v(" "),v("p",[t._v("目前大部分框架侧重点大部分在协议和编解码，过度的关注于技术细节，框架在投入生产环节会带来一堆工程问题。")]),t._v(" "),v("p",[t._v("因此我们"),v("code",[t._v("Jupiter")]),t._v("瞄准于企业级的工程化方案，将服务的标准、创建、开发、运行、治理整个生命周期作为"),v("code",[t._v("Jupiter")]),t._v("的一部分，以工程效率、工程质量、工程可靠性等为指标，解决了公司大量的工程化问题，降低了研发人员的开发成本。")]),t._v(" "),v("ul",[v("li",[t._v("制定标准：制定了服务的配置、链路、监控、header 头等标准；")]),t._v(" "),v("li",[t._v("脚手架：能够通过命令行，实现服务的创建，升级等功能；")]),t._v(" "),v("li",[t._v("配套设施：实现程序的开发，ci，运行，治理，提升工程效率，质量，可靠性；")])]),t._v(" "),v("p",[t._v("工程化的管理使得我们可以保质保量的对项目进行开发，这种理念正是现在业界所缺少的。")]),t._v(" "),v("h3",{attrs:{id:"服务治理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务治理"}},[t._v("#")]),t._v(" 服务治理")]),t._v(" "),v("p",[t._v("衡量一个框架的好坏，除了提供高性能 RPC 通信以外，还要包括提供优质的服务治理能力。")]),t._v(" "),v("p",[t._v("我们"),v("code",[t._v("Jupiter")]),t._v("经历了多个版本的迭代以后，目前的服务治理能力在业界内是非常出色的。")]),t._v(" "),v("ul",[v("li",[t._v("更完善的服务监控，从服务指标上，我们依据 Google SRE 文档制定监控指标（延迟、流量、错误和饱和度），并对各个指标进行了服务监控；从应用维度上，我们能够看到应用实例监控、应用大盘监控、全部应用大盘监控、各种不同指标的 top 榜，实时监测服务质量。")]),t._v(" "),v("li",[t._v("更有价值的错误报警。我们对服务进行了错误收敛，规范系统错误码和业务错误码，并且能够自动生成对应的错误码文档，当错误发生时，我们通过文档就能准确找到错误的位置，提升错误排查速度。")]),t._v(" "),v("li",[t._v("更全面的服务控制。我们利用配置中心和 etcd，将服务做到可控制性。")]),t._v(" "),v("li",[t._v("更全面的 SOP。我们通过全链路压测、混沌工程等方式，提前解决掉系统中可能存在的严重问题，做好 SOP 手册，这样当问题真正来临的时候，我们才会从容处理。")])]),t._v(" "),v("h3",{attrs:{id:"拥抱变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥抱变化"}},[t._v("#")]),t._v(" 拥抱变化")]),t._v(" "),v("p",[t._v("Web 开发和运维技术在不断的发展，短短几年已涌现出了非常多的计算形态，如云计算、边缘计算、容器化、网格化、Serverless 等。服务保障技术方面，异地多活、混沌工程也在不断发展。")]),t._v(" "),v("p",[t._v("语言栈方面，很多公司也在从早期单一的 PHP、Java 栈扩大到多语言栈并存的局面，特别是近年来 Golang 因在容器化和运维效率上的优势，越来越多的被应用到 Web 服务开发。但每次技术迭代，享受效率提升的同时，也在不断经历应用改造和迁移的痛苦。")]),t._v(" "),v("p",[t._v("以斗鱼为例，从 2016 年底我们开始改造基础设施，启动应用服务化建设。短短三年就经历了公有云、异地多活、容器化部署等阶段，目前也在部分业务中探索边缘计算和 Serverless 等新的计算形态。2017 年开始，我们将语言栈从单一的 PHP 扩展为以 Golang、Java、PHP 为主的多语言栈，随之而来的是多 RPC 协议的混战，http1.1、dubbo、gRPC、私有 RPC 协议纷繁冗杂，联调效率极低。经过一段时间的迭代，目前已基本统一为外部调用以 http1.1 为主、内部调用以 gRPC 为主，减少自定义 RPC 协议的使用。")]),t._v(" "),v("p",[t._v("从 Golang 应用的角度来看，面临的是一个在不断变化的运行环境和持续丰富的外部环境，这将不断的产生新的问题，比如：")]),t._v(" "),v("ol",[v("li",[t._v("容器化有 IP 漂移的问题，传统基于 IP 的服务注册和运维方式需要作出改变。")]),t._v(" "),v("li",[t._v("Serverless 的服务监控问题，指标采集以及链路追踪等如何适配？")]),t._v(" "),v("li",[t._v("Service Mesh 相对于传统部署方式，服务注册和发现的方式有很大变化。")]),t._v(" "),v("li",[t._v("多机房部署中，跨机房调用这种’弱网环境‘ 对服务超时、重试、熔断、负载均衡等可用性策略有更高要求。")])]),t._v(" "),v("p",[t._v("不同于传统 RPC 框架和微服务治理框架，"),v("code",[t._v("Jupiter")]),t._v("从一开始就以应用为中心，定位为一个微服务应用的运行时。在历次技术架构，如:")]),t._v(" "),v("ul",[v("li",[t._v("多机房建设")]),t._v(" "),v("li",[t._v("公有化")]),t._v(" "),v("li",[t._v("容器化")])]),t._v(" "),v("p",[t._v("中，"),v("code",[t._v("Jupiter")]),t._v("有效的降低了应用迁移和升级的成本，期间也积累了许多架构经验。未来也必将在")]),t._v(" "),v("ul",[v("li",[t._v("Service Mesh")]),t._v(" "),v("li",[t._v("Serverless")])]),t._v(" "),v("p",[t._v("等计算形态中，发挥重要的作用。")]),t._v(" "),v("h3",{attrs:{id:"提升开发效率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提升开发效率"}},[t._v("#")]),t._v(" 提升开发效率")]),t._v(" "),v("p",[t._v("开发效率是基础框架和类库的核心关注点之一，"),v("code",[t._v("Jupiter")]),t._v("从一开始就挑选和使用了大量开源类库，但也因此带来了若干问题：")]),t._v(" "),v("ul",[v("li",[t._v("开源类库质量参差不齐。如果不加约束的引用开源类库，类库的缺陷就会不受限的在组织内传导，修复的成本非常高。")]),t._v(" "),v("li",[t._v("许多类库并未遵守版本规范，这将会产生兼容性问题，影响开发效率。")]),t._v(" "),v("li",[t._v("许多功能都有多个类库可供选择，不加约束将增加维护和沟通成本，也带来了一定地风险。")]),t._v(" "),v("li",[t._v("不同类库代码风格差异大，有一定沟通成本")]),t._v(" "),v("li",[t._v("不同类库使用的错误处理和错误码、日志、指标采集、对 Debug 模式的支持不尽相同，这既影响开发效率，也影响服务治理。")])]),t._v(" "),v("p",[t._v("基于上述原因，我们在基础框架和类库中，对主要应用场景常用的类库都增加了一层封装，尽量减少对第三方类库的直接使用。封装的方法有:")]),t._v(" "),v("ul",[v("li",[t._v("利用 Golang 在语言层面上的一些机制进行简易封装:")]),t._v(" "),v("li",[t._v("type alias: type T = package2.T")]),t._v(" "),v("li",[t._v("variable binding: var Func = package2.Func")]),t._v(" "),v("li",[t._v("统一 New 方法，以简化创建过程，并达到配置驱动的效果")]),t._v(" "),v("li",[t._v("通过 type embedding 扩展类库功能，为第三方库扩展如动态配置、指标收集、链路追踪、统一日志、统一错误码等治理能力。")]),t._v(" "),v("li",[t._v("通过 interface 抽象限制调用行为。对于未稳定的类库，可以采用这种方式限制用户的调用行为，以便将来进行完善和替换。")])]),t._v(" "),v("p",[t._v("基于以上方法，"),v("code",[t._v("Jupiter")]),t._v("既提高了开发效率，也有效的降低了开发风险。")]),t._v(" "),v("p",[t._v("同时，"),v("code",[t._v("Jupiter")]),t._v("为封装的第三方类库和自研类库提供了统一的治理能力，包括:")]),t._v(" "),v("ul",[v("li",[t._v("统一的指标采集")]),t._v(" "),v("li",[t._v("链路追踪")]),t._v(" "),v("li",[t._v("日志埋点")]),t._v(" "),v("li",[t._v("统一错误处理")]),t._v(" "),v("li",[t._v("动态配置")]),t._v(" "),v("li",[t._v("安全策略")]),t._v(" "),v("li",[t._v("Debug 模式\n等，可以极大的提高应用开发效率。")])]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("Web 后台技术在设计、开发、部署、运维各个阶段都在快速发展，微服务应用架构方法、运行环境和治理环境也都在不断变化。\n基础框架作为沟通业务逻辑和运行环境、治理环境的媒介，是稳定业务的重要手段。")]),t._v(" "),v("p",[v("code",[t._v("Jupiter")]),t._v("服务于整体技术架构，并紧随业界技术趋势，三年我们对"),v("code",[t._v("Jupiter")]),t._v("的研发，其具有超出同行很多优秀的特性，详情请见后文。")])])}),[],!1,null,null,null);e.default=a.exports}}]);