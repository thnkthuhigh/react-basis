import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowJob = () => {
    this.setState({ showJob: !this.state.showJob });
  };

  handleOnclickDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    console.log(this.props);
    return (
      <>
        {showJob === false ? (
          <div>
            <button
              onClick={() => {
                this.handleShowJob();
              }}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job">
              {arrJobs.map((item) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}${" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => {
                  this.handleShowJob();
                }}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
