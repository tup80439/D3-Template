import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function getData() {
  let data = [];
  for (let i = 0; i < 10; i++) {
    let itemSize = Math.ceil(Math.random() * 5) * 10;
    data.push(itemSize);
  }
  return data;
}

function update(data) {
  d3.select("#vis")
    .selectAll("circle")
    .data(data)
    .join(
      function (enter) {
        return enter
          .append("circle")
          .style("opacity", 0.3)
          .style("fill", "orange");
      },
      function (update) {
        return update
          .style("opacity", 1)
          .style("fill", "orange");
      }
    )
    .attr("cx", (d, i) => i * 100 + 50)
    .attr("cy", 80)
    .attr("r", d => d * 0.5);
}

function updateAll() {
  update(getData());
}

updateAll();

d3.select("#btn").on("click", updateAll);
