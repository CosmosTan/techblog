# 神经网络：
多层感知机（multi-layer perceptron, MLP）也叫作深度前馈网络（deep feedforward network）或前馈神经网络（feedforward neural network）， 它通过已有的信息或者知识来对未知事物进行预测．
## 1、DNN

## 二、基于梯度的学习
### （1）代价函数

### （2）输出单元形式

❑ $o ∈ R^d$ 输出属于整个实数空间,或者某段普通的实数空间,比如函数值趋势的预测,年龄的预测问题等。**输出层直接恒等映射**（可以不加激活函数）。误差的计算直接基于最后一层的输出o和真实值 y 进行计算,如采用均方差误差函数度量输出值o与真实值y之间的距离:  
❑ $o ∈ [0,1]$ 输出值特别地落在[0, 1]的区间,如图片生成,图片像素值一般用[0, 1]表示;或者二分类问题的概率,如硬币正反面的概率预测问题**Sigmoid！！**  
❑ $o ∈ [0, 1]$, 输出值落在[0, 1]的区间,并且所有输出值之和为 1,常见的如多分类问题,如 MNIST 手写数字图片识别,图片属于 10 个类别的概率之和为 1。**Softmax！！**  
❑ $o ∈ [−1, 1]$ 输出值在[-1, 1]之间。**tanh！！**

## 三、隐藏层，隐藏单元
### （1）激活函数：

#### 1 sigmoid/logistic
[sigmoid 和 softmax 函数区别](https://zhuanlan.zhihu.com/p/35697684)

![[Pasted image 20231026180844.png|300]]


- 当人们逐渐关注到到基于梯度的学习时， sigmoid函数是一个自然的选择，因为它是一个平滑的、可微的阈值单元近似。 当我们想要将输出视作二元分类问题的概率时， sigmoid仍然被广泛用作输出单元上的激活函数 （sigmoid可以视为softmax的特例）
![[Pasted image 20230602020620.png]]
- 对于一个定义域在R中的输入， sigmoid函数将输入变换为区间(0, 1)上的输出。 因此，sigmoid通常称为_挤压函数_（squashing function）： 它将范围（-inf, inf）中的任意输入压缩到区间（0, 1）中的某个值：
$$\operatorname{sigmoid}(x) = \frac{1}{1 + \exp(-x)}.$$
- sigmoid函数的导数：**当输入为0时，sigmoid函数的导数达到最大值0.25**； 而输入在任一方向上越远离0点时，导数越接近0。$$\frac{d}{dx} \operatorname{sigmoid}(x) = \frac{\exp(-x)}{(1 + \exp(-x))^2} = \operatorname{sigmoid}(x)\left(1-\operatorname{sigmoid}(x)\right).$$
![[Pasted image 20231026165525.png|500]]

**Sigmoid's limitations：**
- 在（-3， 3）以外区域，导数趋近于0，梯度消失问题。（_Vanishing gradient_ problem）
- The output of the logistic function is not symmetric around zero. So the output of all the neurons will be of the same sign. This makes the [training of the neural network](https://www.v7labs.com/training) more difficult and unstable

#### 2 tanh函数：
- 与sigmoid函数类似， tanh(双曲正切)函数也能将其输入压缩转换到区间(-1, 1)上。 tanh函数的公式如下：$$\operatorname{tanh}(x) = \frac{1 - \exp(-2x)}{1 + \exp(-2x)}.$$
- tanh函数导数：$$\frac{d}{dx} \operatorname{tanh}(x) = 1 - \operatorname{tanh}^2(x).$$**当输入接近0时，tanh函数的导数接近最大值1**。 与我们在sigmoid函数图像中看到的类似， 输入在任一方向上越远离0点，导数越接近0

![[Pasted image 20230602021036.png]]

#### 3 RELU

_修正线性单元_（Rectified linear unit，_ReLU_）
$$\operatorname{ReLU}(x) = \max(x, 0).$$
求导表现得特别好：**要么让参数消失，要么让参数通过**。 这使得优化表现得更好，并且ReLU减轻了困扰以往神经网络的梯度消失问题。
![[Pasted image 20230602020639.png]]

  **三者的主要区别**： 

- Sigmoid 型激活函数会导致一个非稀疏的神经网络，而 **ReLU 却具有很好 的稀疏性**，大约50%的神经元会处于激活状态． 
- 在优化方面，相比于Sigmoid型函数的两端饱和，ReLU函数为左饱和函数， **且在 𝑥 > 0 时导数为 1，在一定程度上缓解了神经网络的梯度消失问题**，加速梯度下降的收敛速度．

>  **💡Note:**  Although both sigmoid and tanh face vanishing gradient issue, _tanh is zero centered, and the gradients are not restricted to move in a certain direction._ Therefore, in practice, tanh nonlinearity is always preferred to sigmoid nonlinearity.
#### 4 others

| Active function | Mathematical fomula    | advantage | limitations |
| --------------- | ---------------------- | --------- | ----------- |
| Leaky ReLU      | $f(x) = max(0.1x,x)$              |           |             |
| Parametric ReLU | $f(x) = max(ax,x)$                                                                                                                             |           |             |
| ELU             | $\left\{\begin{array}{ll} x & \text { for } x  \geqslant 0 \\ \alpha\left(e^{x}-1\right) & \text {for } x<0\end{array}\right.$            |           |             |
| **GELU**        | $\begin{array}{c}f(x)=x P(X \leq x)=x \Phi(x) \\=0.5 x\left(1+\tanh \left[\sqrt{2 / \pi}\left(x+0.044715x^{3}\right)\right]\right)\end{array}$ |           |             |
| SELU            | ![[Pasted image 20231026181024.png\|300]]              |           |             |
| **Swish**       | $f(x) = x \times sigmoid(x)$                      |           |             |






![[Pasted image 20231026174818.png]]



#### 5 how to choose
Here’s what you should keep in mind.  
As a rule of thumb, you can begin with using the ReLU activation function and then move over to other activation functions if ReLU doesn’t provide optimum results.

>And here are a few other guidelines to help you out.
1. ReLU activation function should only be used in the hidden layers.
2. Sigmoid/Logistic and Tanh functions should not be used in hidden layers as they make the model more susceptible to problems during training (due to vanishing gradients).
3. Swish function is used in neural networks having a depth greater than 40 layers.  

>Finally, a few rules for choosing the activation function for your output layer based on the type of prediction problem that you are solving:  
1. **Regression** - Linear Activation Function
2. **Binary Classification**—Sigmoid/Logistic Activation Function
3. **Multiclass Classification**—Softmax
4. **Multilabel Classification**—Sigmoid  
The activation function used in hidden layers is typically chosen based on the type of neural network architecture.  
5. **Convolutional Neural Network (CNN)**: ReLU activation function.
6. [**Recurrent Neural Network**](https://www.v7labs.com/blog/recurrent-neural-networks-guide): Tanh and/or Sigmoid activation function.


[Activation Functions in Neural Networks](https://www.v7labs.com/blog/neural-networks-activation-functions)
[Activation Functions in Neural Networks--SAGAR SHARMA](https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6)

[Activation Functions — All You Need To Know](https://medium.com/analytics-vidhya/activation-functions-all-you-need-to-know-355a850d025e#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImEwNmFmMGI2OGEyMTE5ZDY5MmNhYzRhYmY0MTVmZjM3ODgxMzZmNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQwMDU1Nzk2NzIzMzMwMDY0MzMiLCJlbWFpbCI6InRhbnFpbmd5dTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTY5ODMwOTcwOSwibmFtZSI6InFpbmd5dSB0YW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSnRqSVdpcUNtWlJXRWRzVWFFa1ozRFU3OUlOQ3ZPOEg3bnYzSllTbFdxVnc9czk2LWMiLCJnaXZlbl9uYW1lIjoicWluZ3l1IiwiZmFtaWx5X25hbWUiOiJ0YW4iLCJsb2NhbGUiOiJ6aC1DTiIsImlhdCI6MTY5ODMxMDAwOSwiZXhwIjoxNjk4MzEzNjA5LCJqdGkiOiJiOGM1M2VjNjA2ZjE4OWIxYjRjNTFlZGIyZTU4ZGZmYWIwZjQxNTMyIn0.sfevZViBh8cGTGjvJt6KhPkCYb3krkiIfvWBue1GWzi50eo-C1AgdBzOetZaFmwb5TOkru07VAFESRFYyzW4cTw1TojGI8m6QUozgdVCOsnzyDmYUSlXxKXH4UkAfxInUDxuEeBy0VTcVOvSAFah6rGAsOFyb8foDa1pg3pdbrOplTAx23NgwT5GF640qSIi8J_8AHtPpseO7sklSVCBat0ibFV33IpJ6Wh3RtyPOC6ZQkzbKP6L-_PDeDJ7XSUOm_ziiBXPHFr0IbqGOjc06WlLjt53VqDt9YYkSRwopaZFVazMZdjqVwp33U9q87qsdC2GFhWBUfeOGk46-yB7tw)
![[Pasted image 20231026172356.png]]
## 四、反向传播算法

#### 1 梯度下降
#### 2 链式求导法则






