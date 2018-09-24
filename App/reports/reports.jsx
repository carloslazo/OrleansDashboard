var React = require("react");
const MultipleGrainGraphs = require("../components/multiple-grain-graphs.jsx")
module.exports = class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MultipleGrainGraphs grainStats={this.props.grainStats} grainStatsTest={this.props.grainStatsTest}/>
  }
};
