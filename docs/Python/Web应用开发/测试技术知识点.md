## 软件测试技术-mock


### 1-mock 含义

测试的对象一般称之为SUT(Software Under Test)
mock 即模拟/仿真，SUT 的依赖（dependency）。换句话说，mock 的作用是模拟 SUT 依赖对象的行为。类似在汽车测试中的相关ECU 仿真。

### 2-mock 级别：

（1）方法级别 mock：mock 的对象是一个函数调用，例如获取系统环境变量。

（2）类级别 mock：mock 的对象是一个类，例如一个 HTTP server。

（3）接口级别 mock：mock 的对象是一个 API 接口。

（4）服务级别 mock：mock 的对象是整个服务。比如前端工程师自测试时，可以讲后端整个服务都 mock 掉，这其实等同于将后端的所有接口都 mock。

### 3-mock 方式

- APIs请求构造
- 本地配置
- 配置中心
- 反向代理
- 前向代理


#### 参考连接

![mock 技术](https://blog.csdn.net/g6U8W7p06dCO99fQ3/article/details/114324301)
