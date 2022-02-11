import React from 'react';
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStatesToProps = (states, { match }) => {
  const stream = states.streams[match.params.id];
  return { stream };
};
export default connect(mapStatesToProps, { fetchStream })(StreamEdit);