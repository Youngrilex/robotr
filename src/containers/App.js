import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import "./App.css";
import MOCK_DATA from '../MOCK_DATA (2).json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    this.setState({ robots: MOCK_DATA });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name && robots.username
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="bg-gradient-to-r from-[#0f766e] to-[#172554] -mt-4">
        <div className="flex flex-col items-center pt-12">
        <h1 className="flex items-center text-[40px] sm:text-[70px]">rilexfriends</h1>
        <SearchBox searchChange={this.onSearchChange} /></div>
        <Scroll className="flex">
        <CardList robots={filteredRobots} /> 
         </Scroll>
      </div>
    );
  }
}

export default App;
