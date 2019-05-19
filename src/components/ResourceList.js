import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  state = { resources: [] };

  // the reason that when we click on Todos button the component will be re rendered but componentDidMount lifecycle is going to be called in the second time
  // if the component re-rendered as the component is mounted by a re-rendering is not meaning that the component has been re-mounted
  // to solve this issue we need to use another lifecycle called componentDidUpdate
  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
