import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponents from "./AddComponents";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "dev", salary: "500" },
      { id: 2, title: "test", salary: "1000" },
      { id: 3, title: "tt", salary: "2000" },
    ],
  };

  addNewJob = (job) => {
    // let currentJob = this.state.arrJobs;
    // currentJob.push(job);
    this.setState({
      // arrJobs: currentJob,
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    return (
      <>
        <AddComponents addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
