import React from 'react';
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  id = this.props.match.params.id;
  componentDidMount() {
    this.props.fetchStream(this.id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} controls style={{ width: "100%" }} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
const mapStatesToProps = (states, currentProps) => {
  const { id } = currentProps.match.params;
  return { stream: states.streams[id] };
};
export default connect(mapStatesToProps, { fetchStream })(StreamShow);