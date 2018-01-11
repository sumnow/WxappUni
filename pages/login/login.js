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
    this.drawSuccess();
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
    this.drawSuccess();
    setTimeout(() => {
      app.sdk.redirectTo({
        url: '../index/index',
      });
    }, 2000);
  },
  drawSuccess() {
    const rate = app.gd.rate;
    const c = 120;
    const offset = c * rate / 2;
    const lineWith = 8;
    const transf = v => (v + 1) * offset;
    const p1 = [-0.7, 0].map(transf);
    const p2 = [-0.2, 0.45].map(transf);
    const p3 = [0.65, -0.45].map(transf);
    const ctx = app.sdk.createCanvasContext('bindSuccess');
    ctx.setLineWidth(lineWith * rate);    
    ctx.setLineCap('round');
    ctx.setLineJoin('round');
    ctx.setStrokeStyle('#09e000');
    ctx.beginPath();
    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.stroke();
    ctx.draw()    
  },
});
