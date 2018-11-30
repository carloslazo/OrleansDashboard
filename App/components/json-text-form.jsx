var React = require("react");
const storage = require("../lib/storage");
var Page = require("../components/page.jsx");
var Panel = require("../components/panel.jsx");

module.exports = class JsonTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldInput:
        this.props.customName == "untitled"
          ? grainObjectExample
          : JSON.stringify(
              this.props.savedGrains[this.props.customName].fieldInput
            ),
      savedName:
        this.props.customName == "untitled"
          ? "untitled"
          : this.props.savedGrains[this.props.customName].reportName,
      previousName:
        this.props.customName == "untitled"
          ? "untitled"
          : this.props.savedGrains[this.props.customName].reportName
    };
    this.handleJsonSubmit = this.handleJsonSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "report-name") {
      this.setState({ savedName: e.target.value });
    } else if (e.target.name === "input") {
      this.setState({ fieldInput: e.target.value });
    }
  }

  handleJsonSubmit(e) {
    e.preventDefault();
    let slugedName = slugify(this.state.savedName);
    if (!Object.keys(this.props.savedGrains).includes(slugedName)) {
      this.props.getSavedGrain(
        this.state.fieldInput,
        this.state.savedName,
        slugedName
      );
    } else if (slugedName == this.props.customName) {
      this.props.getSavedGrain(
        this.state.fieldInput,
        this.state.savedName,
        slugedName
      );
    } else {
      alert("Name must be unique.");
    }
  }

  render() {
    return (
      <Panel title={this.state.previousName}>
        <div>
          <form type="text" onSubmit={this.handleJsonSubmit}>
            <div className="form-group">
              <label>Report Name</label>
              <textarea
                className="form-control"
                rows="1"
                name="report-name"
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
function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
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
