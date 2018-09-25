var React = require("react");
const storage = require("../lib/storage");

module.exports = class SavedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapSavedObjects() {
    return Object.keys(this.props.savedGrains).map(key => {
      return (
        <div key={key}>
          <h3 key={key}>{key}</h3>
          <a href={`#/reports/${key}`}>View {key}</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>
          <a href={`#/reports/json`}>Add New</a>
        </h1>
        {this.mapSavedObjects()}
      </div>
    );
  }
};
