# Juno

> A Distributed Application Management System

Juno 译名朱诺。这个名字来源于古罗马神话中的众神之母。它是斗鱼的微服务管理系统，
如同众神之母一样守护着所有微服务系统。

## Overview

Juno 提供了对微服务进行管理的多项能力，包括应用监控、依赖分析、配置管理等。

## 功能

- 配置
- 治理
- 依赖
- 监控（todo）
- 日志（todo）
- 性能（todo）
- 版本（todo）
- 限流熔断（todo）

## 快速开始

### Requirements

1. Etcd
2. MySQL

### 二进制安装包和安装

```bash
## 下载
wget https://github.com/douyu/juno/release/juno.tar.gz

## 解压
tar -zxvf juno.tar.gz
```

### 初始化和启动

[参考配置](https://github.com/douyu/juno/blob/master/build/config/admin.toml)

```bash
cd juno

# 安装数据库
./bin/install --config=./参考配置

# 启动juno后台
./bin/juno --config=./参考配置

# 启动juno的agent
./bin/juno-agent --config=./参考配置

```

完成以上步骤后，Juno 后台会默认使用 50000 端口提供后台管理界面服务。
在浏览器中打开 `http://localhost:50000`，可以看到登录界面。

初始的用户名： `admin`

初始密码： `admin`

登录后可以看到如下界面代表安装成功：
