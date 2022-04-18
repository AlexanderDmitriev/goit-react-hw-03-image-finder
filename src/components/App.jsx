import React, { Component } from "react";
import Searchbar from './SearchungBar';
import ImageGallery from './Gallery';
import * as API from './servicies/api';
import {Container} from './App.styled';
import GlobalStyle from '../GlobalStyle';
import {Spinner} from './App.styled';

export class App extends Component{
state = {
  keyWord:'',
  largeImageURL:'',
  loading:false,
  images:[],
  page:1,
};

 handleSearch = async (values) => {
  this.setState({loading:true, keyWord:values,page:1});
     API.getImages(values,1).then(response => {
      this.setState({loading:false, images:response.data.hits });
    })
  
};

loadMoreHandler = async () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
  this.setState({loading:true});
    API.getImages(this.state.keyWord,this.state.page+1)
    .then(response => this.setState
      (prevState =>({loading:false, images:[...prevState.images, ...response.data.hits] })));
};


render(){
  const {images, loading} = this.state;

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Searchbar onSubmit={this.handleSearch}/>
        {(images.length>0)&&<ImageGallery imagesForGallery={images} buttonHandler={this.loadMoreHandler}/>}
        {(loading)&&<Spinner size={125} thickness={100} speed={100} color="#3f51b5"/>}
      </Container>
    </>
  );
}


};
