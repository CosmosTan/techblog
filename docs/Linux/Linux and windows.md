# 一、 Linux 



根据维护团体（商业公司维护和社区组织维护）的不同，可以将众多 Linux 发行版分为 2 个系列，分别为 RedHat 系列和 Debian 系列。
- RedHat 系列: 代表 Linux 发行版有 RedHat、CentOS、Fedora 等，使用 yum 作为包管理器；
- Debian 系列有: Debian、Ubuntu 等，使用 apt 作为包管理器

[GDB入门](https://blog.csdn.net/chen1415886044/article/details/105094688)
[core dumped (python)](https://blog.csdn.net/qq583357467/article/details/109607920?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109607920-blog-70045195.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109607920-blog-70045195.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2)

[Segmentation fault (core dumped)——pytorch](https://blog.csdn.net/weixin_41792787/article/details/104980034?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104980034-blog-124334882.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104980034-blog-124334882.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2)
Linux 提示符改动 PS1

[Linux 命令 tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) 

[tmux常用操作](https://yangfangs.github.io/wiki/2020-4-12-tmux-shortcut-key/)

```bash
tmux new -s <session-name>
tmux ls
tmux attach -t sessionName
python training_validation.py 0 0 0
```

然后先按快捷键`ctrl`+`b`，松开后再按下`[`，即进入历史输出信息查看模式，可通过键盘上的上下左右键来滚动历史输出信息。  
如果要退出查看模式，按下`q`即可

```bash
nvidia-docker run -it --mount type=bind,source=/home/tanqingyu,target=/usr/local/tanqingyu --gpus all pytorch/pytorch /bin/bash
```

## 环境配置

```bash
docker run -it \
--mount type=bind,source=/home/tanqingyu,target=/usr/local/tanqingyu \
--gpus all 
continuumio/miniconda3 /bin/bash
```

### [详解coredump](https://blog.csdn.net/MOU_IT/article/details/88903668?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-88903668-blog-71435031.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-88903668-blog-71435031.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2)



#### Tmux 内使用前缀 Ctrl+b 然后对应快捷键执行命令

|快捷键|说明|
|---|---|
|?|所有快捷键，q退出|
|:new sessionName|创建新会话|
|s|切换会话|
|$|重命名当前会话|
|d|离开会话返回shell（与tmux detach功能相同）|
|Ctrl+z|挂起会话，返回shell|

# 二、VIm
vim 字符串替换

eeee

# 三、windowds

hosts文件：
```shell
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost

```

```bash
 # 切换gcc版本
sudo update-alternatives --config gcc
 
# 切换g++到5.*
sudo update-alternatives --config g++
```

[Ubuntu 16.04 无法使用alternative](https://blog.csdn.net/heart_arsonists/article/details/107115956?ops_request_misc=&request_id=9edbbffac01346f0ad385e3984bf7740&biz_id=&utm_medium=distribute.pc_search_result.none-task-blog-2~all~koosearch~default-8-107115956-null-null.142^v93^koosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187)

```bash
sudo rm /usr/bin/cpp /usr/bin/gcc /usr/bin/g++
sudo ln -s /usr/bin/cpp-7 /usr/bin/cpp
sudo ln -s /usr/bin/gcc-7 /usr/bin/gcc
sudo ln -s /usr/bin/g++-7 /usr/bin/g++
```

[# Ubuntu18.04安装不同版本的GCC，并切换当前的默认GCC版本](https://blog.csdn.net/wowbing2/article/details/117962272?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169237577616800182176191%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169237577616800182176191&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-7-117962272-null-null.142^v93^koosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187)

```bash
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get install gcc-5 g++-5

```


[# Ubuntu18.04安装不同版本的GCC](https://blog.csdn.net/fuluoce/article/details/124629700?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169237577616800182176191%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169237577616800182176191&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-124629700-null-null.142^v93^koosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187)