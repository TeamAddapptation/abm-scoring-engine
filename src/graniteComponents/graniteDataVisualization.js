export default function graniteDataVisualization(jsonBlock) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  /*---------------------------------------------
    Format Data
    ---------------------------------------------*/
  console.log("json", jsonBlock);
  let chartDataArr = [];
  r.forEach((r, index) => {
    chartDataArr.push(r.value);
  });

  /*---------------------------------------------
    Anychart
    ---------------------------------------------*/
  // create data set on our data
  var dataSet = anychart.data.set(chartDataArr);

  /*---------------------------------------------
    Dynamic Object
    ---------------------------------------------*/
  let dataObj = {};
  let seriesCount = chartDataArr[0].length - 1;
  for (let i = 0; i < seriesCount; i++) {
    let seriesName = o.key[i];
    dataObj[seriesName] = {};
    dataObj[seriesName].data = dataSet.mapAs({ x: 0, value: i + 1 });
  }

  // create line chart
  var chart = anychart.line();

  // turn on chart animation
  chart.animation(true);

  // set chart padding
  chart.padding([0, 0, 0, 0]);

  // turn on the crosshair
  chart.crosshair().enabled(false).yLabel(false).yStroke(null);

  // enable minor grids
  chart.yMinorGrid().enabled(false);

  // set yAxis title
  chart.yAxis().enabled(false);
  chart.xAxis().labels().padding(5);

  chart.padding(20);

  chart.xScale().mode("continuous");

  Object.entries(dataObj).forEach((series, index) => {
    const [key, value] = series;
    let seriesBuild = chart.line(dataObj[key].data);
    seriesBuild.name(key);
    var mark = seriesBuild.markers();
    mark.addEventListener("click", (e) => {
      console.log(series);
    });
    seriesBuild;
    seriesBuild.hovered().markers().enabled(true).type("circle").size(4);
    seriesBuild.selected().markers().enabled(true).type("circle").size(4);
    // seriesBuild.fill(o.stroke_colors[index]);
    seriesBuild.stroke(o.stroke_colors[index], 2);
  });

  // tooltip
  chart.tooltip().title().fontColor("#5d5d5d");
  chart.tooltip().background().fill("#ffffff").stroke("#eaeaea");
  chart.tooltip().fontColor("#5d5d5d");

  // turn the legend on
  chart.legend().enabled(o.legend);
  chart.legend().fontColor("#5d5d5d");
  chart.legend().align("right");

  var credits = chart.credits();
  credits.enabled(false);
  // set container id for the chart
  chart.container(granite_div);
  // initiate chart drawing
  chart.draw();
}
