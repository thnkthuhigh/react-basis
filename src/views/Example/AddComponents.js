import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleOnChangeFirstName = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Please enter a title and a salary");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1100),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Job's:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleOnChangeFirstName}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={this.handleOnChangeLastName}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default AddComponents;
