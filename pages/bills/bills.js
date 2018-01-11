// pages/bills/bills.js
import { edit } from "../../utils/icons.js"; 
import { conserve } from "../../utils/icons.js"; 
import { rightArrow } from "../../utils/icons.js";
import { circular } from "../../utils/icons.js";
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify.js';
import { billCost, updateEamil } from "../../utils/service.js";
// 获取应用实例
const app = getApp();

// 邮箱正则验证
const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
Page({
  data: {
    icons: {
      edit: edit,
      conserve: conserve,
      rightArrow: rightArrow,
      circular: circular,
    },
    // 用户基本信息
    userInfo: {
      phoneNum: "13120954174",
      name: "张飞",
      accountNum: "1234567890",
      email: "1878799678@qq.com",
    },
    // 账单信息
    billInfo: {
      "2016-11":{
        billCost: "¥7.00",
        balanceDate: "20161101-20161130",
        openDate: "20161201",
        billDetails: [
          { 
            sectionLeft: "月固定费" , 
            sectionRight: "1000.00" ,
            cell: [
              { cellLeft: "基本月租费", cellRight: "500.00" },
              { cellLeft: "叠加套餐包", cellRight: "10.00" }
            ]
          },
          {
            sectionLeft: "增值业务费",
            sectionRight: "0.50",
            cell: [
              { cellLeft: "点对点短信", cellRight: "0.50" }
            ]
          },
          {
            sectionLeft: "调整费用",
            sectionRight: "-0.5",
            cell: [
              { cellLeft: "优惠减免", cellRight: "-0.5" }
            ]
          },
          {
            sectionLeft: "账单总费用",
            sectionRight: "27.00",
            cell: [
              { cellLeft: "预存款抵扣", cellRight: "27.00" },
              { cellLeft: "本月结转零头(转出)", cellRight: "0.00" }
            ]
          },
        ],
        detailsProgram: [
          {
            cell: [
              { cellLeft: "基本月租费", cellMiddle:"", cellRight: "" },
              { cellLeft: "GSM基本月租/套餐月租", cellMiddle: "5000.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "50.00", cellRight: "" }
            ]
          },
          {
            cell: [
              { cellLeft: "套餐叠加包", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM流量类附加月租", cellMiddle: "10.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "10.00", cellRight: "" }
            ]
          }, 
          {
            cell: [
              { cellLeft: "点对点短信", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM短消息通信费", cellMiddle: "0.50", cellRight: "7" },
              { cellLeft: "明细小计", cellMiddle: "0.50", cellRight: "7" }
            ]
          },
          {
            cell: [
              { cellLeft: "调整费用", cellMiddle: "", cellRight: "" },
              { cellLeft: "调整费用", cellMiddle: "-0.50", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "-0.50", cellRight: "" }
            ]
          }
        ]
      },
      "2016-12":{
        billCost: "¥17.00",
        balanceDate: "20161201-20161231",
        openDate: "20170101",
        billDetails: [
          { 
            sectionLeft: "月固定费" , 
            sectionRight: "2000.00" ,
            cell: [
              { cellLeft: "基本月租费", cellRight: "500.00" },
              { cellLeft: "叠加套餐包", cellRight: "10.00" }
            ]
          },
          {
            sectionLeft: "增值业务费",
            sectionRight: "0.50",
            cell: [
              { cellLeft: "点对点短信", cellRight: "0.50" }
            ]
          },
          {
            sectionLeft: "调整费用",
            sectionRight: "-0.5",
            cell: [
              { cellLeft: "优惠减免", cellRight: "-0.5" }
            ]
          },
          {
            sectionLeft: "账单总费用",
            sectionRight: "27.00",
            cell: [
              { cellLeft: "预存款抵扣", cellRight: "27.00" },
              { cellLeft: "本月结转零头(转出)", cellRight: "0.00" }
            ]
          },
        ],
        detailsProgram: [
          {
            cell: [
              { cellLeft: "基本月租费", cellMiddle:"", cellRight: "" },
              { cellLeft: "GSM基本月租/套餐月租", cellMiddle: "5000.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "50.00", cellRight: "" }
            ]
          },
          {
            cell: [
              { cellLeft: "套餐叠加包", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM流量类附加月租", cellMiddle: "10.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "10.00", cellRight: "" }
            ]
          }, 
          {
            cell: [
              { cellLeft: "点对点短信", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM短消息通信费", cellMiddle: "0.50", cellRight: "7" },
              { cellLeft: "明细小计", cellMiddle: "0.50", cellRight: "7" }
            ]
          },
          {
            cell: [
              { cellLeft: "调整费用", cellMiddle: "", cellRight: "" },
              { cellLeft: "调整费用", cellMiddle: "-0.50", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "-0.50", cellRight: "" }
            ]
          }
        ]
      },
      "2017-01":{
        billCost: "¥27.00",
        balanceDate: "20170101-20170131",
        openDate: "20170201",
        billDetails: [
          { 
            sectionLeft: "月固定费" , 
            sectionRight: "3000.00" ,
            cell: [
              { cellLeft: "基本月租费", cellRight: "500.00" },
              { cellLeft: "叠加套餐包", cellRight: "10.00" }
            ]
          },
          {
            sectionLeft: "增值业务费",
            sectionRight: "0.50",
            cell: [
              { cellLeft: "点对点短信", cellRight: "0.50" }
            ]
          },
          {
            sectionLeft: "调整费用",
            sectionRight: "-0.5",
            cell: [
              { cellLeft: "优惠减免", cellRight: "-0.5" }
            ]
          },
          {
            sectionLeft: "账单总费用",
            sectionRight: "27.00",
            cell: [
              { cellLeft: "预存款抵扣", cellRight: "27.00" },
              { cellLeft: "本月结转零头(转出)", cellRight: "0.00" }
            ]
          },
        ],
        detailsProgram: [
          {
            cell: [
              { cellLeft: "基本月租费", cellMiddle:"", cellRight: "" },
              { cellLeft: "GSM基本月租/套餐月租", cellMiddle: "5000.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "50.00", cellRight: "" }
            ]
          },
          {
            cell: [
              { cellLeft: "套餐叠加包", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM流量类附加月租", cellMiddle: "10.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "10.00", cellRight: "" }
            ]
          }, 
          {
            cell: [
              { cellLeft: "点对点短信", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM短消息通信费", cellMiddle: "0.50", cellRight: "7" },
              { cellLeft: "明细小计", cellMiddle: "0.50", cellRight: "7" }
            ]
          },
          {
            cell: [
              { cellLeft: "调整费用", cellMiddle: "", cellRight: "" },
              { cellLeft: "调整费用", cellMiddle: "-0.50", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "-0.50", cellRight: "" }
            ]
          }
        ]
      },
      "2017-02":{
        billCost: "¥37.00",
        balanceDate: "20170201-20170228",
        openDate: "20170301",
        billDetails: [
          { 
            sectionLeft: "月固定费" , 
            sectionRight: "4000.00" ,
            cell: [
              { cellLeft: "基本月租费", cellRight: "500.00" },
              { cellLeft: "叠加套餐包", cellRight: "10.00" }
            ]
          },
          {
            sectionLeft: "增值业务费",
            sectionRight: "0.50",
            cell: [
              { cellLeft: "点对点短信", cellRight: "0.50" }
            ]
          },
          {
            sectionLeft: "调整费用",
            sectionRight: "-0.5",
            cell: [
              { cellLeft: "优惠减免", cellRight: "-0.5" }
            ]
          },
          {
            sectionLeft: "账单总费用",
            sectionRight: "27.00",
            cell: [
              { cellLeft: "预存款抵扣", cellRight: "27.00" },
              { cellLeft: "本月结转零头(转出)", cellRight: "0.00" }
            ]
          },
        ],
        detailsProgram: [
          {
            cell: [
              { cellLeft: "基本月租费", cellMiddle:"", cellRight: "" },
              { cellLeft: "GSM基本月租/套餐月租", cellMiddle: "5000.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "50.00", cellRight: "" }
            ]
          },
          {
            cell: [
              { cellLeft: "套餐叠加包", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM流量类附加月租", cellMiddle: "10.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "10.00", cellRight: "" }
            ]
          }, 
          {
            cell: [
              { cellLeft: "点对点短信", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM短消息通信费", cellMiddle: "0.50", cellRight: "7" },
              { cellLeft: "明细小计", cellMiddle: "0.50", cellRight: "7" }
            ]
          },
          {
            cell: [
              { cellLeft: "调整费用", cellMiddle: "", cellRight: "" },
              { cellLeft: "调整费用", cellMiddle: "-0.50", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "-0.50", cellRight: "" }
            ]
          }
        ]
      },
      "2017-03":{
        billCost: "¥47.00",
        balanceDate: "20170301-20170331",
        openDate: "20170401",
        billDetails: [
          { 
            sectionLeft: "月固定费" , 
            sectionRight: "5000.00" ,
            cell: [
              { cellLeft: "基本月租费", cellRight: "500.00" },
              { cellLeft: "叠加套餐包", cellRight: "10.00" }
            ]
          },
          {
            sectionLeft: "增值业务费",
            sectionRight: "0.50",
            cell: [
              { cellLeft: "点对点短信", cellRight: "0.50" }
            ]
          },
          {
            sectionLeft: "调整费用",
            sectionRight: "-0.5",
            cell: [
              { cellLeft: "优惠减免", cellRight: "-0.5" }
            ]
          },
          {
            sectionLeft: "账单总费用",
            sectionRight: "27.00",
            cell: [
              { cellLeft: "预存款抵扣", cellRight: "27.00" },
              { cellLeft: "本月结转零头(转出)", cellRight: "0.00" }
            ]
          },
        ],
        detailsProgram: [
          {
            cell: [
              { cellLeft: "基本月租费", cellMiddle:"", cellRight: "" },
              { cellLeft: "GSM基本月租/套餐月租", cellMiddle: "5000.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "50.00", cellRight: "" }
            ]
          },
          {
            cell: [
              { cellLeft: "套餐叠加包", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM流量类附加月租", cellMiddle: "10.00", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "10.00", cellRight: "" }
            ]
          }, 
          {
            cell: [
              { cellLeft: "点对点短信", cellMiddle: "", cellRight: "" },
              { cellLeft: "GSM短消息通信费", cellMiddle: "0.50", cellRight: "7" },
              { cellLeft: "明细小计", cellMiddle: "0.50", cellRight: "7" }
            ]
          },
          {
            cell: [
              { cellLeft: "调整费用", cellMiddle: "", cellRight: "" },
              { cellLeft: "调整费用", cellMiddle: "-0.50", cellRight: "" },
              { cellLeft: "明细小计", cellMiddle: "-0.50", cellRight: "" }
            ]
          }
        ]
      },
    },
  },  
  // 1.生命周期函数--监听页面加载
  onLoad(options) {
    billCost({
      success: res => {
        console.log(res.data);
        this.setData({
          userInfo: res.data.userInfo,
        });
      },
      fail: err => {
        console.log(err);
      },
    });
    let array = [];
    for(let key in this.data.billInfo){
      array.push(key);
    };
    const date = array[array.length - 1].split("-")[0] + "年" + array[array.length - 1].split("-")[1] + "月";
    this.setData({
      date: date,
      dataStart: array[0],
      dataEnd: array[array.length - 1],
      bill: this.data.billInfo[array[array.length - 1]],
    });
  },
  // 2.输入邮箱
  loseBlur(e) {
    this.setData({
      email: e.detail.value,
    });
  },
  // 3.保存邮箱
  updateEamil() {
    const email = this.data.email || this.data.userInfo.email;
    console.log(email);
    if(!reg.test(email)){
      showToast('请输入正确邮箱', 3);
    } else {
      app.sdk.showModal({
        title: email,
        content: '您确定绑定该电子邮箱吗？',
        success: res => {
          if (res.confirm) {
            console.log("确定");
            showLoading();
            updateEamil(email, {
              success: res => {
                console.log(res);
                showToast('成功', 0);
              },
              fail: err => {
                console.log(err);
                showError(err);
              },
            })
          } return;
        },
      });
    };
  },
  // 4.账单月份选择
  billChoose(e) {
    const key = e.detail.value;
    const date = key.split("-")[0] + "年" + key.split("-")[1] + "月";
    this.setData({
      date: date,
      bill: this.data.billInfo[key],
    });
  },
  // 5.补发账单
  reissueBill(e) {
    const email = this.data.email || this.data.userInfo.email;
    console.log(email);
    if(!reg.test(email)){
      showToast('请输入正确邮箱', 3);
    } else {
      app.sdk.showModal({
        title: '',
        content: '您确定补发该月电子对账单吗？补发成功后请留意短信或电子邮箱',
        success: res => {
          if (res.confirm) {
            // sentBill(date, {
            //   success: res => {
                showToast("补发受理成功", 0);
            //   }
            // })
          } return;
        },
      });
    };
  },
  // 6.退订账单
  unsubscribeBill(e) {
    const email = this.data.email || this.data.userInfo.email;
    console.log(email);
    if(!reg.test(email)){
      showToast('请输入正确邮箱', 3);
    } else {
      app.sdk.showModal({
        title: '',
        content: '退订后每月将不再发送电子对账单',
        success: res => {
          console.log(res)
          if (res.confirm) {
            // deleteBill(date, {
              // success: res => {
                showToast("退订受理成功", 0);
              // }
            // })
          } return;
        },
      });
    }  
  },
  // 7.页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() {
    console.log("下拉刷新");
  },
})