// pages/videoPackageDetail/videoPackageDetail.js
import { getVideoPackage } from '../../utils/service.js';
import { subscribeVideoPackage } from '../../utils/service.js';
import { deleteVideoPackage } from '../../utils/service.js';
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify.js';
// 获取应用实例
const app = getApp();

Page({
  data: {
    flag: false,
    button: '立即开通',
    test:{
      demo: [
        '111', '222',
      ]
    },
  },
  // 1.生命周期函数--监听页面加载
  onLoad(options) {
    showLoading();
    // 动态设置当前页面的标题
    app.sdk.setNavigationBarTitle({
      title: options.name,
    });
    this.setData({
      product:options,
      name: options.name.substr(0, 4),
      title: options.name,
    });
    console.log(this.data.test.demo);
    console.log(options);
    // 请求数据，获取视频包产品信息
    const id = parseInt(this.data.product.productId);
    getVideoPackage(id, {
      success: res => {
        console.log(res);
        this.setData({
          button: res.statusCode == 204 || res.data.HTTPStatus == 204 ? '立即开通': '立即退订',
        });
        hideLoading();
      },
      fail: err => {
        console.log(err);
        this.setData({
          disabled: 'true',
        });
        showError(err);
      },
    });
  },
  // 动画实例方法
  genAnimation() {
    return app.sdk.createAnimation({
      duration: 300,
    });
  },
  // 2.滚动动画
  scroll(e) {
    // 获取屏幕宽度，将rpx转换为px
    const windowWidth = 210 * app.gd.rate;
    const scrollTop = e.detail.scrollTop;
    if ((this.data.flag && scrollTop > 10) || (!this.data.flag && scrollTop < 10)){
      return;
    };
    this.data.flag = scrollTop > 10;
    const animation = this.genAnimation();
    const animationLogoData = this.genAnimation();
    const animationTitleData = this.genAnimation();
    const animationScroll = this.genAnimation();
    if (scrollTop < 10) {
      animation.height("40%").step();
      animationLogoData.width("420rpx").height("394rpx").step();
      animationTitleData.scale(1, 1).translate(0, 0).step();
      animationScroll.height("40%").step();
    } else{
      animation.height("25%").step();
      animationLogoData.width("311rpx").height("301rpx").step();
      animationTitleData.scale(0.7, 0.7).translate(-25, -windowWidth).step();
      animationScroll.height("55%").step();
    };
    this.setData({
      animationData: animation.export(),
      animationLogoData: animationLogoData.export(),
      animationTitleData: animationTitleData.export(),
      animationScrollData: animationScroll.export(),
    });
  },
  // 4.请求数据，订购视频包业务
  subscribeVideoPackage() {
    const id = parseInt(this.data.product.productId);
    app.sdk.showModal({
      content: '您是否确定订购' + this.data.title + '？',
      success: res => {
        if(res.confirm) {
          showLoading();
          subscribeVideoPackage(id, {
            success: res => {
              console.log(res);
              this.setData({
                disabled: 'true',
              });
              showToast('定购受理成功', 0);
            },
            fail: err => {
              console.log(err);
              showError(err);
            },
          });
        };
      },
    });
  }, 
  // 5.请求数据，退订视频包业务
  deleteVideoPackage() {
    const id = parseInt(this.data.product.productId);
    app.sdk.showModal({
      content: '您是否确定退订' + this.data.title + '？',
      success: res => {
        if(res.confirm) {
          showLoading();
          deleteVideoPackage(id, {
            success: res => {
              console.log(res);
              this.setData({
                button: '立即开通',
              });
              showToast('退订受理成功', 0);
            },
            fail: err => {
              console.log(err);
              showError(err);
            },
          });
        };
      },
    });
  }, 
})
