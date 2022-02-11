import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  /*  Create Stream button for logged in user */
  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="text-end">
          <Link
            to="/streams/new"
            className="btn btn-primary "
            role="button"
          >
            Create Stream
          </Link>
        </div>
      );
    }
  };
  /* Edit and delete button for logged in user*/
  renderButtons = (userId, id ) => {
    if (
      this.props.currentUserId !== null &&
      this.props.currentUserId === userId
    ) {
      return (
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link className="btn btn-primary" to={`/streams/edit/${id}`}>Edit</Link>
          <Link className="btn btn-danger" to={`/streams/delete/${id}`}>Delete</Link>
        </div>
      );
    } else {
      return null;
    }
  };
  renderList = () => {
    const items = this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="list-group-item">
          <div className="row">
            <div className="col-1">
              <i className="bi bi-camera-fill fs-1"></i>
            </div>
            <div className="col-11 row ">
              <div className="col-10">
                <h6>{stream.title}</h6>
                <p>{stream.description}</p>
              </div>
              {this.renderButtons(stream.userId, stream.id)}
            </div>
          </div>
        </div>
      );
    });
    return <ul className="list-group list-group-flush overflow-scroll"> {items}</ul>;
  };
  render() {
    return (
      <div className="container vh-100 overflow-scroll">
        {this.renderList()}
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (states) => {
  const { userId, isSignedIn } = states.auth;
  return {
    streams: Object.values(states.streams),
    currentUserId: userId,
    isSignedIn: isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
