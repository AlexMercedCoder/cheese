import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={(event) => this.handleChange(event)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
