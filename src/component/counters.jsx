import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
            // selected={counter.selected}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}

        {/* we use map to avoid this view */}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
      </div>
    );
  }
}
export default Counters;
