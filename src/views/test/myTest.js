import React from "react";

class MyTest extends React.Component {
  handleClick = () => {
    alert("Click me!");
  };

  state = {
    name: "Thanh",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    // Cú pháp này đảm bảo `this` được ràng buộc trong handleClick
    return (
      <>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          My name is {this.state["name"]}
        </div>
        <button onClick={() => this.handleClick()}>Click me</button>
      </>
    );
  }
}

export default MyTest;
