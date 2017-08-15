# svg方式引入图标调研（vs fontclass）

## 运行demo

```
> npm i
```

```
> npm run serve
```


## 一、fontclass方式引入图标

具体方式参考：
http://iconfont.cn/help/detail?helptype=code 中的 font-class引用

### 性能

1. 移动端，考拉app中
测试：加载848 个图标，平台：红米note3，性能很差；  
[demo](http://localhost:3333/fontclass.html)   
解析所有图标：28.9ms（el.innerHTML之前，对比 el.innerHTML之后）
平均解析一个图标：0.034ms
2. 在chrome浏览器，页面performance分析：
!￼[image](https://note.youdao.com/yws/api/group/13812186/noteresource/353B16A9BD07449EB414641ACC05D2DA/version/26?method=get-resource)

### 体积

需要加载iconfont.css（53个图标）：原大小：3k，gzip：1.1k  
平均一个图标大小：20b

### 特点

1、体积小；
2、解析速度快；
3、兼容性良好，支持ie8+；

## 二、svg方式引入图标：

具体方式参考：
http://iconfont.cn/help/detail?helptype=code 中的 symbol引用；  
原理参考：http://520ued.com/article/591bc48617c24520590f564b 中的第五种；

### 性能
1. 移动端，考拉app中
测试：加载848 个图标，平台：红米note3，性能很差；  
[demo](http://localhost:3333/svg.html)   
解析所有图标：192ms（el.innerHTML之前，对比 el.innerHTML之后）
平均解析一个图标：0.22ms
2. 在chrome浏览器，页面performance分析：
!￼[image](https://note.youdao.com/yws/api/group/13812186/noteresource/B2099C11F820477A9D2711E301269455/version/27?method=get-resource)

### 体积

需要加载iconfont.js（53个图标）：原大小：60k，gzip：20.4k  
平均一个图标大小：385b

### 特点

1. 方便设置图标大小，font-size:50px，那么就是按照视觉提供的正方形svg，宽高50px等比例缩放显示。而iconfont就参差不齐了；
2. 解析速度降低，且需要先执行一段js，但rendering速度其实是提高了的。整体速度稍有下降，但影响可以接受；
3. 体积增加了，但在gzip之后，平均一个图标385b，并没有增加太多。尤其是相对于png来说；
4. 支持填充多种颜色，但渐变色只支持线性渐变、经向渐变；
5. 可以添加动画；
6. 可读性好，因为是svg，内部可以添加title等标签，增强seo和无障碍能力；svg引入失败，显示空白；而iconfont引入失败，会显示乱码；
7. 据说在某些浏览器上，可能会糊边，解决方法是：将svg绘制在可以被整除的网格内，iconfont.cn网站提供的网格就可以；参考：http://520ued.com/article/svg-icon-part-one.html
8. 兼容性较差，支持 ie9+

### 总结

建议在移动端工程中使用[iconfont.cn](http://iconfont.cn)中提供的 svg symbol 方式引入图标，替代fontclass的方式。

其他参考资料：

https://www.zhihu.com/question/26865508  
http://520ued.com/article/591bc48617c24520590f564b  
https://isux.tencent.com/why-svg.html  
http://iconfont.cn/help/detail?helptype=code  
