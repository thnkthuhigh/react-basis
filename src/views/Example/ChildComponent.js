import React from "react";

class ChildComponent extends React.Component {
  render() {
    let { name, age, address, arrJobs } = this.props;
    console.log(this.props);
    return (
      <>
        <div className="job">
          {arrJobs.map((item) => {
            return (
              <div key={item.id}>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
