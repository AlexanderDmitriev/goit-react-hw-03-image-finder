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
  images:[/* {id: 20168462, webformatURL: 'https://pixabay.com/get/gc3aba3776d4a29685eba6f640…6b867c4c96f4132e6aa977bee67d698d01c5685bc_640.jpg', largeImageURL: 'https://pixabay.com/get/g9a9c5425f93e30bc0c46a161c…fd8bb7c586973a737da87786a5e2474733620580_1280.jpg'},
  {id: 68381844, webformatURL: 'https://pixabay.com/get/g018694317c621a19b5ebad980…5989468e05e5aa4f1518803ba0ad2c0d906b65757_640.jpg', largeImageURL: 'https://pixabay.com/get/gb4ffa6d8752fc18540572b0ab…27c3d0ec7f2e235515971c6c616e41666a6c2a8c_1280.jpg'},
  {id: 37151733, webformatURL: 'https://pixabay.com/get/g386874e1a983015759ae3a8c8…5029634c780f07edf395efec48a5ccb64463b8f3c_640.jpg', largeImageURL: 'https://pixabay.com/get/g19d4db6fb99ee600ef645c91a…8a5b8188d0b0bdc2dec02eecf9cb93e7bd5eee23_1280.jpg'}
   */],
};

 handleSearch = async (values) => {
  console.log("keyWord",values.keyWord);
  //const array=[];

  await API.getImages(values).then(response => {
    console.log("response.data.hits ",response.data.hits);
    /* this.setState({totalHits:response.data.totalHits})
    console.log("totalHits: ",response.data.totalHits); */

    /* this.setState({keyWord:values.tags});
  console.log("state.keyWord",this.state.keyWord); */

  //response.map(img => (console.log(img)));
  response.data.hits.map(img => this.setState(prevState => ({ images:[img, ...prevState.images]})));


/*     for (const iterator of response.data.hits) {
      const newImages={
        id:iterator.id,
        webformatURL: iterator.webformatURL,
        largeImageURL: iterator.largeImageURL}; 
      console.log(newImages);
      array.push(newImages);
      this.setState(prevState => ({ images:[newImages, ...prevState.images]}));
    } */
     
  }) 
  console.log("images ",this.state.images);
    //console.log("array ",array);
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
