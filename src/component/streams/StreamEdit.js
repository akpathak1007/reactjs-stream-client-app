import React from 'react';
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  id = this.props.match.params.id;
  componentDidMount() {
    this.props.fetchStream(this.id);
  }
  onSubmit= (formValues) => {
    this.props.editStream(this.id, formValues);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
      </div>
    );
  }
}

const mapStatesToProps = (states, currentProps) => {
  const { id } = currentProps.match.params;
  const stream = states.streams[id];


  return { stream };
};
export default connect(mapStatesToProps, { fetchStream, editStream })(StreamEdit);