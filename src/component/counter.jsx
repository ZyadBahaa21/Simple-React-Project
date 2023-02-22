import React, { Component } from "react";

export default class Counter extends Component {
  // The state is the something thant contains information or data about componant

  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  // this constructor to solve the problem that occure when use this keyword with events
  // and we can solve this problem without constructor just we use arrow function
  // constructor() {
  //   super();
  //   this.incrementHandle = this.incrementHandle.bind(this);
  // }

  //  this function that use with the constructor
  // incrementHandle() {
  //   console.log("increment clicked", this);
  // }

  //  this function that use without constructor (arrow function)

  // incrementHandle = (ev) => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doIncrementHandle = () => {
  //   this.incrementHandle({ id: 1 });
  // };
  render() {
    // we can delete this line by call the function directly in span
    // let classes = this.getBadgeClasses();

    return (
      <div>
        {/* {this.props.children} */}
        {/* But the two element in the div to avoid the error */}
        {/* <img src={this.state.imageUrl} /> */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary bt-sm"
          style={{ margin: "5px" }}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* this part to learn about rendering list */}
        {/* <ul> */}
        {/*  here in map i told him take every element in array and immplement this (between map parantecess) to it */}
        {/* {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))} */}
        {/* </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    // return this.state.value === 0 ? "Zero" : this.state.value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
