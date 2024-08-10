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
    const filteredRobots = this.state.robots.filter(({ name, username }) => {
      const searchTerm = this.state.searchfield.toLowerCase();
      return (name && name.toLowerCase().includes(searchTerm)) ||
        (username && username.toLowerCase().includes(searchTerm));
    });


    return (
      <div className="bg-gradient-to-r from-[#0f766e] to-[#172554]">
        <div className="background"> <h1 className="animated-title">ROBO VAULT</h1></div>
        {/* <img className="background" src={funRobotCharacter} alt="nill"/> */}
        <div className="flex flex-col items-center py-6">
          <SearchBox searchChange={this.onSearchChange} /></div>
        <Scroll className="flex">
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>

    );
  }
}

export default App;
