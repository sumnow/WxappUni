
import md5 from './md5';
const url = 'https://api.10010sh.cn/';
// const url = "https://192.168.2.124:8080"

const app = getApp();

const sign = config => {
  let params = config.data;
  const arr = [];
  arr.push(app.gd.jwtInfo.phone || params.mobile);
  arr.push(app.gd.jwtInfo.delegate || params.delegateID);
  arr.push(config.method);
  arr.push(`/${config.url}`);
  const timestamp = Math.floor(Date.now() / 1000);
  arr.push(timestamp);
  const ps = Object.entries(params).sort().map(e => `${e[0]}=${e[1]}`).join('&');
  if (['GET'].indexOf(config.method) >= 0) {
    arr.push(ps);
    arr.push('');
  } else {
    arr.push('');
    arr.push(ps);
  }
  const str = `|${arr.join('|')}|`;
  config.header['X-Signature'] = md5(str);
  config.header['X-Timestamp'] = timestamp;  
}

const fetchByWechat = config => {
  if (!config.url) {
    return;
  }
  config.method = config.method || 'GET';
  config.data = config.data || {};
  config.data.delegateID = '2010002';
  config.header = config.header || {};
  if (app.gd.token) {
    config.header.Authorization = 'Bearer ' + app.gd.token;
    // config.header.token = app.gd.token;
  }
  // config.header.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMDAwMDAxIiwiZXhwIjoxNTQ1ODkwOTE1LCJqdGkiOiIxNTY5MjE1MTUzNyJ9.oVJTqj0JKNiRoI5jk3L49_-iMpxJEQXvU3YDoHkSXKE';
  if (!config.header['content-type']) {
    config.header['content-type'] = 'application/x-www-form-urlencoded';
  }
  const success = config.success;
  const fail = config.fail;
  config.success = res => {
    if (res.statusCode > 299 || res.statusCode < 200) {
      if (!res.data) {
        fail({});
        return;
      }
      if (res.data.errorCode === "network-0003") {
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
  sign(config);
  config.url = `${url}${config.url}`;
  console.log(config);
  return app.sdk.request(config);
};

const fetchAlipay = config => {
  if (!config.url) {
    return;
  }
  config.url = `${url}${config.url}`;
  config.method = config.method || 'GET';
  config.data = config.data || {};
  config.data.delegateID = '2020004';
  config.header = config.header || {};
  if (config.method !== 'GET' && config.method !== 'POST' ) {
    config.header._Method = config.method;
  }
  if (app.gd.token) {
    config.header.Authorization = 'Bearer ' + app.gd.token;
    // config.header.token = app.gd.token;
  }
  // config.header.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyMDAwMDAxIiwiZXhwIjoxNTQ1ODkwOTE1LCJqdGkiOiIxNTY5MjE1MTUzNyJ9.oVJTqj0JKNiRoI5jk3L49_-iMpxJEQXvU3YDoHkSXKE';
  if (!config.header['content-type']) {
    config.header['content-type'] = 'application/x-www-form-urlencoded';
  }

  const success = config.success;
  const fail = config.fail;
  config.success = res => {
    if (!res.data) {
      fail({});
      return;
    }
    const httpCode = res.data.HTTPStatus;
    if (httpCode > 299 || httpCode < 200) {
      if (res.data.errorCode === "network-0003") {
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
      console.log(res);
    }
  }
  // console.log(config);
  sign(config);
  return app.sdk.request(config);
};

const fetchData = config => {
  if (app.isWechat) {
    fetchByWechat(config);
  } else {
    fetchAlipay(config);
  }
};



module.exports = fetchData;
