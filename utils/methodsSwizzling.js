
module.exports = (app) => {

  app.sdk.ucNavigateTo = config => {
    if (app.gd.pageLock) {
      return;
    }
    app.gd.pageLock = true;
    setTimeout(() => {
      app.gd.pageLock = false;
    }, 1000);
    app.sdk.navigateTo(config);      
  };

  app.sdk.ucRedirectTo = config => {
    if (app.gd.pageLock) {
      return;
    }
    app.gd.pageLock = true;
    setTimeout(() => {
      app.gd.pageLock = false;
    }, 1000);
    app.sdk.redirectTo(config);      
  };

  app.sdk.login = (config) => {
		app.sdk.getAuthCode({
			success: (res) => {
				config.success({code: res.authCode});
			},
			fail: config.fail,
		});
	}; 

	app.sdk.getUserInfo = (config) => {
		app.sdk.getAuthUserInfo({
			success: (res) => {
				res.avatarUrl = res.avatar;
				const userInfo = res;
				config.success({userInfo});
			},
			fail: config.fail,
			complete: config.complete,
		});
	};

	app.sdk.request = (config) => {
		config.headers = config.header;
		app.sdk.httpRequest(config);
	};

	const getStorageSync = app.sdk.getStorageSync;
	app.sdk.getStorageSync = (key) => {
		const cache = getStorageSync({key});
		return cache && cache.data;
	};

	const setStorageSync = app.sdk.setStorageSync;
	app.sdk.setStorageSync = (key, data) => {
		setStorageSync({
			key,
			data,
		});
	};

	const showLoading = app.sdk.showLoading;
	app.sdk.showLoading = (config) => {
		config.content = config.title;
		showLoading(config);
	};

	const showToast = app.sdk.showToast;
	app.sdk.showToast = (config) => {
		config.content = config.title;
		showToast(config);
	};


	const setNavigationBar = app.sdk.setNavigationBar  
	app.sdk.setNavigationBar = (config) => {
		setNavigationBar({
			title: config.title,
		})
	}

	app.sdk.setNavigationBarTitle = (config) => {
		setNavigationBar({
			title: config.title,
		})
	}
	
};
