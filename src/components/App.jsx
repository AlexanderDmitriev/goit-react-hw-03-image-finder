import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';

export class App extends Component{
state = {
  id:'',
  webformatURL:'',
  largeImageURL:'',
  loading:false,
  images:[],
};

 handleSearch = async (values) => {
  console.log("keyWord",values.keyWord);

  await API.getImages(values).then(response => {
    console.log("response.data.hits ",response.data.hits);

  response.data.hits.map(img => 
    this.setState(prevState => ({ images:[img, ...prevState.images]})));

/*      for (const iterator of response.data.hits) {
      const newImages={
        id:iterator.id,
        webformatURL: iterator.webformatURL,
        largeImageURL: iterator.largeImageURL}; 
      console.log(newImages);
      this.setState(prevState => ({ images:[newImages, ...prevState.images]}));
    }  */
     
  }) 
  console.log("images ",this.state.images);
  console.log("state ",this.state);
};

render(){
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        {(this.state.images.length>0)&&<ImageGallery imagesForGallery={this.state.images}/>}
        {(this.state.loading)&&<h1>Loading</h1>}
        
      </Container>
    </>
  );
}


};
