<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { mapJson } from "./assets/map";

const handlePlayerECharts = () => {
  let playerXLabel = ["语文", "数学", "英语", "科学", "历史"];
  let playerOption = {
    tooltip: {},
    backgroundColor: "transparent",
    animation: false,
    grid: {
      top: "25%",
      bottom: "10%", //也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
      data: playerXLabel,
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#11417a",
        },
      },
      axisTick: {
        show: false, //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        margin: 14,
        fontSize: 14,
        textStyle: {
          color: "#A3C0DF", //X轴文字颜色
        },
      },
    },
    yAxis: [
      {
        type: "value",
        gridIndex: 0,
        min: 0,
        max: 100,
        interval: 25,
        // splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#113763",
            width: 1,
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#11417a",
          },
        },
        axisLabel: {
          show: true,
          margin: 14,
          fontSize: 14,
          textStyle: {
            color: "#A3C0DF", //X轴文字颜色
          },
        },
      },
    ],
    series: [
      {
        name: "主营业务",
        type: "bar",
        barWidth: 20,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#07ecd9",
              },
              {
                offset: 1,
                color: "#034881",
              },
            ]),
          },
        },
        data: [20, 80, 100, 40, 34, 90, 60],
        z: 10,
        zlevel: 0,
        label: {
          show: true,
          position: "top",
          distance: 10,
          fontSize: 16,
          color: "#01fff4",
        },
      },
      {
        // 分隔
        type: "pictorialBar",
        itemStyle: {
          normal: {
            color: "#0F375F",
          },
        },
        symbolRepeat: "fixed",
        symbolMargin: 6,
        symbol: "rect",
        symbolClip: true,
        symbolSize: [20, 2],
        symbolPosition: "start",
        symbolOffset: [0, -1],
        // symbolBoundingData: this.total,
        data: [20, 80, 100, 40, 34, 90, 60],
        width: 25,
        z: 0,
        zlevel: 1,
      },
    ],
  };

  const playerECharts = echarts.init(document.getElementById("player"));
  playerECharts.setOption(playerOption);
};

const handleTrialECharts = () => {
  let salvProName = ["安徽省", "河南省", "浙江省", "湖北省"];
  let salvProValue = [239, 181, 154, 144];
  let salvProMax = []; //背景按最大值
  for (let i = 0; i < salvProValue.length; i++) {
    salvProMax.push(salvProValue[0]);
  }
  let option = {
    backgroundColor: "transparent",
    grid: {
      left: "2%",
      right: "2%",
      bottom: "2%",
      top: "2%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter: function (params) {
        return params[0].name + " : " + params[0].value;
      },
    },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: salvProName,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          textStyle: {
            color: "#ffffff",
            fontSize: "12",
          },
        },
        data: salvProValue,
      },
    ],
    series: [
      {
        name: "值",
        type: "bar",
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgb(57,89,255,1)",
              },
              {
                offset: 1,
                color: "rgb(46,200,207,1)",
              },
            ]),
          },
        },
        barWidth: 20,
        data: salvProValue,
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 20,
        barGap: "-100%",
        data: salvProMax,
        itemStyle: {
          normal: {
            color: "rgba(24,31,68,1)",
            barBorderRadius: 30,
          },
        },
      },
    ],
  };

  const trialECharts = echarts.init(document.getElementById("trial"));
  trialECharts.setOption(option);
};

const handleCoachECharts = () => {
  let option = {
    backgroundColor: "transparent",
    grid: {
      left: "12%",
      top: "5%",
      bottom: "12%",
      right: "8%",
    },
    xAxis: {
      data: ["驯鹿", "火箭", "飞机", "高铁", "轮船", "汽车", "跑步", "步行"],
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 129, 109,.1)",
          width: 1, //这里是为了突出显示加上的
        },
      },
      axisLabel: {
        textStyle: {
          color: "#999",
          fontSize: 12,
        },
      },
    },
    yAxis: [
      {
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 129, 109, 0.1)",
            width: 1, //这里是为了突出显示加上的
          },
        },
        axisLabel: {
          textStyle: {
            color: "#999",
          },
        },
        splitArea: {
          areaStyle: {
            color: "rgba(255,255,255,.5)",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 129, 109, 0.1)",
            width: 0.5,
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        type: "pictorialBar",
        barCategoryGap: "0%",
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        label: {
          show: true,
          position: "top",
          distance: 15,
          color: "#08DFFE",
          fontWeight: "bolder",
          fontSize: 15,
        },
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#9A11FF",
                },
                {
                  offset: 1,
                  color: "#08DFFE",
                },
              ],
              global: false, //  缺省为  false
            },
          },
          emphasis: {
            opacity: 1,
          },
        },
        data: [123, 60, 25, 18, 12, 9, 2, 1],
      },
    ],
  };

  const coachECharts = echarts.init(document.getElementById("coach"));
  coachECharts.setOption(option);
};

const handleMapECharts = () => {
  let geoGpsMap = {
    "1": [125.8154, 44.2584],
    "2": [125.8154, 44.2584],
    "3": [117.1582, 36.8701],
    "4": [117.1582, 36.8701],
    "5": [103.9526, 30.7617],
    "6": [103.9526, 30.7617],
  };
  let geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };

  let d1 = {
    江苏: 10041,
    黑龙江: 4093,
    内蒙古: 1157,
    吉林: 4903,
    北京市: 2667,
    辽宁: 8331,
    河北: 23727,
    天津: 681,
    山西: 5352,
    陕西: 38,
    甘肃: 77,
    宁夏: 65,
    青海: 10,
    新疆: 193,
    四川: 309,
    重庆: 77,
    山东: 21666,
    河南: 15717,
    安徽: 15671,
    湖北: 3714,
    浙江: 3141,
    福建: 955,
    江西: 4978,
    湖南: 778,
    贵州: 33,
    云南: 149,
    广东: 1124,
    广西: 125,
    海南: 7,
    上海: 2155,
  };

  let d2 = {
    江苏: 0,
    黑龙江: 0,
    内蒙古: 0,
    吉林: 0,
    北京市: 0,
    辽宁: 0,
    河北: 0,
    天津: 0,
    山西: 0,
    陕西: 0,
    甘肃: 0,
    宁夏: 0,
    青海: 0,
    新疆: 0,
    四川: 0,
    重庆: 0,
    山东: 0,
    河南: 0,
    安徽: 0,
    湖北: 0,
    浙江: 0,
    福建: 0,
    江西: 0,
    湖南: 0,
    贵州: 0,
    云南: 0,
    广东: 0,
    广西: 0,
    海南: 0,
    上海: 0,
  };

  let d3 = {
    江苏: 11788,
    黑龙江: 1944,
    内蒙古: 2954,
    吉林: 3482,
    北京市: 1808,
    辽宁: 5488,
    河北: 27035,
    天津: 2270,
    山西: 13623,
    陕西: 4221,
    甘肃: 754,
    宁夏: 1783,
    青海: 91,
    新疆: 1907,
    四川: 4905,
    重庆: 1420,
    山东: 39781,
    河南: 16154,
    安徽: 7914,
    湖北: 6802,
    浙江: 5812,
    福建: 3345,
    江西: 4996,
    湖南: 5627,
    贵州: 1504,
    云南: 2725,
    广东: 6339,
    广西: 1009,
    海南: 0,
    上海: 1988,
  };

  let d4 = {
    江苏: 0,
    黑龙江: 0,
    内蒙古: 0,
    吉林: 0,
    北京市: 0,
    辽宁: 0,
    河北: 0,
    天津: 0,
    山西: 0,
    陕西: 0,
    甘肃: 0,
    宁夏: 0,
    青海: 0,
    新疆: 0,
    四川: 0,
    重庆: 0,
    山东: 0,
    河南: 0,
    安徽: 0,
    湖北: 0,
    浙江: 0,
    福建: 0,
    江西: 0,
    湖南: 0,
    贵州: 0,
    云南: 0,
    广东: 0,
    广西: 0,
    海南: 0,
    上海: 0,
  };

  let d5 = {
    江苏: 159,
    黑龙江: 5,
    内蒙古: 54,
    吉林: 10,
    北京市: 0,
    辽宁: 0,
    河北: 1679,
    天津: 1,
    山西: 2698,
    陕西: 1744,
    甘肃: 362,
    宁夏: 429,
    青海: 122,
    新疆: 731,
    四川: 3925,
    重庆: 1480,
    山东: 79,
    河南: 1017,
    安徽: 208,
    湖北: 1209,
    浙江: 1418,
    福建: 1237,
    江西: 1004,
    湖南: 1511,
    贵州: 345,
    云南: 1429,
    广东: 2242,
    广西: 2271,
    海南: 59,
    上海: 8,
  };

  let d6 = {
    江苏: 0,
    黑龙江: 0,
    内蒙古: 0,
    吉林: 0,
    北京市: 0,
    辽宁: 0,
    河北: 0,
    天津: 0,
    山西: 0,
    陕西: 0,
    甘肃: 0,
    宁夏: 0,
    青海: 0,
    新疆: 0,
    四川: 0,
    重庆: 0,
    山东: 0,
    河南: 0,
    安徽: 0,
    湖北: 0,
    浙江: 0,
    福建: 0,
    江西: 0,
    湖南: 0,
    贵州: 0,
    云南: 0,
    广东: 0,
    广西: 0,
    海南: 0,
    上海: 0,
  };

  let colors = [
    ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
    [
      "#1DE9B6",
      "#F46E36",
      "#04B9FF",
      "#5DBD32",
      "#FFC809",
      "#FB95D5",
      "#BDA29A",
      "#6E7074",
      "#546570",
      "#C4CCD3",
    ],
    [
      "#37A2DA",
      "#67E0E3",
      "#32C5E9",
      "#9FE6B8",
      "#FFDB5C",
      "#FF9F7F",
      "#FB7293",
      "#E062AE",
      "#E690D1",
      "#E7BCF3",
      "#9D96F5",
      "#8378EA",
      "#8378EA",
    ],
    [
      "#DD6B66",
      "#759AA0",
      "#E69D87",
      "#8DC1A9",
      "#EA7E53",
      "#EEDD78",
      "#73A373",
      "#73B9BC",
      "#7289AB",
      "#91CA8C",
      "#F49F42",
    ],
  ];
  let colorIndex = 0;

  // let geoCoordMap = {
  //     '郑州': [113.64964385, 34.7566100641],
  //     '开封': [114.351642118, 34.8018541758],
  //     '洛阳': [112.447524769, 34.6573678177],
  //     '平顶山': [113.300848978, 33.7453014565],
  //     '安阳': [114.351806508, 36.1102667222],
  //     '鹤壁': [114.297769838, 35.7554258742],
  //     '新乡': [113.912690161, 35.3072575577],
  //     '焦作': [113.211835885, 35.234607555],
  //     '濮阳': [115.026627441, 35.7532978882],
  //     '漯河': [114.0460614, 33.5762786885],
  //     '三门峡': [111.181262093, 34.7833199411],
  //     '南阳': [112.542841901, 33.0114195691],
  //     "商丘": [115.641885688, 34.4385886402],
  //     '信阳': [114.085490993, 32.1285823075],
  //     '周口': [114.654101942, 33.6237408181],
  //     '许昌': [113.83531246, 34.0267395887],
  //     '驻马店': [114.049153547, 32.9831581541]
  // };

  let year = ["长春", "长春", "青岛", "青岛", "成都", "成都"];
  let mapData = [[], [], [], [], [], []];

  /*柱子Y名称*/
  let categoryData = [];
  let barData = [];

  for (let key in geoCoordMap) {
    mapData[0].push({
      year: "长春",
      name: key,
      value: d1[key] / 100,
      value1: d1[key] / 100,
    });
    mapData[1].push({
      year: "长春",
      name: key,
      value: d1[key] / 100,
      value1: d2[key] / 100,
    });
    mapData[2].push({
      year: "青岛",
      name: key,
      value: d3[key] / 100,
      value1: d3[key] / 100,
    });
    mapData[3].push({
      year: "青岛",
      name: key,
      value: d3[key] / 100,
      value1: d4[key] / 100,
    });
    mapData[4].push({
      year: "成都",
      name: key,
      value: d5[key] / 100,
      value1: d5[key] / 100,
    });
    mapData[5].push({
      year: "成都",
      name: key,
      value: d5[key] / 100,
      value1: d6[key] / 100,
    });
  }

  for (let i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
      return a.value - b.value;
    });
    barData.push([]);
    categoryData.push([]);
    for (let j = 0; j < mapData[i].length; j++) {
      barData[i].push(mapData[i][j].value1);
      categoryData[i].push(mapData[i][j].name);
    }
  }

  echarts.registerMap("china", mapJson);
  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  let convertToLineData = function (data, gps) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let toCoord = geoCoordMap[dataItem.name];
      let fromCoord = gps; //郑州
      //  let toCoord = geoGps[Math.random()*3];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem.value,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };

  let optionXyMap01 = {
    // timeline: {
    //   data: year,
    //   axisType: "category",
    //   // autoPlay: true,
    //   playInterval: 3000,
    //   left: "10%",
    //   right: "10%",
    //   bottom: "3%",
    //   width: "80%",
    //   //  height: null,
    //   label: {
    //     normal: {
    //       textStyle: {
    //         color: "#ddd",
    //       },
    //     },
    //     emphasis: {
    //       textStyle: {
    //         color: "#fff",
    //       },
    //     },
    //   },
    //   symbolSize: 10,
    //   lineStyle: {
    //     color: "#555",
    //   },
    //   checkpointStyle: {
    //     borderColor: "#777",
    //     borderWidth: 2,
    //   },
    //   controlStyle: {
    //     showNextBtn: true,
    //     showPrevBtn: true,
    //     normal: {
    //       color: "#666",
    //       borderColor: "#666",
    //     },
    //     emphasis: {
    //       color: "#aaa",
    //       borderColor: "#aaa",
    //     },
    //   },
    // },
    baseOption: {
      animation: true,
      animationDuration: 1000,
      animationEasing: "cubicInOut",
      animationDurationUpdate: 1000,
      animationEasingUpdate: "cubicInOut",
      grid: {
        right: "1%",
        top: "15%",
        bottom: "10%",
        width: "20%",
      },
      tooltip: {
        trigger: "axis", // hover触发器
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: "rgba(150,150,150,0.1)", //hover颜色
          },
        },
      },
      geo: {
        show: true,
        map: "china",
        roam: true,
        zoom: 1,
        center: [113.83531246, 34.0267395887],
        label: {
          emphasis: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            borderColor: "rgba(147, 235, 248, 1)",
            borderWidth: 1,
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            shadowColor: "rgba(128, 217, 248, 1)",
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          emphasis: {
            areaColor: "#389BB7",
            borderWidth: 0,
          },
        },
      },
    },
    options: [],
  };

  for (let n = 0; n < year.length; n++) {
    optionXyMap01.options.push({
      backgroundColor: "transparent",
      title: [
        {
          text: "整车物流平台",
          subtext: "   数据由整车物流部提供",
          left: "35%",
          top: "15%",
          textStyle: {
            color: "#fff",
            fontSize: 25,
          },
        },
        // {
        //   id: "statistic",
        //   text: year[n] + "数据统计情况",
        //   left: "75%",
        //   top: "8%",
        //   textStyle: {
        //     color: "#fff",
        //     fontSize: 25,
        //   },
        // },
      ],
      xAxis: {
        type: "value",
        scale: true,
        position: "top",
        min: 0,
        boundaryGap: false,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 2,
          textStyle: {
            color: "#aaa",
          },
        },
      },
      yAxis: {
        type: "category",
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#ddd",
          },
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: "#ddd",
          },
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#ddd",
          },
        },
        data: categoryData[n],
      },
      series: [
        //未知作用
        {
          //文字和标志
          name: "light",
          type: "scatter",
          coordinateSystem: "geo",
          data: convertData(mapData[n]),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          label: {
            normal: {
              formatter: "{b}",
              position: "right",
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              color: colors[colorIndex][n],
            },
          },
        },
        //地图
        {
          type: "map",
          map: "china",
          geoIndex: 0,
          aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#FFFFFF",
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
          animation: false,
          data: mapData,
        },
        //地图点的动画效果
        // {
        //   //  name: 'Top 5',
        //   type: "effectScatter",
        //   coordinateSystem: "geo",
        //   data: convertData(
        //     mapData[n]
        //       .sort(function (a, b) {
        //         return b.value - a.value;
        //       })
        //       .slice(0, 20)
        //   ),
        //   symbolSize: function (val) {
        //     return val[2] / 10;
        //   },
        //   showEffectOn: "render",
        //   rippleEffect: {
        //     brushType: "stroke",
        //   },
        //   hoverAnimation: true,
        //   label: {
        //     normal: {
        //       formatter: "{b}",
        //       position: "right",
        //       show: true,
        //     },
        //   },
        //   itemStyle: {
        //     normal: {
        //       color: colors[colorIndex][n],
        //       shadowBlur: 10,
        //       shadowColor: colors[colorIndex][n],
        //     },
        //   },
        //   zlevel: 1,
        // },
        //地图线的动画效果
        // {
        //   type: "lines",
        //   zlevel: 2,
        //   effect: {
        //     show: true,
        //     period: 4, //箭头指向速度，值越小速度越快
        //     trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        //     symbol: "arrow", //箭头图标
        //     symbolSize: 3, //图标大小
        //   },
        //   lineStyle: {
        //     normal: {
        //       color: colors[colorIndex][n],
        //       width: 0.1, //尾迹线条宽度
        //       opacity: 0.5, //尾迹线条透明度
        //       curveness: 0.3, //尾迹线条曲直度
        //     },
        //   },
        //   data: convertToLineData(mapData[n], geoGpsMap[n + 1]),
        // },
        //柱状图
        // {
        //   zlevel: 1.5,
        //   type: "bar",
        //   symbol: "none",
        //   itemStyle: {
        //     normal: {
        //       color: colors[colorIndex][n],
        //     },
        //   },
        //   data: barData[n],
        // },
      ],
    });
  }

  const mapCharts = echarts.init(document.getElementById("map"));

  mapCharts.setOption(optionXyMap01);

  function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
};

const handleVip1ECharts = () => {
  let scale = 1;
  let echartData = [
    {
      value: 2154,
      name: "税务登记",
    },
    {
      value: 3854,
      name: "发票管理",
    },
    {
      value: 3515,
      name: "纳税申报",
    },
    {
      value: 3515,
      name: "行政处罚",
    },
    {
      value: 3854,
      name: "资格认定",
    },
    {
      value: 2154,
      name: "其他合计",
    },
  ];
  let rich = {
    yellow: {
      color: "#ffc72b",
      fontSize: 30 * scale,
      padding: [5, 4],
      align: "center",
    },
    total: {
      color: "#ffc72b",
      fontSize: 40 * scale,
      align: "center",
    },
    white: {
      color: "#fff",
      align: "center",
      fontSize: 14 * scale,
      padding: [21, 0],
    },
    blue: {
      color: "#49dff0",
      fontSize: 16 * scale,
      align: "center",
    },
    hr: {
      borderColor: "#999999",
      width: "100%",
      borderWidth: 1,
      height: 0,
    },
  };
  let option = {
    backgroundColor: "transparent",
    title: {
      text: "实体办税工作量",
      left: "center",
      top: "53%",
      padding: [24, 0],
      textStyle: {
        color: "#fff",
        fontSize: 18 * scale,
        align: "center",
      },
    },
    legend: {
      selectedMode: false,
      formatter: function (name) {
        let total = 0; //各科正确率总和
        let averagePercent; //综合正确率
        echartData.forEach(function (value, index, array) {
          total += value.value;
        });
        return "{total|" + total + "}";
      },
      data: [echartData[0].name],
      // data: ['高等教育学'],
      // itemGap: 50,
      left: "center",
      top: "center",
      icon: "none",
      align: "center",
      textStyle: {
        color: "#fff",
        fontSize: 16 * scale,
        rich: rich,
      },
    },
    series: [
      {
        name: "实体办税工作量",
        type: "pie",
        radius: ["42%", "50%"],
        hoverAnimation: false,
        color: [
          "#c487ee",
          "#deb140",
          "#49dff0",
          "#0000ff",
          "#6f81da",
          "#00ffb4",
        ],
        label: {
          normal: {
            formatter: function (params, ticket, callback) {
              let total = 0; //考生总数量
              let percent = 0; //考生占比
              echartData.forEach(function (value, index, array) {
                total += value.value;
              });
              percent = ((params.value / total) * 100).toFixed(1);
              return (
                "{white|" +
                params.name +
                "}\n{hr|}\n{yellow|" +
                params.value +
                "}\n{blue|" +
                percent +
                "%}"
              );
            },
            rich: rich,
          },
        },
        labelLine: {
          normal: {
            length: 55 * scale,
            length2: 0,
            lineStyle: {
              color: "#999999",
            },
          },
        },
        data: echartData,
      },
    ],
  };

  const vip1Charts = echarts.init(document.getElementById("vip1"));
  vip1Charts.setOption(option);
};

const handleVip2ECharts = () => {
  let option = {
    backgroundColor: "transparent",
    title: {
      text: "分区受理情况",
      top: "5%",
      left: "center",
      textStyle: {
        color: "#FFF",
        align: "center",
      },
    },
    grid: {
      show: true,
      left: "5%",
      right: "5%",
      top: "20%",
      bottom: "5%",
      containLabel: true,
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: true,
      top: "10%",
      right: 20,
      icon: "rect",
      itemWidth: 22,
      itemHeight: 3,
      textStyle: {
        color: "#fff",
      },
      data: ["大户", "市中"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: "#fff",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#fff",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(244, 244, 244, 0.2)",
          },
        },
      },
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value} %",
          textStyle: {
            color: "#fff",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(244, 244, 244, 0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "大户",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 9,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#E7FF01", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#86F028", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            lineStyle: {
              color: "#86F028",
              width: 1,
            },
          },
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280],
      },
      {
        name: "市中",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 9,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00FFFF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#0099FF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            lineStyle: {
              color: "#3CDBFF",
              width: 1,
            },
          },
        },
        data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250],
      },
    ],
  };

  const vip2Charts = echarts.init(document.getElementById("vip2"));
  vip2Charts.setOption(option);
};

const handleMatchStoreCharts = () => {
  let option = {
    backgroundColor: "#174973",
    title: {
      text: "分区受理情况",
      top: "5%",
      left: "center",
      textStyle: {
        color: "#FFF",
        align: "center",
      },
    },
    grid: {
      show: true,
      left: "5%",
      right: "5%",
      top: "20%",
      bottom: "5%",
      containLabel: true,
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: true,
      top: "10%",
      right: 20,
      icon: "rect",
      itemWidth: 22,
      itemHeight: 3,
      textStyle: {
        color: "#fff",
      },
      data: ["大户", "市中"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: "#fff",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#fff",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(244, 244, 244, 0.2)",
          },
        },
      },
      {
        type: "value",
        name: "",
        axisLabel: {
          formatter: "{value} %",
          textStyle: {
            color: "#fff",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 204, 255, 0.5)",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(244, 244, 244, 0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "大户",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 9,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#E7FF01", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#86F028", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            lineStyle: {
              color: "#86F028",
              width: 1,
            },
          },
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280],
      },
      {
        name: "市中",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 9,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00FFFF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#0099FF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            lineStyle: {
              color: "#3CDBFF",
              width: 1,
            },
          },
        },
        data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250],
      },
    ],
  };

  const vip2Charts = echarts.init(document.getElementById("vip2"));
  vip2Charts.setOption(option);
};

const handleMatchAgeCharts = () => {
  let option = {
    title: {
      text: "南丁格尔玫瑰图",
      x: "center",
    },
    color: [
      "#37a2da",
      "#32c5e9",
      "#9fe6b8",
      "#ffdb5c",
      "#ff9f7f",
      "#fb7293",
      "#e7bcf3",
      "#8378ea",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ["pie", "funnel"],
        },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    series: [
      {
        name: "增值电信业务统计表",
        type: "pie",
        radius: [40, 150],

        roseType: "area",
        data: [
          { value: 10, name: "rose1" },
          { value: 5, name: "rose2" },
          { value: 15, name: "rose3" },
          { value: 25, name: "rose4" },
          { value: 20, name: "rose5" },
          { value: 35, name: "rose6" },
          { value: 30, name: "rose7" },
          { value: 40, name: "rose8" },
        ],
      },
    ],
  };

  const matchAgeCharts = echarts.init(document.getElementById("match-age"));
  matchAgeCharts.setOption(option);
};

const handleMatchTrendCharts = () => {
  let option = {
    backgroundColor: "transparent",
    color: ["#27d391", "#eddb76", "#fe3838", "#27d391"],
    legend: {
      top: 10,
      left: "center",
      textStyle: {
        color: "#97b8d8",
      },
      data: ["优", "良", "差", "无"],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: [
      {
        gridIndex: 0,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(151,184,216,0.5)",
            type: "dashed",
          },
        },
        type: "category",
        boundaryGap: false,
        data: [
          "站点1",
          "站点2",
          "站点3",
          "站点4",
          "站点5",
          "站点6",
          "站点5",
          "站点7",
          "站点8",
          "站点9",
          "站点9",
          "z郑州",
        ],
      },
      {
        gridIndex: 1,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(151,184,216,0.5)",
            type: "dashed",
          },
        },
        type: "category",
        boundaryGap: false,
        data: [
          "站点1",
          "站点2",
          "站点3",
          "站点4",
          "站点5",
          "站点6",
          "站点5",
          "站点7",
          "站点8",
          "站点9",
          "站点9",
          "z郑州",
        ],
      },
      {
        gridIndex: 2,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(151,184,216,0.5)",
            type: "dashed",
          },
        },
        type: "category",
        boundaryGap: false,
        data: [
          "站点1",
          "站点2",
          "站点3",
          "站点4",
          "站点5",
          "站点6",
          "站点5",
          "站点7",
          "站点8",
          "站点9",
          "站点9",
          "z郑州",
        ],
      },
      {
        gridIndex: 3,
        axisLine: {
          lineStyle: {
            color: "#97b8d8",
          },
        },
        axisLabel: {
          color: "#97b8d8",
          fontSize: 14,
        },
        type: "category",
        boundaryGap: false,
        data: [
          "站点1",
          "站点2",
          "站点3",
          "站点4",
          "站点5",
          "站点6",
          "站点5",
          "站点7",
          "站点8",
          "站点9",
          "站点9",
          "z郑州",
        ],
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        splitNumber: 1,
        name: "优",
        nameLocation: "center",
        nameTextStyle: {
          color: "#97b8d8",
          fontSize: 14,
        },
        nameRotate: 360,
      },
      {
        gridIndex: 1,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        splitNumber: 1,
        name: "良",
        nameLocation: "center",
        nameTextStyle: {
          color: "#97b8d8",
          fontSize: 14,
        },
        nameRotate: 360,
      },
      {
        gridIndex: 2,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        splitNumber: 1,
        name: "差",
        nameLocation: "center",
        nameTextStyle: {
          color: "#97b8d8",
          fontSize: 14,
        },
        nameRotate: 360,
      },
      {
        gridIndex: 3,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        splitNumber: 1,
        name: "无",
        nameLocation: "center",
        nameTextStyle: {
          color: "#97b8d8",
          fontSize: 14,
        },
        nameRotate: 360,
      },
    ],
    grid: [
      {
        top: "10%",
        left: "5%",
        right: "4%",
        bottom: "4%",
        height: "20%",
      },
      {
        top: "30%",
        left: "5%",
        right: "4%",
        bottom: "4%",
        height: "20%",
      },
      {
        top: "50%",
        left: "5%",
        right: "4%",
        bottom: "4%",
        height: "20%",
      },
      {
        top: "70%",
        left: "5%",
        right: "4%",
        bottom: "4%",
        height: "20%",
      },
    ],
    series: [
      {
        type: "line",
        data: [
          0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0,
        ],
        xAxisIndex: 0,
        yAxisIndex: 0,
        smooth: true,
        lineStyle: {
          color: "#92c690",
        },
        itemStyle: {
          normal: {
            color: "#92c690",
            borderColor: "#92c690",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#92c690b3",
            },
            {
              offset: 1,
              color: "#92c69003",
            },
          ]),
        },
      },
      {
        type: "line",
        data: [12, 45, 15, 2, 56, 15, 12, 45, 15, 2, 56, 15],
        xAxisIndex: 1,
        yAxisIndex: 1,
        smooth: true,
        lineStyle: {
          color: "#219cab",
        },
        itemStyle: {
          normal: {
            color: "#219cab",
            borderColor: "#219cab",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#219cabb3",
            },
            {
              offset: 1,
              color: "#219cab03",
            },
          ]),
        },
      },
      {
        type: "line",
        data: [
          0, 74.1, 67.2, 79.5, 46.4, 46.4, 46.4, 74.1, 67.2, 79.5, 46.4, 0,
        ],
        xAxisIndex: 2,
        yAxisIndex: 2,
        smooth: true,
        lineStyle: {
          color: "#6f68bf",
        },
        itemStyle: {
          normal: {
            color: "#6f68bf",
            borderColor: "#6f68bf",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#6f68bfb3",
            },
            {
              offset: 1,
              color: "#6f68bf03",
            },
          ]),
        },
      },
    ],
  };

  const matchTrendCharts = echarts.init(document.getElementById("match-trend"));
  matchTrendCharts.setOption(option);
};

//  实时生成2023-09-30 星期三 13:30:15，展示在模版中
const handleTime = () => {
  const time = document.querySelector(".time");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const week = date.getDay();
  const weekMap = ["日", "一", "二", "三", "四", "五", "六"];

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  if (time) {
    time.innerHTML = `${year}-${month}-${day} 星期${weekMap[week]} ${hour}:${minute}:${second}`;
  }
};

const countConfig = [
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
  {
    label: "会员总数",
    value: 1000,
  },
];

onMounted(() => {
  handlePlayerECharts();
  handleTrialECharts();
  handleCoachECharts();
  handleMapECharts();
  handleVip1ECharts();
  handleVip2ECharts();
  // handleMatchStoreCharts();
  handleMatchAgeCharts();
  handleMatchTrendCharts();

  handleTime();
  setInterval(() => {
    handleTime();
  }, 1000);
});
</script>

<template>
  <div class="page">
    <div class="header">
      <div class="title">中国篮球协会人才体系可视化平台</div>
      <div class="time"></div>
    </div>

    <div class="content">
      <div class="left">
        <div class="title-box">
          <span class="first">球员</span>
          <span class="second">/Player Library</span>
        </div>
        <div id="player" class="player"></div>
        <div class="title-box">
          <span class="first">裁判员</span>
          <span class="second">/Referee Library</span>
        </div>
        <div id="trial" class="trial"></div>
        <div class="title-box">
          <span class="first">教练员</span>
          <span class="second">/Coach Library</span>
        </div>
        <div id="coach" class="coach"></div>
      </div>

      <div class="middle">
        <div id="map" class="map"></div>
        <div class="title-box">
          <span class="first">会员统计</span>
          <span class="second">/Membership Statistics</span>
        </div>
        <div class="count-box">
          <div v-for="item in countConfig" class="count-item">
            <div class="count">{{ item.value }}</div>
            <div class="label">{{ item.label }}</div>
          </div>
        </div>
        <div class="canvas-box">
          <div id="vip1" class="vip1"></div>
          <div class="grow-count">
            <div class="grow-item-box">
              <div class="grow-item">
                <span class="grow-number">3212</span>
                <span class="grow-text">人</span>
              </div>
              <div class="grow-label">本月新增</div>
            </div>
            <div class="grow-item-box">
              <div class="grow-item">
                <span class="grow-number">3212</span>
                <span class="grow-text">人</span>
              </div>
              <div class="grow-label">本月新增</div>
            </div>
          </div>
          <div id="vip2" class="vip2"></div>
        </div>
      </div>

      <div class="right">
        <div class="title-box">
          <span class="first">比赛库</span>
          <span class="second">/Competition Library</span>
        </div>
        <div id="razing" class="razing"></div>
        <div class="title-box">
          <span class="first">比赛年龄分布</span>
          <span class="second">/Competition Age Distribution</span>
        </div>
        <div id="match-age" class="match-age"></div>
        <div class="title-box">
          <span class="first">比赛新增趋势</span>
          <span class="second">/New Competition Trend</span>
        </div>
        <div id="match-trend" class="match-trend"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 1920px;
  height: 1080px;
  background-image: url("./assets/bgi.png");
  background-size: cover;

  .header {
    display: flex;
    justify-content: space-between;
    height: 90px;
    padding: 0 32px 0 53px;
    .title {
      font-size: 48px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #ffffff;
      line-height: 90px;
    }
    .time {
      height: 15px;
      font-size: 20px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #fefeff;
      line-height: 90px;
      opacity: 0.95;
    }
  }

  .content {
    display: flex;
    padding: 0 32px 0 53px;
    justify-content: space-between;
    .left,
    .right {
      .title-box {
        width: 474px;
        height: 30px;
        background-image: url("./assets/title.png");
        background-size: cover;
        padding-left: 25px;
        box-sizing: border-box;
        margin-top: 20px;
        .first {
          font-size: 20px;
          font-family: PangMenZhengDao;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
        }
        .second {
          font-size: 14px;
          font-family: PangMenZhengDao;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          opacity: 0.6;
        }
      }
    }

    .left {
      .player {
        width: 474px;
        height: 300px;
      }
      .trial {
        width: 474px;
        height: 200px;
      }

      .coach {
        width: 474px;
        height: 300px;
      }
    }

    .right {
      .razing {
        width: 474px;
        height: 200px;
      }

      .match-age {
        width: 474px;
        height: 400px;
      }

      .match-trend {
        width: 474px;
        height: 200px;
      }
    }

    .middle {
      .map {
        width: 848px;
        height: 600px;
      }

      .title-box {
        width: 848px;
        height: 30px;
        background-image: url("./assets/long-title.png");
        background-size: cover;
        padding-left: 25px;
        box-sizing: border-box;
        margin-top: 20px;
        .first {
          font-size: 20px;
          font-family: PangMenZhengDao;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
        }
        .second {
          font-size: 14px;
          font-family: PangMenZhengDao;
          font-weight: 400;
          color: #ffffff;
          line-height: 30px;
          opacity: 0.6;
        }
      }

      .count-box {
        display: flex;
        width: 848px;
        justify-content: space-around;
        .count-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .count {
            font-size: 20px;
            font-family: PangMenZhengDao;
            font-weight: 400;
            color: #f5b436;
            margin-top: 20px;
          }
          .label {
            margin-top: 16px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #ffffff;
            opacity: 0.95;
          }
        }
      }

      .canvas-box {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;

        .vip1 {
          width: 350px;
          height: 200px;
        }

        .grow-count {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          .grow-item-box {
            .grow-item {
              background-image: url("./assets/grow.png");
              width: 67px;
              height: 44px;
              background-size: cover;
              text-align: center;
              .grow-number {
                font-size: 16px;
                font-family: PangMenZhengDao;
                font-weight: 400;
                color: #43c1ea;
              }
              .grow-text {
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #9fa6b1;
              }
            }

            .grow-label {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #9fa6b1;
              text-align: center;
              margin-top: 7px;
            }
          }
        }

        .vip2 {
          width: 350px;
          height: 200px;
        }
      }
    }
  }
}
</style>
