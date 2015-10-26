// 显示速度仪表盘， 
//divID为div 的id名称， chartName为图形的名称，sAngle和eAngle分别为最大和最小角度
function speedSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },
            

            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'km/h'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [80],
                tooltip: {
                    valueSuffix: ' km/h'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> km/s</span></div>'
                }
            }]

        },
    // Add some life
   function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                newVal;
       /*         inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }
        */
               // var requestURL = createXmlHttpRequest();
                requestURL = 'http://localhost:11643/Sensor/querySensorValue';
                var strSelect = "123";
                requestURL = addURLParam(requestURL, "tbim", strSelect);
                requestURL = addURLParam(requestURL, "alias", strSelect);
                console.log(requestURL);
                var xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        data = xmlhttp.responseText;
                        console.log("hello for feature2");
                        console.log(data);
                        sss = JSON.parse(xmlhttp.responseText);
                        console.log("sssssssssssssssssssssssssssssss");
                       // console.log(sss);
                        data = sss;
                        
                        var d = JSON.parse(data, function (key, value) {
                            //  console.log("key = %s", key);
                            //  console.log(" value = %s\n", value);
                            if (key == "value") {
                                return parseFloat(value);
                            }
                            return value;
                        });
                        console.log(d[0]["value"]);
                        var newValue = d[0]["value"];
                        console.log(newValue);
                       /* */
                        point.update(newValue);
                    }
                }
                xmlhttp.open("post", requestURL, true);

                xmlhttp.send();
             //   point.update(newVal);

            }, 3000);
        }
    }
 /*  */      );
    });
}


//height
function heightSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },


            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto',
                },
                title: {
                    text: 'km'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Height',
                data: [80],
                tooltip: {
                    valueSuffix: ' km'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> km</span></div>'
                }
            }]

        },
      // Add some life
   function (chart) {
       if (!chart.renderer.forExport) {
           setInterval(function () {
               var point = chart.series[0].points[0],
               newVal;
               /*         inc = Math.round((Math.random() - 0.5) * 20);
        
                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }
                */
               // var requestURL = createXmlHttpRequest();
               requestURL = 'http://localhost:11643/Sensor/querySensorValue';
               var strSelect = "123";
               requestURL = addURLParam(requestURL, "tbim", strSelect);
               requestURL = addURLParam(requestURL, "alias", strSelect);
               console.log(requestURL);
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function () {
                   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                       data = xmlhttp.responseText;
                       console.log("hello for feature2");
                       console.log(data);
                       sss = JSON.parse(xmlhttp.responseText);
                       console.log("height");
                       // console.log(sss);
                       data = sss;

                       var d = JSON.parse(data, function (key, value) {
                           //  console.log("key = %s", key);
                           //  console.log(" value = %s\n", value);
                           if (key == "value") {
                               return parseFloat(value);
                           }
                           return value;
                       });
                       console.log(d[0]["value"]);
                       var newValue = d[0]["value"];
                       console.log(newValue);
                       /* */
                       point.update(newValue);
                   }
               }
               xmlhttp.open("post", requestURL, true);

               xmlhttp.send();
               //   point.update(newVal);

           }, 3000);
       }
   }
 /*  */);
    });
    }

//acceleration
function accelerateSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },


            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'm/s'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Accleration',
                data: [80],
                tooltip: {
                    valueSuffix: ' m/s'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> m/s</span></div>'
                }
            }]

        },
     // Add some life
   function (chart) {
       if (!chart.renderer.forExport) {
           setInterval(function () {
               var point = chart.series[0].points[0],
               newVal;
               /*         inc = Math.round((Math.random() - 0.5) * 20);
        
                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }
                */
               // var requestURL = createXmlHttpRequest();
               requestURL = 'http://localhost:11643/Sensor/querySensorValue';
               var strSelect = "123";
               requestURL = addURLParam(requestURL, "tbim", strSelect);
               requestURL = addURLParam(requestURL, "alias", strSelect);
               console.log(requestURL);
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function () {
                   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                       data = xmlhttp.responseText;
                       console.log("hello for feature2");
                       console.log(data);
                       sss = JSON.parse(xmlhttp.responseText);
                       console.log("height");
                       // console.log(sss);
                       data = sss;

                       var d = JSON.parse(data, function (key, value) {
                           //  console.log("key = %s", key);
                           //  console.log(" value = %s\n", value);
                           if (key == "value") {
                               return parseFloat(value);
                           }
                           return value;
                       });
                       console.log(d[0]["value"]);
                       var newValue = d[0]["value"];
                       console.log(newValue);
                       /* */
                       point.update(newValue);
                   }
               }
               xmlhttp.open("post", requestURL, true);

               xmlhttp.send();
               //   point.update(newVal);

           }, 3000);
       }
   }
 /*  */);
    });
    }


//temperature
function temperatureSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },


            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'C'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Temperature',
                data: [80],
                tooltip: {
                    valueSuffix: ' C'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> C</span></div>'
                }
            }]

        },
    // Add some life
   function (chart) {
       if (!chart.renderer.forExport) {
           setInterval(function () {
               var point = chart.series[0].points[0],
               newVal;
               /*         inc = Math.round((Math.random() - 0.5) * 20);
        
                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }
                */
               // var requestURL = createXmlHttpRequest();
               requestURL = 'http://localhost:11643/Sensor/querySensorValue';
               var strSelect = "123";
               requestURL = addURLParam(requestURL, "tbim", strSelect);
               requestURL = addURLParam(requestURL, "alias", strSelect);
               console.log(requestURL);
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function () {
                   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                       data = xmlhttp.responseText;
                       console.log("hello for feature2");
                       console.log(data);
                       sss = JSON.parse(xmlhttp.responseText);
                       console.log("height");
                       // console.log(sss);
                       data = sss;

                       var d = JSON.parse(data, function (key, value) {
                           //  console.log("key = %s", key);
                           //  console.log(" value = %s\n", value);
                           if (key == "value") {
                               return parseFloat(value);
                           }
                           return value;
                       });
                       console.log(d[0]["value"]);
                       var newValue = d[0]["value"];
                       console.log(newValue);
                       /* */
                       point.update(newValue);
                   }
               }
               xmlhttp.open("post", requestURL, true);

               xmlhttp.send();
               //   point.update(newVal);

           }, 3000);
       }
   }
 /*  */);
    });
    }


//fuel quantity
function fuelSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },


            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: ' L'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Fuel quantity',
                data: [80],
                tooltip: {
                    valueSuffix: ' L'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> L</span></div>'
                }
            }]

        },
   // Add some life
   function (chart) {
       if (!chart.renderer.forExport) {
           setInterval(function () {
               var point = chart.series[0].points[0],
               newVal;
               /*         inc = Math.round((Math.random() - 0.5) * 20);
        
                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }
                */
               // var requestURL = createXmlHttpRequest();
               requestURL = 'http://localhost:11643/Sensor/querySensorValue';
               var strSelect = "123";
               requestURL = addURLParam(requestURL, "tbim", strSelect);
               requestURL = addURLParam(requestURL, "alias", strSelect);
               console.log(requestURL);
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function () {
                   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                       data = xmlhttp.responseText;
                       console.log("hello for feature2");
                       console.log(data);
                       sss = JSON.parse(xmlhttp.responseText);
                       console.log("height");
                       // console.log(sss);
                       data = sss;

                       var d = JSON.parse(data, function (key, value) {
                           //  console.log("key = %s", key);
                           //  console.log(" value = %s\n", value);
                           if (key == "value") {
                               return parseFloat(value);
                           }
                           return value;
                       });
                       console.log(d[0]["value"]);
                       var newValue = d[0]["value"];
                       console.log(newValue);
                       /* */
                       point.update(newValue);
                   }
               }
               xmlhttp.open("post", requestURL, true);

               xmlhttp.send();
               //   point.update(newVal);

           }, 3000);
       }
   }
 /*  */);
    });
    }


//pressure
function pressureSensor(divID, chartName, sAngle, eAngle) {
    //var divID = 'sensor1';
    $(document).ready(function () {
        chart = new Highcharts.Chart({
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                renderTo: divID
            },

            title: {
                text: chartName
            },


            pane: {
                startAngle: sAngle,
                endAngle: eAngle,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#FFF'],
                        [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                        [0, '#333'],
                        [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 200,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'pa'
                },
                plotBands: [{
                    from: 0,
                    to: 120,
                    color: '#55BF3B' // green
                }, {
                    from: 120,
                    to: 160,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 160,
                    to: 200,
                    color: '#DF5353' // red
                }]
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Temperature',
                data: [80],
                tooltip: {
                    valueSuffix: ' pa'
                },
                dataLabels: {
                    format: '<div style=";text-align:center"><span style="font-size:14px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>' +
                           '<span style="font-size:12px;color:silver"> pa</span></div>'
                }
            }]

        },
   // Add some life
   function (chart) {
       if (!chart.renderer.forExport) {
           setInterval(function () {
               var point = chart.series[0].points[0],
               newVal;
               /*         inc = Math.round((Math.random() - 0.5) * 20);
        
                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }
                */
               // var requestURL = createXmlHttpRequest();
               requestURL = 'http://localhost:11643/Sensor/querySensorValue';
               var strSelect = "123";
               requestURL = addURLParam(requestURL, "tbim", strSelect);
               requestURL = addURLParam(requestURL, "alias", strSelect);
               console.log(requestURL);
               var xmlhttp = new XMLHttpRequest();

               xmlhttp.onreadystatechange = function () {
                   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                       data = xmlhttp.responseText;
                       console.log("hello for feature2");
                       console.log(data);
                       sss = JSON.parse(xmlhttp.responseText);
                       console.log("height");
                       // console.log(sss);
                       data = sss;

                       var d = JSON.parse(data, function (key, value) {
                           //  console.log("key = %s", key);
                           //  console.log(" value = %s\n", value);
                           if (key == "value") {
                               return parseFloat(value);
                           }
                           return value;
                       });
                       console.log(d[0]["value"]);
                       var newValue = d[0]["value"];
                       console.log(newValue);
                       /* */
                       point.update(newValue);
                   }
               }
               xmlhttp.open("post", requestURL, true);

               xmlhttp.send();
               //   point.update(newVal);

           }, 3000);
       }
   }
 /*  */);
    });
    }


function VUmeter(divID) {
    $(document).ready(function () {
        chart = new Highcharts.Chart({
           
            chart: {
                type: 'gauge',
                renderTo: divID,
                plotBorderWidth: 0,
                plotBackgroundColor: {
                    linearGradient: { x1: 0, y1: 0,  },
                    stops: [
                    //    [0, '#FFF4C6'],
                    //    [0.3, '#FFFFFF'],
                    //    [1, '#FFF4C6']
                    ]
                },
                plotBackgroundImage: null,
                height: 250
            },

            title: {
                text: 'VU meter'
            },

            pane: [{
                startAngle: -45,
                endAngle: 45,
                background: null,
                center: ['50%', '145%'],
                size: 300
            }],

            tooltip: {
                enabled: false
            },

            yAxis: [{
                min: -20,
                max: 6,
                minorTickPosition: 'outside',
                tickPosition: 'outside',
                labels: {
                    rotation: 'auto',
                    distance: 20
                },
                plotBands: [{
                    from: 0,
                    to: 6,
                    color: '#C02316',
                    innerRadius: '100%',
                    outerRadius: '105%'
                }],
                pane: 0,
                title: {
                    text: 'VU<br/><span style="font-size:8px">Channel A</span>',
                    y: -40
                }
            }],

            plotOptions: {
                gauge: {
                    dataLabels: {
                        enabled: false
                    },
                    dial: {
                        radius: '100%'
                    }
                }
            },


            series: [{
                name: 'Channel A',
                data: [-20],
                yAxis: 0
            }],

            credits: {
                enabled: false
            },

        },

        // Let the music play
        function (chart) {
            setInterval(function () {
                if (chart.series) { // the chart may be destroyed
                    var left = chart.series[0].points[0],
                     //   right = chart.series[1].points[0],
                        leftVal,
                        rightVal,
                        inc = (Math.random() - 0.5) * 3;

                    leftVal = left.y + inc;
               //     rightVal = leftVal + inc / 3;
                    if (leftVal < -20 || leftVal > 6) {
                        leftVal = left.y - inc;
                    }
               //     if (rightVal < -20 || rightVal > 6) {
               //         rightVal = leftVal;
               //     }

                    left.update(leftVal, false);
                //    right.update(rightVal, false);
                    chart.redraw();
                }
            }, 500);

        }
            );


        });

}

function solidGague(divID) {
    $(document).ready(function () {
        chart = new Highcharts.Chart({

            chart: {
                type: 'solidgauge',
                renderTo: divID
            },

            title: {
                text: 'Acceleration'
            },

            pane: {
                center: ['50%', '85%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickPixelInterval: 400,
                tickWidth: 0,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                },
                min: 0,
                max: 200,
                title: {
                    text: 'acceleration'
                }
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            series: [{
                name: 'acceleration',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                           '<span style="font-size:12px;color:silver">m/s</span></div>'
                },
                
            }]
        },



        // Bring life to the dials
            function (chart) {

                setInterval(function () {
                    // Speed
                    var point,
                        newVal,
                        inc;

                    if (chart) {
                        point = chart.series[0].points[0];
                        inc = Math.round((Math.random() - 0.5) * 100);
                        newVal = point.y + inc;

                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }

                        point.update(newVal);
                    }

                }, 2000);

            }
        );
            });
    }


//XmlHttpRequest对象    
function createXmlHttpRequest() {
    if (window.ActiveXObject) { //如果是IE浏览器    
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { //非IE浏览器    
        return new XMLHttpRequest();
    }
}

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

function includeLinkStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}


function includeLinkStyle(path) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    script.async = "async";
    head.appendChild(script);
}

function createDisNode(divName) {

    requestURL = 'http://localhost:11643/Sensor/querySensorType';
    var strSelect = "123";
    requestURL = addURLParam(requestURL, "tbim", strSelect);
    requestURL = addURLParam(requestURL, "type", strSelect);
    console.log(requestURL);
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = xmlhttp.responseText;
            console.log("hello for feature2");
            console.log(data);
            sss = JSON.parse(xmlhttp.responseText);
            console.log("height");
            // console.log(sss);
            data = sss;
           
            var d = JSON.parse(data, function (key, value) {
                if (key == "tbim" || key == "alias") {
                    return parseInt(value);
                }
                return value;
            });
            console.log(d.length);
            
          for (i = 0 ; i < d.length; i++) {
              var sensorType = d[i]["sensorType"];
                var id = d[i]["tbim"] * 256 + d[i]["alias"];
                console.log("sensorType = " + sensorType);
                console.log("id = " + id);
                var iDiv = document.createElement('div');
                console.log("******************1");
                if (sensorType == "speedSensor" || sensorType == "heightSensor" || sensorType == "temperatureSensor"
                    || sensorType == "pressureSensor" || sensorType == "FuelQuantitySensor" || sensorType == "solidGague"
                    || sensorType == "accelerateSensor" || sensorType == "VUSensor") {
                    iDiv.id = id.toString();
                    iDiv.style.width = "20%";
                    iDiv.style.height = "30%";
                    iDiv.style.cssFloat = "left";
                    iDiv.style.styleFloat = "left";
                }
                else if (sensorType == "switch") {
                    iDiv.id = id.toString();
                    iDiv.style.width = "20%";
                    iDiv.style.height = "30%";
                    iDiv.style.cssFloat = "left";
                    iDiv.style.styleFloat = "left";

                    var child1 = document.createElement('div');
                    child1.id = "switch-text";
                    child1.style.height = "50%";
                    child1.style.textAlign = "center";
                    child1.innerHTML = "<p1>Switch</p1>";

                    var child2 = document.createElement('div');
                    child2.id = "swith-graph";
                    child2.style.height = "15%";
                    child2.style.textAlign = "center";
                    child2.innerHTML = " <input id=\"switch-state\" type=\"checkbox\" checked>";

                    iDiv.appendChild(child1);
                    iDiv.appendChild(child2);
                }
                // Then append the whole thing onto the body
                console.log("******************2");
                document.getElementById(divName).appendChild(iDiv);
                console.log("******************3");
                if (sensorType == "speedSensor") {
                    speedSensor(id.toString(), 'Speed', -150, 150);
                }
                else if (sensorType == "heightSensor") {
                    heightSensor(id.toString(), 'Height', -150, 150);
                }
                else if (sensorType == "temperatureSensor") {
                    temperatureSensor(id.toString(), 'Temperature', -150, 150);
                }
                else if (sensorType == "pressureSensor") {
                    pressureSensor(id.toString(), 'Pressure', -150, 150);
                }
                else if (sensorType == "FuelQuantitySensor") {
                    fuelSensor(id.toString(), 'Pressure', -150, 150);
                }
                else if (sensorType == "accelerateSensor") {
                    accelerateSensor(id.toString(), 'Pressure', -150, 150);
                }
                else if (sensorType == "VUSensor") {
                    VUmeter(id.toString());
                }
                else if (sensorType == "solidGague") {
                    solidGague(id.toString());
                }
                else if (sensorType == "switch") {
                }
                console.log("******************4");
           }

        }
        
   }
    xmlhttp.open("post", requestURL, true);

    xmlhttp.send();

/*    for (i = 0 ; i < 50; i++) {
        var sensorType = "switch"; //d[i]["sensorType"];
        var id = i;
        console.log("sensorType = " + sensorType);
        console.log("id = " + id);
        var iDiv = document.createElement('div');
        console.log("******************1");
        if (sensorType == "speedSensor" || sensorType == "heightSensor" || sensorType == "temperatureSensor"
            || sensorType == "pressureSensor" || sensorType == "FuelQuantitySensor" || sensorType == "solidGague"
            || sensorType == "accelerateSensor" || sensorType == "VUSensor") {
            iDiv.id = id.toString();
            iDiv.style.width = "20%";
            iDiv.style.height = "30%";
            iDiv.style.cssFloat = "left";
            iDiv.style.styleFloat = "left";
        }
        else if (sensorType == "switch") {
            iDiv.id = id.toString();
            iDiv.style.width = "20%";
            iDiv.style.height = "30%";
            iDiv.style.cssFloat = "left";
            iDiv.style.styleFloat = "left";

            var child1 = document.createElement('div');
            child1.id = "switch-text";
            child1.style.height = "50%";
            child1.style.textAlign = "center";
            child1.innerHTML = "<p1>Switch</p1>";

            var child2 = document.createElement('div');
            child2.id = "swith-graph";
            child2.style.height = "15%";
            child2.style.textAlign = "center";
            child2.innerHTML = "<input type=\"checkbox\" data-am-switch data-off-color=\"warning\" />";
         //   child2.innerHTML = "<input type=\"radio\" name=\"radio1\" checked class=\"switch-radio1\">";
            var child21 = document.createElement('input');
            child21.type = "radio";
            child21.name = "radio1";
           // child21.id = "switch-animate";
            child21.checked = true;
            child21.className = "switch-radio1";
           // child21.setAttribute("data - off - color", "warning");
           // child21.setAttribute("data-am-switch","");
            //    child2.innerHTML = "<input type=\"checkbox\" data-am-switch data-off-color=\"warning\" />";
           // child2.appendChild(child21);

            iDiv.appendChild(child1);
            iDiv.appendChild(child2);
        }
        // Then append the whole thing onto the body
        console.log("******************2");
        document.getElementById(divName).appendChild(iDiv);
        console.log("******************3");
        if (sensorType == "speedSensor") {
            speedSensor(id.toString(), 'Speed', -150, 150);
        }
        else if (sensorType == "heightSensor") {
            heightSensor(id.toString(), 'Height', -150, 150);
        }
        else if (sensorType == "temperatureSensor") {
            temperatureSensor(id.toString(), 'Temperature', -150, 150);
        }
        else if (sensorType == "pressureSensor") {
            pressureSensor(id.toString(), 'Pressure', -150, 150);
        }
        else if (sensorType == "FuelQuantitySensor") {
            fuelSensor(id.toString(), 'Pressure', -150, 150);
        }
        else if (sensorType == "accelerateSensor") {
            accelerateSensor(id.toString(), 'Pressure', -150, 150);
        }
        else if (sensorType == "VUSensor") {
            VUmeter(id.toString());
        }
        else if (sensorType == "solidGague") {
            solidGague(id.toString());
        }
        else if (sensorType == "switch") {
        }
        console.log("******************4");
   }
   */ 
    
}

function includeLinkStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

function includeLinkPath(path) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    script.async = "async";
    head.appendChild(script);
}

