var React = require("react");
const storage = require("../lib/storage");
var Page = require("../components/page.jsx");
var Panel = require("../components/panel.jsx");

module.exports = class JsonTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldInput:
        this.props.CustomName == "Untitled"
          ? grainObjectExample
          : JSON.stringify(this.props.savedGrains[this.props.CustomName]),
      savedName:
        this.props.CustomName == "Untitled" ? undefined : this.props.CustomName
    };
    this.handleJsonSubmit = this.handleJsonSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "name") {
      this.setState({ savedName: e.target.value });
    } else if (e.target.name === "input") {
      this.setState({ fieldInput: e.target.value });
    }
  }

  handleJsonSubmit(e) {
    e.preventDefault();
    if (!Object.keys(this.props.savedGrains).includes(this.state.savedName)) {
      this.props.getSavedGrain(this.state.fieldInput, this.state.savedName);
      window.location = "http://localhost:8080/#/reports";
    } else if (this.state.savedName == this.props.CustomName) {
      this.props.getSavedGrain(this.state.fieldInput, this.state.savedName);
      window.location = "http://localhost:8080/#/reports";
    } else {
      alert("Name must be unique. Case insensitive.");
    }
  }

  render() {
    return (
      <Panel title={this.props.CustomName}>
        <div>
          <form type="text" onSubmit={this.handleJsonSubmit}>
            <div className="form-group">
              <label>Report Name</label>
              <textarea
                className="form-control"
                rows="1"
                name="name"
                value={this.state.savedName}
                onChange={this.handleChange}
                required
              />

              <label>Report grain method entry</label>
              <textarea
                className="form-control"
                rows="6"
                name="input"
                value={this.state.fieldInput}
                onChange={this.handleChange}
              />
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </Panel>
    );
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
