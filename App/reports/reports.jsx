var React = require("react");

const Panel = require("../components/panel.jsx");
const Page = require("../components/page.jsx");

const MultipleGrainGraphs = require("../components/multiple-grain-graphs.jsx");
module.exports = class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page title={this.props.title}>
    <Panel title="Method Profiling">
      <MultipleGrainGraphs
        grainStats={this.props.grainStats}
        savedGrainReport={this.props.savedGrainReport}
      />
    </Panel>
    </Page>
    );
  }
};
