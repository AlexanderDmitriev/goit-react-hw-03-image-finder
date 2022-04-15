import React, { Component } from "react";
import { Formik } from 'formik';
import {HeaderBar,SearchForm,SearchFormButton, SearchFormButtonLabel,SearchFormInput} from './Searchbar.styled';
//import {SearchForm,SearchFormButton} from './SearchingForm';
import { BiSearchAlt2 } from 'react-icons/fa';

const initialValues={keyWord:''};


export class Searchbar extends Component {
    handleSubmit = (values, {resetForm}) => { 
        /* this.props.onSubmit(values); */
        console.log(values);
        resetForm(); 
  };

    render(){
        return (
            <HeaderBar>
                <Formik
                    initialValues={initialValues}
                    onSubmit={this.handleSubmit}
                >
                    <SearchForm>
                        <SearchFormButton type="submit">
                            <span className="button-label">Search</span>
                        </SearchFormButton>

                        <SearchFormInput
                            name="keyWord"
                            className="input"
                            type="text"
                            autocomplete="off"
                            autofocus
                            placeholder="Search images and photos"
                        />
                    
                    </SearchForm>
                </Formik>
            </HeaderBar>
        );
    }
        
    
}