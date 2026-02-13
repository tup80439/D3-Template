import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = [
  { name: "London",  population: 8674000 },
  { name: "New York", population: 8406000 },
  { name: "Sydney",  population: 4293000 },
  { name: "Paris",   population: 2244000 },
  { name: "Beijing", population: 11510000 }
];

// side length based on population
const size = d => (+d.population / 1000000) * 2; // tweak multiplier if you want

let g = d3.select("#vis")
  .selectAll("rect")
  .data(data)
  .join("rect");

g.attr("fill", "steelblue")
  .attr("width", d => size(d))
  .attr("height", d => size(d))
  // x/y are top-left corner, so we position squares with spacing
  .attr("x", (d, i) => 50 * i)
  .attr("y", (d, i) => 50 * i);

g.attr("transform", "translate(50,50)");
