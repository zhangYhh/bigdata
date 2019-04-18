var a1 = echarts.init(document.getElementById("las")); 
option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            // ['product', '2015', '2016', '2017'],
            ['清溪镇', 43.3, 85.8, 93.7],
            ['花溪村', 83.1, 73.4, 55.1],
            ['坪坝镇', 86.4, 65.2, 82.5],
            ['西秀区', 72.4, 53.9, 39.1]
        ]
    },
    color:['#ff9501','#4cceff'],
    xAxis: {type: 'category'},
    yAxis: {},
    
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'}
    ]
};

a1.setOption(option);
$(window).resize(function(){
    a1.resize();
})



var a2 = echarts.init(document.getElementById("a2")); 

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#4aace9','#de7e1a','#84c185','#cdb33a'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            data:[
                {value:335, name:'食品'},
                {value:310, name:'食用农产品'},
                {value:234, name:'跨境电商'},
                {value:215, name:'农业生产资料'}
            ]
        }
    ]
};
a2.setOption(option);
$(window).resize(function(){
    a2.resize();
})

var a3 = echarts.init(document.getElementById("a3")); 
var base = +new Date(2016, 9, 3);
var oneDay = 24 * 3600 * 1000;
var valueBase = Math.random() * 300;
var valueBase2 = Math.random() * 50;
var data = [];
var data2 = [];

for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

    valueBase = Math.round((Math.random() - 0.5) * 60 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
}

option = {
    animation: false,
    // title: {
    //     left: 'center',
    //     text: '触屏 tooltip 和 dataZoom 示例',
    //     subtext: '"tootip" and "dataZoom" on mobile device',
    // },
    // legend: {
    //     top: 'bottom',
    //     data:['意向']
    // },
    tooltip: {
        triggerOn: 'none',
        position: function (pt) {
            return [pt[0], 130];
        }
    },
    toolbox: {
        left: 'center',
        itemSize: 25,
        top: 55,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {}
        }
    },
    color:['#589edc','#c16848'],
    xAxis: {
        type: 'time',
        // boundaryGap: [0, 0],
        axisPointer: {
            value: '2016-10-7',
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.8,
                width: 2
            },
            label: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('yyyy-MM-dd', params.value);
                },
                backgroundColor: '#c16848'
            },
            handle: {
                show: true,
                color: '#c16848'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            inside: true,
            formatter: '{value}\n'
        },
        z: 10
    },
    grid: {
        top: 110,
        left: 15,
        right: 15,
        height: 160
    },
    dataZoom: [{
        type: 'inside',
        throttle: 50
    }],
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#c16848'
                }
            },
            stack: 'a',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8ec6ad'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
            data: data
        },
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#d68262'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d68262'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
            data: data2
        }

    ]
};
a3.setOption(option);
$(window).resize(function(){
    a3.resize();
})





$(function () {

    echart_map();

    // echart_map中国地图
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('maps1'));

        var mapName = 'china'
        var data = []
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        var geoCoordMap = {
            '福州': [119.4543, 25.9222],
            '长春': [125.8154, 44.2584],
            '重庆': [107.7539, 30.1904],
            '西安': [109.1162, 34.2004],
            '成都': [103.9526, 30.7617],
            '常州': [119.4543, 31.5582],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455, 28.200103],
            '上海': [121.40, 31.73],
            '内蒙古': [106.82, 39.67]
        };

        var GZData = [
            [{
                name: '长沙'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '长沙'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '长沙'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '长沙'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '长沙'
            }, {
                name: '常州',
                value: 40
            }],
            [{
                name: '长沙'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '长沙'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '长沙'
            }, {
                name: '海口',
                value: 10
            }],
            [{
                name: '长沙'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '内蒙古',
                value: 80
            }]
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['石家庄', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
             {
                    name: item[0],
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });

        option = {
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
})
