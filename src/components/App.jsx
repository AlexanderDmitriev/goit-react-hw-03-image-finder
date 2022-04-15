import React, { Component } from "react";
import {Searchbar} from './SearchungBar/Searchbar';

export class App extends Component{
state = {
  keyWord:'',
};

handleSearch = () => {
  console.log(this.state);
};
render(){
  return (
    <Searchbar/>
  );
}


};
