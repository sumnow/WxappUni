// pages/chargeRecords/chargeRecords.js
import { extend } from "../../utils/icons.js";
import { circular } from "../../utils/icons.js";
import { getChargeRecord } from "../../utils/service.js";
import { errMessage } from "../../utils/errMessage.js";
import { showLoading, hideLoading, showToast, showError } from '../../utils/notify.js';
// 获取应用实例
var app = getApp();

Page({
  // 页面的初始数据
  data: {
    pageX: 0,
    pageY: 0,
    currentX: 0,
    currentY: 0,
    pageWidth: '-750rpx',
    icons: {
      extend: extend,
      circular: circular,
    },
    animationData1:{},
    animationData2:{},
    years: [],
    availMonth: [],
    months: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    selectYear: '',
    selectMonth: '',
    // billInfo2:  [
    //   {
    //     year: '2017',
    //     data: [
    //       {
    //         months: '8',
    //         num: '0.00',
    //         info: []
    //       },
    //       {
    //         months: '9',
    //         num: '30.00',
    //         info: [
    //           {
    //             num: '10.00',
    //             time: '10月3日 19:00',
    //           },
    //           {
    //             num: '20.00',
    //             time: '10月3日 19:00',
    //           }
    //         ]
    //       },
    //       {
    //         months: '10',
    //         num: '40.00',
    //         info: [
    //           {
    //             num: '20.00',
    //             time: '10月3日 19:00',
    //           },
    //           {
    //             num: '20.00',
    //             time: '10月3日 19:00',
    //           }
    //         ]
    //       },
    //       {
    //         months: '11',
    //         num: '50.00',
    //         info: [
    //           // {
    //           //   num: '50.00',
    //           //   time: '10月3日 19:00',
    //           // }
    //         ]
    //       },
    //       {
    //         months: '12',
    //         num: '60.00',
    //         info: [
    //           {
    //             num: '10.00',
    //             time: '10月3日 19:00',
    //           },
    //           {
    //             num: '20.00',
    //             time: '10月3日 19:00',
    //           },
    //           {
    //             num: '30.00',
    //             time: '10月3日 19:00',
    //           }
    //         ]
    //       }
    //     ],
    //   },
    //   {
    //     year: '2018',
    //     data: [
    //       {
    //         months: '1',
    //         num: '100.00',
    //         info: [
    //           {
    //             num: '50.00',
    //             time: '10月3日 19:00',
    //           },
    //           {
    //             num: '50.00',
    //             time: '10月3日 19:00',
    //           },
    //           // {
    //           //   num: '50.00',
    //           //   time: '10月3日 19:00',
    //           // }
    //         ]
    //       },
    //     ],
    //   }
    // ],
  },
  // 1.生命周期函数--监听页面加载
  onShow() {
    const ser = new Date();
    this.setData({
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getFullYear() +''+ (new Date().getMonth()+1),
      currentMonth: new Date().getMonth()+1,
      currentYear: new Date().getFullYear(),
    });
    showLoading();
    getChargeRecord({
      success:(res) =>{
        hideLoading();
        this.setData({
          billInfo2: res.data,
        });
        this.reFre();
        console.log(this.data.billInfo2);
      },
      fail: err => {
        showError(err);
      },
    });
  },
  reFre (){
    const selMon = this.data.selectMonth;
    const self = this;
    function arrYear(ar){
      var arr = [],
      arr0 = [],
      arr1 = [],
      arr2 = [];
      ar.forEach((e)=>{
        arr.push(e.year.toString());
        arr0.push(e.data);
        arr1.push([]);
        arr2.push([]);
      });
      arr0.forEach((e,i)=>{
        e.forEach((c)=>{
          arr1[i].push(c.months.toString());
        });
      });
      var nowSel = {};
      arr1.forEach((e, i) => {
        for(let l = 1; l < 13; l ++) {
          if(e.includes(l.toString())) {
            let les = arr0[i].filter(e=>e.months == l.toString());
            let mel = {el:true ,month: l,num: les[0].num, year: arr[i], sel: false, info: les[0].info};
            let fel = {el:true ,month: l,num: les[0].num, year: arr[i], sel: true, info: les[0].info};
            if(selMon.slice(4) == mel.month && selMon.slice(0, 4) == mel.year) {
              nowSel = fel;
              arr2[i].push(fel);
              self.setData({
                numTotal: fel.num
              });
            } else {
              arr2[i].push(mel);
            }
          } else {
            arr2[i].push({el:false ,month: l , year: arr[i], sel: false});
          };
        };
      });
      // console.log(arr, arr2, arr1, nowSel.info)
      return [arr, arr2, arr1, nowSel.info];
    }
    this.setData({
      years: arrYear(this.data.billInfo2)[0],
      availMonth: arrYear(this.data.billInfo2)[1],
      months: arrYear(this.data.billInfo2)[2],
      billInfo: arrYear(this.data.billInfo2)[3],
      length: arrYear(this.data.billInfo2)[3].length,
    });
    console.log(this.data.years);
    console.log(this.data.availMonth);
    console.log(this.data.months);
    console.log(this.data.billInfo);
    console.log(this.data.length);
  },
  getChargeRecord(opt){
    getChargeRecord(opt);
  }, 
  
  moveAnimation (e){
    var animation = app.sdk.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    if(e) {
      this.animation.left('0rpx').step();
      this.animation.left(this.data.pageWidth).step({duration:0});
    } else {
      this.animation.left('-1500rpx').step();
      this.animation.left(this.data.pageWidth).step({duration:0});
    }
    this.setData({
      animationData1: this.animation.export()
    });
    this.reFre()
  },
  judgeDirection (ax, ay, bx, by){
    // this.data.months
    if(Math.abs(bx - ax)>100){

      let yearSel = (this.data.selectMonth).slice(0, 4);
      if((bx - ax) > 0){
        if(parseInt((this.data.selectMonth).slice(4)) > 1){
          if(this.data.months[this.data.years.indexOf(yearSel)].includes(parseInt((this.data.selectMonth).slice(4))-1+'')){
            this.setData({
              currentMonth: parseInt((this.data.selectMonth).slice(4))-1,
              selectMonth: yearSel+(parseInt((this.data.selectMonth).slice(4))-1)
            });
            this.reFre();
            this.moveAnimation(1);
          }
        }
      } else {
        if(parseInt((this.data.selectMonth).slice(4)) < 12){
          if(this.data.months[this.data.years.indexOf(yearSel)].includes(parseInt((this.data.selectMonth).slice(4))+1+'')){
            this.setData({
              currentMonth: parseInt((this.data.selectMonth).slice(4))+1,
              selectMonth: yearSel+(parseInt((this.data.selectMonth).slice(4))+1),
            });
            this.reFre();
            this.moveAnimation(0);
          }
        }
      }
    }
  },
  handletouchstart (e){
    this.setData({
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY,
    })
  },
  handletouchend (e){
    this.setData({
      currentX: e.changedTouches[0].pageX,
      currentY: e.changedTouches[0].pageY,
    })
    this.judgeDirection(this.data.pageX,this.data.pageY,this.data.currentX,this.data.currentY);
  },
  selectYear(e) {
    var animation = app.sdk.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    e.target.id === this.data.years[0] ? this.animation.left('630rpx').step() : this.animation.left('0rpx').step();  
    this.setData({
      animationData2: animation.export(),
      selectYear: e.currentTarget.id,
    });
  },

  selectMonth(e) {
    for(let i = 0 ; i < this.data.availMonth.length; i ++) {
      for(let m = 0 ; m < 12; m++){
        // console.log(this.data.availMonth[i][m].month, e.currentTarget.id.slice(4))
        if(this.data.availMonth[i][1].year == e.currentTarget.id.slice(0,4) && this.data.availMonth[i][m].month == e.currentTarget.id.slice(4)){
          this.data.availMonth[i][m].sel = true;
        } else {
          this.data.availMonth[i][m].sel = false;
        }
      }
    }
    let are1 = this.data.availMonth;
    // console.log(are1)
    if(this.data.selectMonth.slice(4) != e.currentTarget.id){
      if(parseInt(this.data.selectMonth.slice(0,4)) == parseInt(e.currentTarget.id.slice(0,4))){
        if(parseInt(this.data.selectMonth.slice(4)) > parseInt(e.currentTarget.id.slice(4))){
          this.moveAnimation(1)
        } else if(parseInt(this.data.selectMonth.slice(4)) == parseInt(e.currentTarget.id.slice(4))) {
        } else {
          this.moveAnimation(0)
        }
      } else if (parseInt(this.data.selectMonth.slice(0,4)) < parseInt(e.currentTarget.id.slice(0,4))) {
        this.moveAnimation(0)
      } else {
        this.moveAnimation(1)
      }
    }
    this.setData({
      availMonth: are1,
      selectMonth: e.currentTarget.id,
      // currentYear: e.currentTarget.id.slice(0,4),
      selectYear: e.currentTarget.id.slice(0, 4),
      currentMonth: e.currentTarget.id.slice(4),
    });
    this.reFre();
  },
})