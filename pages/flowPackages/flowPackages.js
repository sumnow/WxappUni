// pages/flowPackages/flowPackages.js
import { subscribeFlowPackage } from '../../utils/service.js';
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify.js';
import { rightArrow } from "../../utils/icons.js";
import { selected } from "../../utils/icons.js";
import { cancel } from "../../utils/icons.js";
// 获取应用实例
const app = getApp();

Page({
  data: {
    tabId: 0,
    selectedFlowMonthTypeId: 0,
    selectedFlowPlusTypeId: 0,
    selectedPackagesId: -1,
    maskDisplay:'none',
    //icons
    icons: {
      rightArrow,
      selected,
      cancel,
    },
    // tab栏
    tabName: ['包月包','加餐包'],
    // 包月包
    flowMonthType: [
      {
        option: '本地',
        title: '选择流量包（省内流量 立即生效）',
        introduce:'省内流量包主要包含上海市内流量，漫游（国内、国际）及超出部分流量按照用户主套餐资费计费。订购用户月末不退订，次月1日系统自动续订扣费。',
        reminder:'1.本产品暂不支持沃3G预付费20元卡、上网卡、行业卡、国际卡及数据副卡用户订购；\n2.您当月订购的流量包内流量当月未使用完的部分，可延期至次月底之前使用，已延期至次月，但次月仍未使用完的部分不再延期，次月底失效，后续月份以此类推；（99元40G本地流量月包除外）\n3.若您当月办理变更套餐、退订或变更流量包，则当月包内（或套内）剩余流量不进行结转，流量不清零优惠政策详情致电10010客服热线；\n4.如需退订本产品，请至营业厅或电10010客服热线；',
        flowMonthTypeOption: [
          { productId: 2100001, size: '150M', price: '售价10元', },
          { productId: 2100002, size: '450M', price: '售价20元', },
          { productId: 2100003, size: '750M', price: '售价30元', },
          { productId: 2100004, size: '1.5G', price: '售价50元', },
          { productId: 2100005, size: '3G', price: '售价70元', },
          { productId: 2100006, size: '4.5G', price: '售价100元', },
          { productId: 2100007, size: '2G', price: '售价59元', },
          { productId: 2100008, size: '4G', price: '售价69元', },
          { productId: 2100009, size: '6G', price: '售价79元', },
          { productId: 2100010, size: '8G', price: '售价89元', },
        ],
      },
      {
        option: '全国',
        title: '选择流量包（全国流量 立即生效）',
        introduce: '省内流量包主要包含上海市内流量，漫游（国内、国际）及超出部分流量按照用户主套餐资费计费。订购用户月末不退订，次月1日系统自动续订扣。',
        reminder: '1.本产品暂不支持沃3G预付费20元卡、上网卡、行业卡、国际卡及数据副卡用户订购；\n2.您当月订购的流量包内流量当月未使用完的部分，可延期至次月底之前使用，已延期至次月，但次月仍未使用完的部分不再延期，次月底失效，后续月份以此类推；（99元40G本地流量月包除外）\n3.若您当月办理变更套餐、退订或变更流量包，则当月包内（或套内）剩余流量不进行结转，流量不清零优惠政策详情致电10010客服热线；\n4.如需退订本产品，请至营业厅或电10010客服热线；',
        flowMonthTypeOption: [
          { productId: 2110001, size: '100M', price: '售价10元', },
          { productId: 2110002, size: '300M', price: '售价20元', },
          { productId: 2110003, size: '500M', price: '售价30元', },
          { productId: 2110004, size: '1G', price: '售价50元', },
          { productId: 2110005, size: '2G', price: '售价70元', },
          { productId: 2110006, size: '3G', price: '售价100元', },
        ],
      },
      {
        option: '闲时',
        title: '选择流量包（省内流量 立即生效）',
        introduce: '省内流量包主要包含上海市内流量，漫游（国内、国际）及超出部分流量按照用户主套餐资费计费。订购用户月末不退订，次月1日系统自动续订扣。',
        reminder: '1.本产品暂不支持沃3G预付费20元卡、上网卡、行业卡、国际卡及数据副卡用户订购；\n2.您当月订购的流量包内流量当月未使用完的部分，可延期至次月底之前使用，已延期至次月，但次月仍未使用完的部分不再延期，次月底失效，后续月份以此类推；（99元40G本地流量月包除外）\n3.若您当月办理变更套餐、退订或变更流量包，则当月包内（或套内）剩余流量不进行结转，流量不清零优惠政策详情致电10010客服热线；\n4.如需退订本产品，请至营业厅或电10010客服热线；',
        flowMonthTypeOption: [
          { productId: 2300001, size: '1G', price: '售价5元', },
          { productId: 2300002, size: '3G', price: '售价10元', },
        ],
      }
    ],
    // 加餐包
    flowPlusType: [
      {
        option: '全国流量\n加油包',
        title: '选择流量包(全国流量 当月有效)', 
        flowPlusTypeOption: [
          { productId: 2200001, size: '100M', price: '售价10元', },
        ],
      },
      {
        option: '全国流量\n半年包',
        title: '选择流量包(全国流量 半年有效)',
        flowPlusTypeOption: [
          { productId: 2210001, size: '1G', price: '售价100元', },
        ],
      },
      {
        option: '全国流量\n多日包',
        title: '选择流量包(全国流量 3天有效)',
        flowPlusTypeOption: [
          { productId: 2200002, size: '500M', price: '售价10元', },
        ],
      },
      {
        option: '省内流量\n日包',
        title: '选择流量包(省内流量 当日有效)',
        flowPlusTypeOption: [
          { productId: 2000001, size: '1G', price: '售价5元', },
          { productId: 2000002, size: '3G', price: '售价10元', },
        ],
      },
    ], 
    // 推荐视频包
    list: [
      {
        logo: '../../images/videoPackages/tencent.png',
        productId: 1000004,
        name: '腾讯视频定向流量包',
        price: '15元/月',
        introduce: [
          '使用范围：腾讯视频手机客户端\n活动规则：\n1.本活动产品资费15元/月,订购、使用以本机实际使用号码为准，订购按自然月扣费，下月自动续订，订购产品立即生效，退订产品次月生效。\n 2.本产品支持3G/ 4G用户使用； 3G预付费20元卡、流量随意享、欠费、锁定期、充值期、辽宁自动升档流量包、浙江省3G副卡、腾讯王卡（音乐小王卡、视频小王卡、腾讯大王卡、腾讯天王卡）不可订购。\r\n 3.本产品限全国免流使用，不支持港、澳、台及国际漫游。\n 4.产品订购成功后，需要安装最新版的腾讯视频客户端（安卓V5.3.0或以上版本，苹果V5.3.0或以上版本）激活后才能免流。激活流程：客户端内“我的”→WO+腾讯视频流量包月→点击“立即激活”即可。\n 5.WO+ 视频腾讯定向流量不能共享使用。\n 6.本产品与联通其它腾讯定向流量包产品互斥。\n 7.本产品的流量额度最高可使用到每月上网流量封顶值，且与其他上网功能产生的流量共享封顶值。用户号码封顶值与其使用的套餐有关，具体咨询10010。如封顶值6GB，其它应用产生1GB，本产品最多可使用5GB。申请解除流量封顶的用户请不要超封顶值使用本产品，避免产生高额流量费或当月再也无法使用上网功能。\n 8.如下使用行为将无法进行流量减免，请谨慎使用：\n (1)需要在WIFI功能关闭下使用本视频业务，需避免WIFI和2G / 3G/ 4G无线网络频繁切换而产生高额流量费。\n (2)需要使用3GNET接入点访问本产品，使用其他接入点（包括3GWAP）观看视频会照常收取流量费用。\n (3)在客户端内访问非合作方提供的外链地址，跳转到第三方的视频内容，会按照用户套餐资费照常收取流量费用。\n (4)请不要安装和使用任何流量监控、上网代理及VPN类软件和插件，可能会引起免流量策略失效而产生高额流量费用。\n (5)客户端中图片文字及非视频部分不减免流量，但这些内容不会产生大量流量。',
        ],
      },
      {
        logo: '../../images/videoPackages/youku.png',
        productId: 1000001,
        name: '优酷视频定向流量包',
        price: '15元/月',
        introduce: [
          '定向流量:包月\n使用范围：限优酷客户端内使用\n活动规则：\n1.本产品限全国免流使用，不支持港、澳、台及国际漫游。\n 2.用户订购WO+ 视频优酷定向流量包月产品，如不退订，下月1日自动续订。\n 3.退订产品后，本月仍可使用优酷定向流量，下月1日不再续订。\n 4.订购成功后，请关闭wifi打开优酷客户端激活本产品。\n 5.主卡可以订购本产品，副卡不能订购本产品。（主卡WO+视频优酷定向流量不能参与共享。）\n 6.沃家庭类产品（含智慧WO+等）可以订购（沃+不可以共享WO + 视频优酷定向流量）。\n 7.20元卡、流量随意享、欠费、锁定期、充值期、辽宁自动升档流量包用户不可订购。\n 8.沃派优酷视频卡用户及已订购25元WO+ 视频优酷定向流量VIP的用户不可订购本产品。\n 9. 如下使用行为将无法进行流量减免，请谨慎使用：\n (1)需要在WIFI功能关闭下使用本视频业务，需避免WIFI和2G / 3G/ 4G无线网络频繁切换而产生高额流量费。\n (2)需要使用3GNET接入点访问本产品，使用其他接入点（包括3GWAP）观看视频会照常收取流量费用。\n (3)第三方视频及特殊格式的视频不在免流量范围内，会按照用户套餐资费照常收取流量费用，是否免流具体以免流提示为准。\n (4)请不要安装和使用任何流量监控、上网代理及VPN类软件和插件，可能会引起免流量策略失效而产生高额流量费用。\n (5)客户端中图片文字及非视频部分不减免流量，但这些内容不会产生大量流量。',
        ]  
      },
      {
        logo: '../../images/videoPackages/unicom.png',
        name: '更多选择请至特色专区',
        price: '4.9 ~ 19.9元/月',
      }
    ],
  },

  // 1.生命周期函数--监听页面加载
  onLoad(options) {
    console.log(this.data.list)
    this.setData({
      phone: app.gd.jwtInfo.phone,
      // 默认包月包
      flowMonthOption: this.data.flowMonthType[0].flowMonthTypeOption,
      flowMonthOptionTitle: this.data.flowMonthType[0].title,
      // 默认加餐包
      flowPlusOption: this.data.flowPlusType[0].flowPlusTypeOption,
      flowPlusOptionTitle: this.data.flowPlusType[0].title,
    });
  },
  // 2.tab栏切换包月包与加餐包
  switchTab(e) {
    this.setData({
      tabId: parseInt(e.currentTarget.id),
    });
  },
  // 3.点击跳转videoPackageDetail页面
  navigateToVideoPackageDetail(e) {
    const list = this.data.list;
    const id = e.currentTarget.id;
    app.sdk.ucNavigateTo({
      url: '../videoPackageDetail/videoPackageDetail?logo=' + list[id].logo + '&name=' + list[id].name + '&price=' + list[id].price + '&introduce=' + list[id].introduce + '&productId=' + list[id].productId,
    });
  },
  // 4.跳转到videoPackages页面
  navigatorToVideoPackages() {
    app.sdk.ucNavigateTo({
      url: '../videoPackages/videoPackages',
    });
  },
  // 5.选择流量包类型---包月包
  selectedMonthFlowType(e) {
    const id = parseInt(e.currentTarget.id);
    this.setData({
      flowMonthOption: this.data.flowMonthType[id].flowMonthTypeOption,
      flowMonthOptionTitle: this.data.flowMonthType[id].title,
      selectedFlowMonthTypeId: id,
      selectedPackagesId: -1,
    });
  },
  // 6.选择流量包类型---加餐包
  selectedFlowPlusType(e) {
    const id = parseInt(e.currentTarget.id);
    this.setData({
      flowPlusOption: this.data.flowPlusType[id].flowPlusTypeOption,
      flowPlusOptionTitle: this.data.flowPlusType[id].title,
      selectedFlowPlusTypeId: id,
      selectedPackagesId: -1,
    });
  },
  // 动画实例方法
  genAnimation() {
    return app.sdk.createAnimation({
      duration: 300,
    });
  },
  // 7.弹出订购页面
  FlowPackages(e) {
    const id = parseInt(e.currentTarget.id);
    if(this.data.tabId == 0){
      const option = this.data.flowMonthType[this.data.selectedFlowMonthTypeId].option;
      const flowOption = this.data.flowMonthType[this.data.selectedFlowMonthTypeId].flowMonthTypeOption;
      this.setData({
        productId: flowOption[id].productId,
        size: flowOption[id].size,
        price: '订购' + flowOption[id].price.substr(2) + flowOption[id].size + option + '流量包吗？',
      });
    } else if(this.data.tabId == 1){
      const option = this.data.flowPlusType[this.data.selectedFlowPlusTypeId].option.replace("\n", "");
      const flowOption = this.data.flowPlusType[this.data.selectedFlowPlusTypeId].flowPlusTypeOption;
      this.setData({
        productId: flowOption[id].productId,
        size: flowOption[id].size,
        price: '订购' + flowOption[id].price.substr(2) + flowOption[id].size + option + '吗？',
      });
    };
    const animation = this.genAnimation();
    animation.height('700rpx').step();
    this.setData({
      selectedPackagesId: id,
      phoneNum: this.data.phone,
      maskDisplay: 'block',
      animation: animation.export(),
    });
  },
  // 8.点击确定订购
  confirmSubscribe(e) {
    showLoading();
    const id = this.data.productId;
    subscribeFlowPackage(id, {
      success: res => {
        console.log(res);
        showToast('订购受理成功', 0);
      },
      fail: err => {
        showError(err);
        console.log(err);
      },
      complete: () => {
        this.cancelSubscribe();
      },
    });
  },
  // 9.点击取消订购
  cancelSubscribe() {
    const animation = this.genAnimation();
    animation.height('0rpx').step();
    this.setData({
      maskDisplay: 'none',
      animation: animation.export(),
      selectedPackagesId: -1,
    });
  },
  // 10.跳转订购说明页面
  navigatorToSubscribeInstruction(e) {
    const selectedFlowMonthTypeId = this.data.selectedFlowMonthTypeId;
    const introduce = this.data.flowMonthType[selectedFlowMonthTypeId].introduce;
    const reminder = this.data.flowMonthType[selectedFlowMonthTypeId].reminder;
    app.sdk.ucNavigateTo({
      url: '../subscribeInstruction/subscribeInstruction?introduce=' + introduce + '&reminder=' + reminder,
    });
  },
})