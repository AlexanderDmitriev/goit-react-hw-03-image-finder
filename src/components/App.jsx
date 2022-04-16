import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';

export class App extends Component{
state = {
  keyWord:'',
};

handleSearch = (values) => {
  console.log(values);
};
render(){
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        <ImageGallery/>
      </Container>
    </>
  );
}


};
