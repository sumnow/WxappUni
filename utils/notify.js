
const app = getApp();

const showLoading = (msg, mask=false) => app.sdk.showLoading({ title: msg || '加载中...', mask, });
const hideLoading = () => app.sdk.hideLoading();
const iconPath = ['success', 'error', 'info', 'warn'];
const showToast = (msg, type=2) => {
	hideLoading();
	app.sdk.showToast({ title: msg || '处理中...', duration: 3000, image: `../../images/toast/${iconPath[type] || 'info'}.png` });
}
const showError = err => showToast(err.errorMsg || '网络错误', 1);

module.exports = {
	showToast,
	showError,
	showLoading,
	hideLoading,
};
