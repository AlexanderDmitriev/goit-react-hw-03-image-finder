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
  dataFromServer:null,
  loading:false,
};

 componentDidMount(){
  /* API.getImages("cat").then(response => {
    console.log(response.data.hits);
    this.setState({totalHits:response.data.totalHits})
    console.log("this.state.totalHits: ",this.state.totalHits);
     this.setState(prevState => ({ 
      id:response.data.hits.id,
      webformatURL:response.data.hits.webformatURL,
      largeImageURL:response.data.hits.largeImageURL,
    })); 
    console.log(this.state);
  }); */
  this.setState({loading:true});
  fetch('https://pixabay.com/api/?key=25236091-8685fe5809d54541c15ad7685&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12')
  .then(res=>res.json())
  .then(dataFromServer=>this.setState({dataFromServer}))
  .finally(()=>this.setState({loading:false}));
};

handleSearch = (values) => {
  API.getImages(values).then(response => {
    console.log(response.data.hits);
    this.setState({totalHits:response.data.totalHits})
    console.log("this.state.totalHits: ",this.state.totalHits);
    /* this.setState(prevState => ({ 
      id:response.data.hits.id,
      webformatURL:response.data.hits.webformatURL,
      largeImageURL:response.data.hits.largeImageURL,
    })); */
    console.log(this.state);
  }) 
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
