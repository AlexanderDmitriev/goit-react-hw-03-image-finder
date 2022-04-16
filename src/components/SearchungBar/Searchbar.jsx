import React from "react";
import { Formik } from 'formik';
import {HeaderBar,SearchForm,SearchFormButton, SearchFormButtonLabel,SearchFormInput} from './Searchbar.styled';
//import {SearchForm,SearchFormButton} from './SearchingForm';
import { BiSearchAlt2 } from 'react-icons/fa';

const initialValues={keyWord:''};


const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, {resetForm}) => { 
        onSubmit(values);
        resetForm(); 
  };

        return (
            <HeaderBar>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <SearchForm>
                        <SearchFormButton type="submit">
                            <span className="button-label">Search</span>
                        </SearchFormButton>

                        <SearchFormInput
                            name="keyWord"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                        />
                    </SearchForm>
                </Formik>
            </HeaderBar>
        );
}

export default Searchbar;