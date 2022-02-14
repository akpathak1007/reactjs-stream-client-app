import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";

import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";
class StreamDelete extends React.Component {
  id = this.props.match.params.id;
  componentDidMount() {
    this.props.fetchStream(this.id);
  }
  onDeleteStream = () => {
    this.props.deleteStream(this.id);
  };
  rendeAaction = (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-danger me-3"
        onClick={this.onDeleteStream}
      >
        Delete
      </button>
    </React.Fragment>
  );
  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return (
      <>
        Are you sure you want to delete this stream with title:{" "}
        <b> {this.props.stream.title}</b>
      </>
    );
  };
  render() {
    return (
      <div>
        <Modal
          title={"Delete Stream"}
          content={this.renderContent()}
          action={this.rendeAaction}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStatesToProps = (states, currentProps) => {
  const { id } = currentProps.match.params;
  return { stream: states.streams[id] };
};
export default connect(mapStatesToProps, { deleteStream, fetchStream })(
  StreamDelete
);
