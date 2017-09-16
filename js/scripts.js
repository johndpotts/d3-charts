var data = [{name:"tomatoes",number:8},{name:"peppers",number:10},{name:"squash",number:7},{name:"cucumbers",number:13},{name:"eggplant",number:6}];

    var width = 200,
        scaleFactor = 10,
        barHeight = 20;

    var graph = d3.select(".myChart").append("svg").attr("width", width).attr("height", barHeight * data.length);

    var bar = graph.selectAll("g").data(data).enter().append("g").attr("transform", function(d, i) {return "translate(0," + i * barHeight + ")";
                  });

    bar.append("rect")
       .attr("width", function(d) {return d.number * scaleFactor;}).attr("height", barHeight - 1);

    bar.append("text").attr("x", function(d) { return ((d.number-1)*scaleFactor); }).attr("y", barHeight / 2).attr("dy", ".35em").text(function(d) { return d.name + " " + d.number; });
