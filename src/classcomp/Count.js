import React from "react";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start
    };
  }

  addOne() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  render() {
    const above = <h1> It's 10 or above </h1>;
    const below = <h1> It's below 10 </h1>;

    let result;

    if (this.state.count < 10) {
      result = below;
    } else {
      result = above;
    }

    return (
      <>
        {result}
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addOne()}>Add One</button>
      </>
    );
  }
}

export default Count;
