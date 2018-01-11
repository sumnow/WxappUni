
const url = 'https://api.10010sh.cn/';
// const url = "https://192.168.2.124:8080"

const app = getApp();

const fetchData = config => {
  if (!config.url) {
    return;
  }
  config.url = `${url}${config.url}`;
  config.method = config.method || 'GET';
  config.data = config.data || {};
  config.data.delegate = '2000001';
  config.header = config.header || {};
  if (app.gd.token) {
    // config.header.Authorization = app.gd.token;
    config.header.token = app.gd.token;
  }
  // config.header.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMDAwMDAxIiwiZXhwIjoxNTQ1ODkwOTE1LCJqdGkiOiIxNTY5MjE1MTUzNyJ9.oVJTqj0JKNiRoI5jk3L49_-iMpxJEQXvU3YDoHkSXKE';
  if (!config.header['content-type']) {
    config.header['content-type'] = 'application/x-www-form-urlencoded';
  }

  const success = config.success;
  const fail = config.fail;
  config.success = res => {
    const noErrCodeHttpStatus = [404];
    if (noErrCodeHttpStatus.indexOf(res.statusCode) >= 0 || res.data.errorCode) {
      if (res.data.errorCode === 100003) {
        app.setToken('');
        app.sdk.reLaunch({
          url: '/pages/login/login',
        });
        return;
      }
      const err = {
        errorCode: res.data.errorCode,
        errorMsg: res.data.displayedMsg || '找不到请求的资源',
        timestamp: res.data.timestamp,
        statusCode: res.statusCode,
      }
      fail(err);
    } else {
      success(res);
    }
  }
  // console.log(config);
  return app.sdk.request(config);
};

module.exports = fetchData;
