var React = require("react");
const GrainGraph = require("./grain-graph.jsx")
// add multiple axis to the chart
// https://jsfiddle.net/devonuto/pa7k6xn9/
module.exports = class MultipleGrainGraphs extends React.Component {
    renderEmpty() {
        return <span>No messages recorded</span>
    }

    renderGraphs() {
        return(
                    <div>
                        <span><strong style={{color:"#783988",fontSize:"25px"}}>/</strong> number of requests per second<br/><strong style={{color:"#EC1F1F",fontSize:"25px"}}>/</strong> failed requests</span>
                        <span className="pull-right"><strong style={{color:"#EC971F",fontSize:"25px"}}>/</strong> average latency in milliseconds</span>
                        {mapGrainStats(this.props.grainStats, )}
                    </div>
            )
    }

    render(){
        if (Object.keys(this.props.grainStats).length === 0) return this.renderEmpty();
        return this.renderGraphs()
    }
};

function getName(value) {
    var parts = value.split(".");
    return parts[parts.length - 1];
}

function mapGrainStats(grainStats) {
  return(

    Object.keys(grainStats)
      .sort()
      .map(key =>
        Object.keys(grainStats[key]).map(x => (
          <GrainGraph
            stats={grainStats[key][x]}
            grainMethod={getName(x)}
          />
        ))
      )
  )

}
