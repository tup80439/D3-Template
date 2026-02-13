import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function createVisualization() {

  d3.csv("./cars.csv").then((data) => {

    // hwy -> number
    data.forEach(d => {
      d.hwy = +d.hwy;
    });

    // SCALE
    const scale = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, 1400]);

    const axis = d3.axisBottom(scale);

    // join
    d3.select("#vis")
      .selectAll("circle")
      .data(data)
      .join(
        function (enter) {
          return enter
            .append("circle")
            .style("opacity", 0.3)
            .style("fill", "steelblue");
        },
        function (update) {
          return update
            .style("opacity", 1);
        }
      )
      .attr("cx", (d, i) => scale(i))
      .attr("cy", 60)
      .attr("r", d => d.hwy * 0.5);

    // delete old axis after multiple clicks
    d3.select("#vis").selectAll(".axis").remove();

    // new axis
    d3.select("#vis")
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,100)")
      .call(axis);
  });
}

d3.select("#btn").on("click", createVisualization);
