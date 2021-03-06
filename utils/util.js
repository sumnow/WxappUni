const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const phoneValid = phone => {
  return /^1[3|4|5|6|7|8][0-9]\d{8}$/.test(phone);
};

module.exports = {
  formatTime,
  phoneValid,
};
