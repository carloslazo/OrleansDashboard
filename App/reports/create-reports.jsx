var React = require("react");
const storage = require("../lib/storage");
const JsonTextForm = require("../components/json-text-form.jsx");

module.exports = class CreateReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return ( <JsonTextForm getSavedGrain={this.props.getSavedGrain} CustomName={this.props.CustomName} savedGrains={this.props.savedGrains} grainObjectExample={grainObjectExample}/>
    )
  }
};





let grainObjectExample = {
  "OrleansDashboard.DashboardGrain": [
    "orleansDashboard.DashboardGrain.GetCounters",
    "orleansDashboard.DashboardGrain.GetGrainTracing"
  ],
  "TestGrains.TestGrain": [
    "testGrains.TestGrain.ExampleMethod1",
    "testGrains.TestGrain.ExampleMethod2"
  ]
};

grainObjectExample = JSON.stringify(grainObjectExample);




this.props.CustomName == "default"
  ? grainObjectExample
  : JSON.stringify(this.props.savedGrains[this.props.CustomName])

  this.props.CustomName == "default" ? "": this.props.CustomName
