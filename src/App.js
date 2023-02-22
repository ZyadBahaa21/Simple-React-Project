// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  incrementHandle = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  resetHandle = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  deleteHandle = (counterID) => {
    console.log("Delete num", counterID);
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="cotainer">
          <Counters
            counters={this.state.counters}
            onReset={this.resetHandle}
            onIncrement={this.incrementHandle}
            onDelete={this.deleteHandle}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
