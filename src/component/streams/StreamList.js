import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import './StreamList.css';
import history from "../../history";

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
  renderButtons = (userId, id) => {
    const stopEventBubbling = (e) => {
      e.stopPropagation();
    }
    if (
      this.props.currentUserId !== null &&
      this.props.currentUserId === userId
    ) {
      return (
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link onClick={stopEventBubbling} className="btn btn-primary me-2" to={`/streams/edit/${id}`}>Edit</Link>
          <Link onClick={stopEventBubbling} className="btn btn-danger" to={`/streams/delete/${id}`}>Delete</Link>
        </div>
      );
    } else {
      return null;
    }
  };
  renderList = () => {
    const items = this.props.streams.map((stream) => {
      const { id, userId } = stream;
      return (
        <li onClick={()=>history.push(`/streams/${id}`)}  key={id} className="list-group-item hover">
          <div className="row">
            <div className="col-1">
              <i className="bi bi-camera-fill fs-1"></i>
            </div>
            <div className="col-11 row ">
              <div className="col-10">
                <h6>{stream.title}</h6>
                <p>{stream.description}</p>
              </div>
              {this.renderButtons(userId, id)}
            </div>
          </div>
        </li>
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
