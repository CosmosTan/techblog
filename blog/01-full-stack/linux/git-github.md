*1 [git clone 过慢](https://segmentfault.com/a/1190000039768491)

(1) 打开hosts文件
-   Windows上的hosts文件路径在`C:Windows/System32/drivers/etc/hosts`
-   Linux的hosts文件路径在：`sudo vim /etc/hosts`
(2)在hosts文件末尾添加两行(对应上面查到的ip)
```c
199.232.69.194 github.global-ssl.fastly.net
140.82.112.3 github.com 
```
-   Winodws系统的做法：打开CMD，输入`ipconfig /flushdns`
-   CentOS的做法：在终端输入`nscd -i hosts`


*2 [同一台电脑配置Github、gitee](https://blog.csdn.net/u010698107/article/details/113485131)

```shell

# 查看是否设置
git config --global --list

# 删除设置
git config --global --unset user.name
git config --global --unset user.email
git config --global --unset yser.name
git config --global --unset yser.email

# 创建ssh key
cd ~/.ssh # 进入 .ssh 文件夹下
# 生成 key，邮件地址为 Gitee 或者 Github 使用的邮件地址 
ssh-keygen -t rsa -C "xxx@xxx.com"

ssh-keygen -t rsa -C "Github 使用的邮件地址"
ssh-keygen -t rsa -C "Gitee 使用的邮件地址"


-   id_rsa.github
-   id_rsa.github.pub
-   id_rsa.gitee
-   id_rsa.gitee.pub
```

```shell
# 在 .ssh 文件夹中创建 config 文件
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github

# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee

```

```shell 
# 测试是否正常

ssh -T git@github.com
ssh -T git@gitee.com

```







```python
nvidia-docker run -it \
--mount type=bind,source=/home/tanqingyu,target=/usr/local/tanqingyu \
--gpus all 
continuumio/anaconda3 /bin/bash


docker run -it \
-p 12345:8888 \
--mount type=bind,source=/data/zzu_student/filename,target=/usr/local/filename \
--gpus all 
continuumio/anaconda3 /bin/bash

```


[cuda驱动更新](https://developer.nvidia.com/cuda-11.2.0-download-archive?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1604&target_type=runfilelocal)

[cuda驱动更新安装](https://blog.csdn.net/zxy1198186906/article/details/122327924?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169237164916800225552506%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=169237164916800225552506&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-122327924-null-null.142^v93^koosearch_v1&utm_term=cuda%20%E6%9B%B4%E6%96%B0&spm=1018.2226.3001.4187)

```bash
## 卸载旧cuda
sudo /usr/bin/nvidia-uninstall
sudo apt-get --purge remove nvidia*                                           
sudo apt-get --purge remove "*cublas*" "cuda*"
sudo apt-get --purge remove "*nvidia*"
sudo apt autoremove
sudo reboot

## 安装新cuda

wget https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.27.04_linux.run
sudo sh cuda_11.2.0_460.27.04_linux.run


```