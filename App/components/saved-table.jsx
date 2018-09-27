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
    return Object.keys(this.props.savedGrains).map(key => {
      return (
        <div key={key}>
          <h3>{key}</h3>
          <a onClick={this.handleDelete} name={key}>
            Delete {key}
          </a>
          <br />
          <a href={`/#/reports/${key}/json`}>Edit {key}</a>
          <br />
          <a href={`#/reports/${key}`}>View {key}</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>
          <a href={`#/reports/Untitled/json`}>Add New</a>
        </h1>
        {this.mapSavedObjects()}
      </div>
    );
  }
};
