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
    const dateNow = new Date();
    this.setData({
      selectYear: dateNow.getFullYear(),
      selectMonth: dateNow.getFullYear() +''+ (dateNow.getMonth()+1),
      currentMonth: dateNow.getMonth()+1,
      currentYear: dateNow.getFullYear(),
    });
    showLoading();
    getChargeRecord({
      success:(res) =>{
        hideLoading();
        this.setData({
          // billInfo2: [res.data[1]],
          billInfo2: res.data,
        });
        this.reFre();
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
      var arr = [], //存入年份
      arr0 = [], // 存入初始
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
            let dataEveryMonth = arr0[i].filter(e=>e.months == l.toString());

            let unselMonth = {hasData: dataEveryMonth[0].num != 0 ,month: l,num: dataEveryMonth[0].num, year: arr[i], sel: false, info: dataEveryMonth[0].info, data: dataEveryMonth};
            let selMonth = {hasData: dataEveryMonth[0].num != 0 ,month: l,num: dataEveryMonth[0].num, year: arr[i], sel: true, info: dataEveryMonth[0].info, data: dataEveryMonth};
            if(selMon.slice(4) == unselMonth.month && selMon.slice(0, 4) == unselMonth.year) {
              nowSel = selMonth;
              arr2[i].push(selMonth);
              self.setData({
                numTotal: selMonth.num
              });
            } else {
              arr2[i].push(unselMonth);
            }
          } else {
            arr2[i].push({month: l , year: arr[i], sel: false});
          };
        };
      });
      return [arr, arr2, arr1, nowSel];
    }

    // 输出年份数组， 月份数组， 可选月份数组， 选中的月份属性
    const arrGroup = arrYear(this.data.billInfo2)
    console.log(arrGroup)
    this.setData({
      years: arrGroup[0], 
      availMonth: arrGroup[1],
      months: arrGroup[2],
      billInfo: arrGroup[3],
      length: arrGroup[3].info.length,
      availMonthL: arrGroup[1].length-1
    });
    if(!this.data.availMonthL) {
      var animation = app.sdk.createAnimation({
        duration: 0,
        timingFunction: "linear",
        delay: 0
      });
      this.animation = animation;
      this.animation.left('0rpx').step();
      this.setData({
        animationData2: this.animation.export()
      });
    }
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
    if (this.data.availMonthL) {
      var animation = app.sdk.createAnimation({
        duration: 300,
        timingFunction: "linear",
        delay: 0
      });
      this.animation = animation;
      e.target.id === this.data.years[this.data.years.length-1] ? animation.left('-630rpx').step() : animation.left('0rpx').step();  
      this.setData({
        animationData2: animation.export(),
        selectYear: e.currentTarget.id,
      });
    }
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
      selectYear: e.currentTarget.id.slice(0, 4),
      currentMonth: e.currentTarget.id.slice(4),
    });
    this.reFre();
  },
})