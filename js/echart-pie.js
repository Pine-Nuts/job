 // 路径配置
 require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/pie' // 使用饼状图就加载pie模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('container'));
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        };
        var placeHolderStyle = {
            normal: {
                color: 'rgba(0,0,0,0)',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            title: {
                text: 'skills',
                x: 'center',
                y: 'center',
                itemGap: 20,
                textStyle: {
                    color: 'rgba(30,144,255,0.8)',
                    fontFamily: '微软雅黑',
                    fontSize: 35,
                    fontWeight: 'bolder'
                }
            },
            tooltip: {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y: 'center',
                itemGap: 12,
                data: ['jQuery', 'HTML5', 'CSS', 'JavaScript', 'Vue']
            },
            series: [{
                    name: '1',
                    type: 'pie',
                    clockWise: false,
                    radius: [170, 199],

                    hoverAnimation: false,
                    itemStyle: dataStyle,
                    data: [{
                            value: 85,
                            name: 'jQuery'
                        },
                        {
                            value: 15,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }
                    ]
                }, {
                    name: '2',
                    type: 'pie',
                    clockWise: false,
                    radius: [140, 165],
                    itemStyle: dataStyle,
                    data: [{
                            value: 80,
                            name: 'HTML5'
                        },
                        {
                            value: 20,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }
                    ]
                },
                {
                    name: '3',
                    type: 'pie',
                    clockWise: false,
                    radius: [110, 135],
                    itemStyle: dataStyle,
                    data: [{
                            value: 65,
                            name: 'CSS'
                        },
                        {
                            value: 35,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }
                    ]
                },
                {
                    name: '4',
                    type: 'pie',
                    clockWise: false,
                    radius: [80, 105],
                    itemStyle: dataStyle,
                    data: [{
                            value: 70,
                            name: 'JavaScript'
                        },
                        {
                            value: 30,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }
                    ]
                },
                {
                    name: '5',
                    type: 'pie',
                    clockWise: false,
                    radius: [50, 75],
                    itemStyle: dataStyle,
                    data: [{
                            value: 70,
                            name: 'Vue'
                        },
                        {
                            value: 30,
                            name: 'invisible',
                            itemStyle: placeHolderStyle
                        }
                    ]
                }
            ]
        };


        // 为echarts对象加载数据 
        myChart.setOption(option);
    }
);