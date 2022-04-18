import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';
import {Spinner} from './App.styled';

export class App extends Component{
state = {
  largeImageURL:'',
  loading:false,
  images:[],
};

 handleSearch = async (values) => {
  this.setState({loading:true});
  setTimeout(() => {
     API.getImages(values).then(response => {
      this.setState({loading:false});
      console.log("response.data.hits ",response.data.hits);
      this.setState({ images:response.data.hits });
    })
  }, 1000);
};


render(){
  const {images, loading} = this.state;

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        {(images.length>0)&&<ImageGallery imagesForGallery={images}/>}
        {(loading)&&<Spinner size={125} thickness={100} speed={100} color="#3f51b5"/>}
        
      </Container>
    </>
  );
}


};
