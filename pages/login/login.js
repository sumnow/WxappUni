//login.js
import { sendCode, bindPhone } from '../../utils/service.js';
import { verificationCode, loginPhone } from '../../utils/icons';
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify';

//获取应用实例
const app = getApp();

Page({
  data: {
    phoneNumber: '',
    code: '',
    banded: false,
    codeTitle: '发送验证码',
    avatarUrl: '',
    countDownSeconds: 0,
    sendingCode: false,
    iconSize: 30,
    icons: {
      verificationCode,
      loginPhone,
    },
  },
  onLoad: function() {
    if (app.gd.userInfo) {
      this.setData({
        avatarUrl: app.gd.userInfo.avatarUrl,
      });
    } else {
      app.userInfoReadyCallback = res => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
        });
      };
    }
  },
  // UI event
  sendCode() {
    if (this.data.countDownSeconds > 0 || this.data.sendingCode) {
      return;
    }
    //send code here
    this.data.sendingCode = true;
    const data = {
      mobile: this.data.phoneNumber,
    };
    sendCode({
      data,
      success: res=> {
        this.countDown();
        showToast('验证码发送成功', 0);
      },
      fail: err => {
        showError(err);
      },
      complete: () => {
        this.data.sendingCode = false;
      },
    });
  },
  bindPhone() {
    const data = {
      mobile: this.data.phoneNumber,
      captcha: this.data.code,
    };
    showLoading();
    bindPhone({
      data,
      success: res => {
        hideLoading();
        const token = res.data.token;
        app.setToken(token);
        this.bindSuccess();
      },
      fail: err => {
        showError(err);
      },
    })
  },
  phoneInput(e) {
    this.setData({
      phoneNumber: e.detail.value,
    });
  },
  codeInput(e) {
    this.setData({
      code: e.detail.value,
    });
  },
  // methods
  countDown() {
    this.data.countDownSeconds = 60;
    const timer = setInterval(() => {
      this.data.countDownSeconds -= 1;
      const codeDown = this.data.countDownSeconds === 0;
      if (codeDown) {
        clearInterval(timer);
      }
      this.setData({
        codeTitle: codeDown ? '发送验证码' : this.data.countDownSeconds + '秒',
      });
    }, 1000);
  },
  bindSuccess() {
    this.setData({
      banded: true,
    });
    setTimeout(() => {
      app.sdk.redirectTo({
        url: '../index/index',
      });
    }, 2000);
  },
});
