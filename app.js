//app.js
App({
  onLaunch() {
    // 登录
    this.sdk = wx;
    this.sdk.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
    // 获取用户信息
    this.sdk.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          this.sdk.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          });
        };
      },
    });
    this.getPhoneSystemInfo({
      success: res => {
        console.log(res);
      },
    });
  },
  // 获取系统信息
  getPhoneSystemInfo(funcs) {
    if (!funcs.success) {
      return;
    }
    if (this.globalData.systemInfo) {
      funcs.success(this.globalData.systemInfo);
      return;
    }
    this.sdk.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res;
        funcs.success(res);
      },
      fail: funcs.fail,
      complete: funcs.complete,
    });
  },
  globalData: {
    userInfo: null,
    systemInfo: null,
  },
  sdk: null,
})