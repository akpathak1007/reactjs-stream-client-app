import React from 'react';
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  id = this.props.match.params.id;
  componentDidMount() {
    this.props.fetchStream(this.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
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