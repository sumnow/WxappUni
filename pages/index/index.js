
import { getAccountInfo } from '../../utils/service';
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify';
import { flow, upArrow, voice } from '../../utils/icons';
import dateformat from '../../utils/dateformat';

const app = getApp()

Page({
  data: {
    // rich: [
    //   [
    //     {
    //       style: "font-size: 20rpx;",
    //       content: "wahhahahahhah ",
    //       eventType: "",
    //     },
    //     {
    //       style: "font-size: 30rpx;color: red;",
    //       content: "miehahhahaha ",
    //       eventType: "",
    //     },
    //   ],
    //   [
    //     {
    //       style: "font-size: 20rpx;",
    //       content: "wahhahahahhah ",
    //       eventType: "",
    //     },
    //     {
    //       style: "font-size: 30rpx;color: red;",
    //       content: "miehahhahaha ",
    //       eventType: "",
    //     },
    //   ],
    // ],
    accountInfo: {
      productName: '套餐名称',
      mobile: '**********',
      voicesInfo: {
        remainValue: '--',
        unit: '',
      },
      trafficInfo: {
        remainValue: '--',
        unit: '',
      },
      useChargeInfo: {
        remainValue: '--',
        unit: '',
      },
      remainChargeInfo: {
        remainValue: '--',
        unit: '',
      },
      scoreInfo: {
        remainValue: '--',
        unit: '',
      },
      detail: {},
    },
    flowEmergency: false,
    voiceEmergency: false,
    flowColor: '#27a6f4',
    voiceColor: '#09e000',
    icons: {
      flow,
      upArrow,
      voice,
    },
  },
  onLoad() {
    if (app.gd.token) {
      this.drawBase();
      this.getAccountInfo(1);
    } else {
      this.goLogin();      
    }
  },
  onPullDownRefresh() {
    this.getAccountInfo();
  },
  // api 
  getAccountInfo(loading) {
    if (loading) {
      showLoading();
    }
    getAccountInfo({
      success: res => {
        if (loading) {
          hideLoading();
        }
        this.setData({
          accountInfo: res.data,
        });
        const voicePer = (res.data.voicesInfo.remainPercent || 0) / 100;
        const flowPer = (res.data.trafficInfo.remainPercent || 0) / 100;
        this.drawAnimation(flowPer, voicePer);
      },
      fail: err => {
        showError(err);        
      },
      complete: res => {
        app.sdk.stopPullDownRefresh();
      }
    });
  },
  // methods 
  chartData() {
    const rate = app.gd.rate;
    // container 320 rpx
    const c = 280;
    const lineWith = 30;
    const nap = 6;
    const offset = c * rate / 2;
    const center = [offset, offset];
    const r1 = (c - lineWith) * rate / 2;
    const r2 = r1 - (lineWith + nap) * rate;
    return {
      lineWith: lineWith * rate,
      center,
      r1,
      r2,
    }
  },
  drawChart(base, o1, o2) {
    const d = this.chartData();
    const ctx = app.sdk.createCanvasContext('packageStatus');
    ctx.setLineWidth(d.lineWith);
    ctx.setGlobalAlpha(0.12);
    ctx.setLineCap('round');
    this.drawArc(ctx, d.center, '#ffffff', d.r1, 0.5, 1.5 + 0.5);
    this.drawArc(ctx, d.center, '#ffffff', d.r2, 2 / 3, 1.5 + 2 / 3);
    if (!base) {
      ctx.setGlobalAlpha(1);
      this.drawArc(ctx, d.center, this.data.flowColor, d.r1, 0.5, o1 * 1.5 + 0.5);
      this.drawArc(ctx, d.center, this.data.voiceColor, d.r2, 2 / 3, o2 * 1.5 + 2 / 3);
    }
    ctx.draw();
  },
  drawArc(ctx, center, color, radius, start, end) {
    ctx.beginPath();
    ctx.setStrokeStyle(color);
    ctx.arc(center[0], center[1], radius, start * Math.PI, end * Math.PI, false);
    ctx.stroke();
  },
  drawBase() {
    this.drawChart(true, 1, 1);
  },
  drawAnimation(e1, e2) {
    const seconds = 1;
    const frame = 60;
    let times = 0;
    const step1 = e1 / 60 / seconds;
    let tmp1 = 0;    
    const step2 = e2 / 60 / seconds;
    let tmp2 = 0;
    const timer = setInterval(() => {
      tmp1 += step1;
      tmp2 += step2;
      times += 1;
      this.drawChart(false, tmp1, tmp2);
      if (times >= seconds * frame) {
        clearInterval(timer);
      }
    }, 1000 / frame);
  },
  goLogin() {
    app.sdk.ucRedirectTo({
      url: '../login/login',
    });
  },
  // UI event
  goChargeRecords() {
    app.sdk.ucNavigateTo({
      url: '../chargeRecords/chargeRecords',
    });
  },
  goBills() {
    app.sdk.ucNavigateTo({
      url: '../bills/bills',
    });
  },
  goFlowPackages() {
    app.sdk.ucNavigateTo({
      url: '../flowPackages/flowPackages?mobile=' + this.data.accountInfo.mobile,
    });
  },

  testFunc() {

  },

});
