
import fetchData from './fetchData.js';

// login
const sendCode = config => fetchData({ url: 'v1/login/captcha', method: 'POST', ...config });
const bindPhone = config => fetchData({ url: 'v1/login', method: 'POST', ...config });

// user info 
const getAccountInfo = config => fetchData({ url: 'v1/resources', ...config });
const getChargeRecord = config => fetchData({ url: 'v1/resources/paymentRecords', ...config });
const billCost = config => fetchData({ url: 'v1/resources/bill', ...config });
const updateEamil = (email, config) => fetchData({ url: `v1/resources/user`, method: 'PUT', ...config });

// package
const getVideoPackage = (id, config) => fetchData({ url: `v1/products/${id}`, ...config });
const subscribeVideoPackage = (id, config) => fetchData({ url: `v1/products/${id}`, method: 'POST', ...config });
const deleteVideoPackage = (id, config) => fetchData({ url: `v1/products/${id}`, method: 'DELETE', ...config });
const subscribeFlowPackage = (id, config) => fetchData({ url: `v1/traffics/${id}`, method: 'POST', ...config });

module.exports = {
  getAccountInfo,
  sendCode,
  bindPhone,
  getVideoPackage,
  subscribeVideoPackage,
  deleteVideoPackage,
  subscribeFlowPackage,
  billCost,
  getChargeRecord,
  updateEamil,
};
