import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

d3.csv("movie_metadata.csv").then((data)=>{
    console.log(data)
})

