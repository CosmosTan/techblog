(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{305:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"一、-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-linux"}},[t._v("#")]),t._v(" 一、 Linux")]),t._v(" "),e("p",[t._v("根据维护团体（商业公司维护和社区组织维护）的不同，可以将众多 Linux 发行版分为 2 个系列，分别为 RedHat 系列和 Debian 系列。")]),t._v(" "),e("ul",[e("li",[t._v("RedHat 系列: 代表 Linux 发行版有 RedHat、CentOS、Fedora 等，使用 yum 作为包管理器；")]),t._v(" "),e("li",[t._v("Debian 系列有: Debian、Ubuntu 等，使用 apt 作为包管理器")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/chen1415886044/article/details/105094688",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDB入门"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/qq583357467/article/details/109607920?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109607920-blog-70045195.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-109607920-blog-70045195.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("core dumped (python)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_41792787/article/details/104980034?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104980034-blog-124334882.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104980034-blog-124334882.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Segmentation fault (core dumped)——pytorch"),e("OutboundLink")],1),t._v("\nLinux 提示符改动 PS1")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/10/tmux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 命令 tmux"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://yangfangs.github.io/wiki/2020-4-12-tmux-shortcut-key/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tmux常用操作"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("tmux new "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("session-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ntmux "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\ntmux attach "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" sessionName\npython training_validation.py "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),e("p",[t._v("然后先按快捷键"),e("code",[t._v("ctrl")]),t._v("+"),e("code",[t._v("b")]),t._v("，松开后再按下"),e("code",[t._v("[")]),t._v("，即进入历史输出信息查看模式，可通过键盘上的上下左右键来滚动历史输出信息。"),e("br"),t._v("\n如果要退出查看模式，按下"),e("code",[t._v("q")]),t._v("即可")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("nvidia-docker run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mount")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind,source"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/tanqingyu,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/tanqingyu "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--gpus")]),t._v(" all pytorch/pytorch /bin/bash\n")])])]),e("h2",{attrs:{id:"环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mount")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind,source"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/tanqingyu,target"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/tanqingyu "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--gpus")]),t._v(" all \ncontinuumio/miniconda3 /bin/bash\n")])])]),e("h3",{attrs:{id:"详解coredump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详解coredump"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/MOU_IT/article/details/88903668?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-88903668-blog-71435031.235%5Ev38%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-88903668-blog-71435031.235%5Ev38%5Epc_relevant_default_base&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解coredump"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"tmux-内使用前缀-ctrl-b-然后对应快捷键执行命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tmux-内使用前缀-ctrl-b-然后对应快捷键执行命令"}},[t._v("#")]),t._v(" Tmux 内使用前缀 Ctrl+b 然后对应快捷键执行命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("快捷键")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("?")]),t._v(" "),e("td",[t._v("所有快捷键，q退出")])]),t._v(" "),e("tr",[e("td",[t._v(":new sessionName")]),t._v(" "),e("td",[t._v("创建新会话")])]),t._v(" "),e("tr",[e("td",[t._v("s")]),t._v(" "),e("td",[t._v("切换会话")])]),t._v(" "),e("tr",[e("td",[t._v("$")]),t._v(" "),e("td",[t._v("重命名当前会话")])]),t._v(" "),e("tr",[e("td",[t._v("d")]),t._v(" "),e("td",[t._v("离开会话返回shell（与tmux detach功能相同）")])]),t._v(" "),e("tr",[e("td",[t._v("Ctrl+z")]),t._v(" "),e("td",[t._v("挂起会话，返回shell")])])])]),t._v(" "),e("h1",{attrs:{id:"二、vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、vim"}},[t._v("#")]),t._v(" 二、VIm")]),t._v(" "),e("p",[t._v("vim 字符串替换")]),t._v(" "),e("p",[t._v("eeee")]),t._v(" "),e("h1",{attrs:{id:"三、windowds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、windowds"}},[t._v("#")]),t._v(" 三、windowds")]),t._v(" "),e("p",[t._v("hosts文件：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copyright (c) 1993-2009 Microsoft Corp.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This file contains the mappings of IP addresses to host names. Each")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# entry should be kept on an individual line. The IP address should")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# be placed in the first column followed by the corresponding host name.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The IP address and the host name should be separated by at least one")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# space.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Additionally, comments (such as these) may be inserted on individual")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# lines or following the machine name denoted by a '#' symbol.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For example:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      102.54.94.97     rhino.acme.com          # source server")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       38.25.63.10     x.acme.com              # x client host")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost name resolution is handled within DNS itself.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t127.0.0.1       localhost")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t::1             localhost")]),t._v("\n\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换gcc版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--config")]),t._v(" gcc\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换g++到5.*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--config")]),t._v(" g++\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/heart_arsonists/article/details/107115956?ops_request_misc=&request_id=9edbbffac01346f0ad385e3984bf7740&biz_id=&utm_medium=distribute.pc_search_result.none-task-blog-2~all~koosearch~default-8-107115956-null-null.142%5Ev93%5Ekoosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 16.04 无法使用alternative"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /usr/bin/cpp /usr/bin/gcc /usr/bin/g++\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /usr/bin/cpp-7 /usr/bin/cpp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /usr/bin/gcc-7 /usr/bin/gcc\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /usr/bin/g++-7 /usr/bin/g++\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/wowbing2/article/details/117962272?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169237577616800182176191%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169237577616800182176191&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-7-117962272-null-null.142%5Ev93%5Ekoosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("# Ubuntu18.04安装不同版本的GCC，并切换当前的默认GCC版本"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:ubuntu-toolchain-r/test\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc-5 g++-5\n\n")])])]),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/fuluoce/article/details/124629700?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169237577616800182176191%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169237577616800182176191&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-124629700-null-null.142%5Ev93%5Ekoosearch_v1&utm_term=update-alternatives%3A%20error%3A%20no%20alternatives%20for%20gcc&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("# Ubuntu18.04安装不同版本的GCC"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);