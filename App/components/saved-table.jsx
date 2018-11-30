var React = require("react");
const storage = require("../lib/storage");

module.exports = class SavedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteGrain(e.target.name);
  }

  mapSavedObjects() {
    return Object.keys(this.props.savedGrains).map(x => {
      return (
        <div key={x}>
          <h3>{this.props.savedGrains[x].reportName}</h3>
          <a onClick={this.handleDelete} name={x}>
            Delete {x}
          </a>
          <br />
          <a href={`/#/reports/${x}/json`}>Edit {x}</a>
          <br />
          <a href={`#/reports/${x}`}>View {x}</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>
          <a href={`#/reports/untitled/json`}>Add New</a>
        </h1>
        {this.mapSavedObjects()}
      </div>
    );
  }
};
