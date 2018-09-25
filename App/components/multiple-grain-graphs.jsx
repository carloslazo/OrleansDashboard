var React = require("react");
const GrainGraph = require("./grain-graph.jsx");
// add multiple axis to the chart
// https://jsfiddle.net/devonuto/pa7k6xn9/
module.exports = class MultipleGrainGraphs extends React.Component {
  renderEmpty() {
    return <span>No messages recorded</span>;
  }
  mapGrainStats() {
    return Object.keys(this.props.grainStats)
      .sort()
      .map(grainType =>
        Object.keys(this.props.grainStats[grainType]).map(grainMethod => {
          if (this.props.savedGrainReport[grainType].includes(grainMethod)) {
            return (
              <GrainGraph
                stats={this.props.grainStats[grainType][grainMethod]}
                grainMethod={getName(grainMethod)}
              />
            );
          }
        })
      );
  }

  renderGraphs() {
    return (
      <div>
        <span>
          <strong style={{ color: "#783988", fontSize: "25px" }}>/</strong>{" "}
          number of requests per second<br />
          <strong style={{ color: "#EC1F1F", fontSize: "25px" }}>/</strong>{" "}
          failed requests
        </span>
        <span className="pull-right">
          <strong style={{ color: "#EC971F", fontSize: "25px" }}>/</strong>{" "}
          average latency in milliseconds
        </span>
        {this.mapGrainStats()}
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.grainStats).length === 0)
      return this.renderEmpty();
    return this.renderGraphs();
  }
};

function getName(value) {
  var parts = value.split(".");
  return parts[parts.length - 1];
}
