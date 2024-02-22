import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: 1, title: "dev", salary: "500$" },
      { id: 2, title: "test", salary: "1000$" },
      { id: 3, title: "tt", salary: "2000$" },
    ],
  };

  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // corrected typo here
    event.preventDefault();
    console.log(this.state);
    alert(`tên của bạn là ${this.state.firstName} ${this.state.lastName}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleOnChangeFirstName}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleOnChangeLastName}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <ChildComponent
          name={this.state.firstName}
          age={this.state.lastName}
          address={"VietNam"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
