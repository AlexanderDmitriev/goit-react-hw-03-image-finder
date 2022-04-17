import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';

export class App extends Component{
state = {
  keyWord:'',
  id:'',
  webformatURL:'',
  largeImageURL:'',
  totalHits:0,
  dataFromServer:null,
  loading:false,
  images:[],
};

 handleSearch = async (values) => {
  console.log("keyWord",values.keyWord);

  await API.getImages(values).then(response => {
    console.log("response.data.hits ",response.data.hits);
    this.setState({totalHits:response.data.totalHits})
    console.log("totalHits: ",response.data.totalHits);

    this.setState({keyWord:values});
  console.log("state.keyWord",this.state.keyWord);

  //response.map(img => (console.log(img)));
    for (const iterator of response.data.hits) {
      const newImages={
        id:iterator.id,
        webformatURL: iterator.webformatURL,
        largeImageURL: iterator.largeImageURL}; 
      this.setState(prevState => ({ images:[newImages, ...prevState.images]}));
    }

     
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
        {(this.state.dataFromServer)&&<ImageGallery/>}
        {(this.state.loading)&&<h1>Loading</h1>}
        
      </Container>
    </>
  );
}


};
