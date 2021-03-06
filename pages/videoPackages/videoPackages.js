// pages/videoPackages/videoPackages.js
import { dayMark } from "../../utils/icons.js";
// 获取应用实例
const app = getApp();

Page({
  data: {
    dayMark: dayMark,
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
        ],
      },
      {
        logo: '../../images/videoPackages/letv.png',
        productId: 1000002,
        name: '乐视视频定向流量包',
        price: '15元/月',
        introduce: [
          '定向流量：包月\n使用范围：乐视视频手机客户端\n活动规则：\n1.本活动产品资费15元/月，订购、使用以本机实际使用号码为准，订购按自然月扣费，下月自动续订，订购产品立即生效，退订产品次月生效。\n 2.本产品支持3G/ 4G用户使用； 3G预付费20元卡、流量随意享、欠费、锁定期、充值期、辽宁自动升档流量包、浙江省3G副卡用户及乐视手机用户不可订购及使用。\n 3.本产品限全国免流使用，不支持港、澳、台及国际漫游。\n 4.产品订购成功后，需要安装最新版的乐视视频客户端（安卓V6.10或以上版本，苹果V6.10或以上版本）激活后才能免流。点击查看如何激活>>（',
          'http://u.10010.cn/qAAAU',   
          '）\n 5.WO+视频乐视定向流量不能共享使用。\n 6.本产品与联通其它乐视定向流量包产品互斥。\n 7.本产品的流量额度最高可使用到每月上网流量封顶值，且与其他上网功能产生的流量共享封顶值。用户号码封顶值与其使用的套餐有关，具体咨询10010。如封顶值6GB，其它应用产生1GB，本产品最多可使用5GB。申请解除流量封顶的用户请不要超封顶值使用本产品，避免产生高额流量费或当月再也无法使用上网功能。\n 8.如下使用行为将无法进行流量减免，请谨慎使用：\n (1)需要在WIFI功能关闭下使用本视频业务，需避免WIFI和2G / 3G/ 4G无线网络频繁切换而产生高额流量费。\n (2)需要使用3GNET接入点访问本产品，使用其他接入点（包括3GWAP）观看视频会照常收取流量费用。\n (3)第三方视频及特殊格式的视频不在免流量范围内，会按照用户套餐资费照常收取流量费用，是否免流具体以免流提示为准。\n (4)请不要安装和使用任何流量监控、上网代理及VPN类软件和插件，可能会引起免流量策略失效而产生高额流量费用。\n (5)在客户端中使用离线缓存，产生的流量不减免；客户端中图片文字及非视频部分不减免流量，但这些内容不会产生大量流量。',
        ],
      }, 
      {
        logo: '../../images/videoPackages/PPTV.png',
        productId: 1000003,
        name: '聚力视频定向流量包',
        price: '15元/月',
        introduce: [
          '定向流量：包月\n使用范围：限PPTV客户端内使用\n活动规则：\n1.“WO+视频PPTV定向流量包月”业务资费：15元/月，订购、使用业务以本机实际使用号码为准。\n 2.本产品限全国免流使用，不支持港、澳、台及国际漫游。\n 3.用户购买WO+ 视频PPTV定向流量，按自然月扣费，如不退订，下月1日自动续订。\n 4.退订产品后，本月仍可使用PPTV定向流量，下月1日不再续订。\n 5.主卡可以订购本产品、副卡不能订购本产品。（主卡WO+视频PPTV定向流量不能共享）\n 6.沃家庭类产品（含智慧WO+等）可以订购（沃+不可以共享WO + 视频PPTV定向流量）。\n 7.20元卡、流量随意享、欠费、锁定期、充值期、辽宁自动升档流量包用户不可订购。\n 8.根据入网协议规定，用户使用总流量（含免费流量）最多可使用数据网络流量上限为6GB或40GB（具体封顶上限以当地运营商策略为准，可咨询10010获得本机封顶标准），超过流量上限之后会自动关闭数据上网功能（包括手机上网、彩信和手机报等数据功能），也不能再使用本产品，下月自动开通。本流量包产品使用流量与其它上网功能产生的流量共享6GB或40GB上限流量，请均衡使用视频免流流量。例如用户为6GB封顶上限，在使用本业务之前已经产生了1GB其他流量，那么本月用户在未使用其他任何流量的前提下，也只能使用本产品5GB流量，本月总数据流量到达6GB上限后则系统自动关闭数据上网功能。达到封顶上限的用户如可以继续上网或申请了继续上网的，请不要再使用本产品。避免产生流量收费或流量达到本机流量最大限值（最大限值请咨询10010）被关闭上网功能，本月将无法再开启上网功能。\n 9.需要在WIFI功能关闭下使用本视频业务，避免WIFI和2G/3G/4G无线网络频繁切换而产生高额流量费。\n 10.需要使用3GNET接入点访问本产品，使用其他接入点（包括3GWAP）观看视频会照常收取流量费用。\n 11.在客户端内访问非合作方提供的外链到第三方的视频内容不免流，继续观看会按照用户套餐资费照常收取流量费用。\n 12.请不要安装和使用任何流量监控、上网代理及VPN类软件和插件，可能会引起免流量策略失效而产生高额流量费用。'
        ],
      },
      { logo: '../../images/videoPackages/MangoTV.png', 
        productId: 1000005,
        name: '芒果TV定向流量包', 
        price: '15元/月',
        introduce: [
          '定向流量：包月\n使用范围：芒果TV手机客户端\n活动规则：\n1.本产品资费15元/月，订购、使用以本机实际使用号码为准，订购按自然月扣费，下月自动续订，订购产品立即生效，退订产品次月生效。\n 2.本产品支持3G/ 4G用户使用； 3G预付费20元卡、上网卡、流量随意享套餐、欠费、锁定期、充值期、辽宁自动升档流量包、浙江省3G副卡用户及百立丰芒果定制手机用户无法订购及使用本产品。\n 3.本产品限全国免流使用，不支持港、澳、台及国际漫游。\n 4.产品订购成功后，需要安装最新版的芒果TV客户端（安卓V5.2.3或以上版本，苹果V5.3.0或以上版本）激活后才能免流。点击查看如何激活>>（',  
          'http://u.10010.cn/qAAAU', 
          '）\n 5.WO+视频芒果TV定向流量不能共享使用。\n 6.本产品与联通其它芒果TV定向流量包产品互斥。\n 7.本产品的流量额度最高可使用到每月上网流量封顶值，且与其他上网功能产生的流量共享封顶值。用户号码封顶值与其使用的套餐有关，具体咨询10010。如封顶值6GB，其它应用产生1GB，本产品最多可使用5GB。申请解除流量封顶的用户请不要超封顶值使用本产品，避免产生高额流量费或当月再也无法使用上网功能。\n 8.如下使用行为将无法进行流量减免，请谨慎使用：\n (1)需要在WIFI功能关闭下使用本视频业务，需避免WIFI和2G / 3G/ 4G无线网络频繁切换而产生高额流量费。\n(2)需要使用3GNET接入点访问本产品，使用其他接入点（包括3GWAP）观看视频会照常收取流量费用。\n (3)第三方视频及特殊格式的视频不在免流量范围内，会按照用户套餐资费照常收取流量费用，是否免流具体以免流提示为准。\n (4)请不要安装和使用任何流量监控、上网代理及VPN类软件和插件，可能会引起免流量策略失效而产生高额流量费用。\n (5)在客户端中直播内容、下载缓存、广告、图片、文字不在免流量范围内，产生的流量不减免。\n 9.如订购/ 退订 / 激活失败，请稍后尝试，或拨打联通客服电话处理。\n 10.由于手机终端、第三方软件等问题导致已订购用户观看视频无法免流，联通有权单方面终止芒果定向流量包月服务。',
        ] ,
      },
      {
        logo: '../../images/videoPackages/PepsiTV.png',
        productId: 1000008,
        name: '百事TV定向流量包',
        price: '19.9元/月',
        introduce: [
          '活动时间：即日起-2018年3月31日\n活动对象：上海联通2G/3G/4G用户。不含20元预付费卡、国际卡、行业卡、副卡、智慧沃家、B2I卡（如腾讯王卡、蚂蚁宝卡等）、全国冰淇淋卡及其他特殊套餐。\n活动规则：\n1、特权包内所含500M流量为上海省内流量月包券，使用顺序在套内流量及流量半年包之前；\n2、流量月包券可在手厅、微厅—权益专区-卡券查看使用。兑换后立即生效，流量生效以到账短信为准，请在生效当月使用，逾期未使用完流量清零不结转。月包券有效期至2017年12月31日；\n3、流量特权月包开通后次月自动续订，同一号码当月最多订购一次；\n4、订购百视通会员开通至手机号码账号，订购后有效期31天，可免广告收看赛事直播、独家热剧、影视大片等会员内容；\n5、会员权益发放至订购指定流量产品的上海联通手机号中（BesTv账号）\n6、BesTV老会员的权益直接发放至原注册账户中，新会员会自动为您生成账户并通过短信通知。\n7、会员到账及相关咨询客服电话4008-600637\n注意事项：用户须处于正常可用状态，停机、欠费、黑名单、未实名制登记等特殊状态下，订购流量将无法到账。请用户注意总流量40GB封顶关网限制规则，以免购买流量受限无法使用。',
        ],
      }, 
      {
        logo: '../../images/videoPackages/PepsiTV.png',
        productId: 1000006,
        name: '百事TV定向流量包',
        price: '4.9元/天',
        introduce: [
          '活动时间：即日起-2018年3月31日\n 活动对象：上海联通2G/3G/4G用户。不含20元预付费卡、国际卡、行业卡、副卡、智慧沃家、B2I卡（如腾讯王卡、蚂蚁宝卡等）、全国冰淇淋卡及其他特殊套餐。\n 活动规则：\n 1、特权包内所含500M流量为上海省内流量月包券，使用顺序在套内流量及流量半年包之前；\n 2、流量月包券可在手厅、微厅—权益专区-卡券查看使用。兑换后立即生效，流量生效以到账短信为准，请在生效当月使用，逾期未使用完流量清零不结转。月包券有效期至201年12月31日；\n 3、流量特权月包开通后次月自动续订，同一号码当月最多订购一次；\n4、订购百视通会员开通至手机号码账号，订购后有效期31天，可免广告收看赛事直播、独家热剧、影视大片等会员内容；\n5、会员权益发放至订购指定流量产品的上海联通手机号中（BesTv账号）\n6、BesTV老会员的权益直接发放至原注册账户中，新会员会自动为您生成账户并通过短信通知。\n7、会员到账及相关咨询客服电话4008-600637\n注意事项：用户须处于正常可用状态，停机、欠费、黑名单、未实名制登记等特殊状态下，订购流量将无法到账。请用户注意总流量40GB封顶关网限制规则，以免购买流量受限无法使用。'
        ],
      },
      // {
      //   logo: '../../images/videoPackages/TransCosmo.png',
      //   name: '畅视视频定向流量包',
      //   price: '15元/月',
      //   introduce: '',
      // },
    ],
  },
  // 1.点击跳转videoPackageDetail页面
  navigateToVideoPackageDetail(e) {
    console.log(this.data.list)
    const list = this.data.list;
    const id = e.currentTarget.id;
    app.sdk.ucNavigateTo({
      url: '../videoPackageDetail/videoPackageDetail?logo=' + list[id].logo + '&name=' + list[id].name + '&price=' + list[id].price + '&introduce=' + list[id].introduce + '&productId=' + list[id].productId,
    });
  },
})
