import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';

//let totalHits=0;

export class App extends Component{
state = {
  keyWord:'',
  id:'',
  webformatURL:'',
  largeImageURL:'',
  totalHits:0,
  data:null,
};

handleSearch = (values) => {
  API.getImages(values).then(response => {
    console.log(response.data.hits);
    this.setState({totalHits:response.data.totalHits})
    console.log(this.state.totalHits);
    /* this.setState(prevState => ({ 
      id:response.data.hits.id,
      webformatURL:response.data.hits.webformatURL,
      largeImageURL:response.data.hits.largeImageURL,
    })); */
    console.log(this.state);
  })
};

dataMaker = (values) => {

};

render(){
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        {(this.state.totalHits>0)&&<ImageGallery/>}
        
      </Container>
    </>
  );
}


};
