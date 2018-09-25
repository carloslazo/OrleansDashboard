var React = require("react");
const storage = require("../lib/storage");
let objectTwo = {
  "OrleansDashboard.DashboardGrain": [
    "orleansDashboard.DashboardGrain.GetCounters",
    "orleansDashboard.DashboardGrain.GetGrainTracing"
  ],
  "TestGrains.TestGrain": [
    "testGrains.TestGrain.ExampleMethod1",
    "testGrains.TestGrain.ExampleMethod2"
  ]
};

objectTwo = JSON.stringify(objectTwo);
module.exports = class JsonTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fieldInput: objectTwo, savedName: "" };
    this.handleJsonSubmit = this.handleJsonSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleJsonSubmit(e) {
    e.preventDefault();
    this.props.getSavedGrain(this.state.fieldInput, this.state.savedName);
    window.location = "http://localhost:8080/#/reports";
  }
  handleChange(e) {
    if (e.target.name === "JSON") {
      this.setState({ fieldInput: e.target.value });
    } else if (e.target.name === "name") {
      this.setState({ savedName: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <form type="text" onSubmit={this.handleJsonSubmit}>
          <div className="form-group">
            <label>Input Name</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              name="name"
              onChange={this.handleChange}
            />

            <label>Reports data entry</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              name="JSON"
              value={this.state.fieldInput}
              onChange={this.handleChange}
            />
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
};
