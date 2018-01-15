//app.js
import swizzling from './utils/methodsSwizzling';
import base64 from './utils/base64';

App({
  onLaunch() {
    String.prototype.format = function () {
      if (arguments.length == 0) return this;
      var param = arguments[0];
      var s = this;
      if (typeof (param) == 'object') {
          for (var key in param)
              s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
          return s;
      } else {
          for (var i = 0; i < arguments.length; i++)
              s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
          return s;
      }
    }
    this.isWechat = window === undefined;
    this.sdk = this.isWechat ? wx : my

    // 登录
    swizzling(this);
    
    this.sdk.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
    this.gd.token = this.sdk.getStorageSync('token');
    this.setToken(this.gd.token, 0);
    // this.gd.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMDAwMDAxIiwiZXhwIjoxNTQ1ODkwOTE1LCJqdGkiOiIxNTY5MjE1MTUzNyJ9.oVJTqj0JKNiRoI5jk3L49_-iMpxJEQXvU3YDoHkSXKE'
    // 获取用户信息
    this.getUserInfo();
    
    // this.sdk.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       this.getUserInfo();
    //     };
    //   },
    //   fail: err => {
    //     console.log(err);
    //   },
    // });
    this.getPhoneSystemInfo({
      success: res => {
        console.log(res);
      },
    });
  },
  setToken(t, refresh=true) {
    if (refresh) {
      this.gd.token = t;
      this.sdk.setStorageSync('token', t);
    }
    if (t) {
      const i = t.split(".")[1];
      const obj= JSON.parse(base64.decode(i));
      this.gd.jwtInfo = {
        phone: obj.jti,
        delegate: obj.aud,
      };
    } else {
      this.gd.jwtInfo = null;
    }
  },
  getUserInfo() {
    this.sdk.getUserInfo({
      success: res => {
        // 可以将 res 发送给后台解码出 unionId
        this.gd.userInfo = res.userInfo;
        console.log(res.userInfo);
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res);
          this.userInfoReadyCallback = null;
        }
      },
    });
  },
  // 获取系统信息
  getPhoneSystemInfo(funcs) {
    if (!funcs.success) {
      return;
    }
    if (this.gd.systemInfo) {
      funcs.success(this.gd.systemInfo);
      return;
    }
    this.sdk.getSystemInfo({
      success: res => {
        this.gd.systemInfo = res;
        // for different platform
        this.gd.rate = (res.screenWidth || res.windowWidth) / 750;
        funcs.success(res);
      },
      fail: funcs.fail,
      complete: funcs.complete,
    });
  },

  // globalData
  gd: {
    userInfo: null,
    jwtInfo: null,
    systemInfo: null,
    rate: null,
    token: null,
    pageLock: false,
  },
  isWechat: true,
  sdk: null,
});
