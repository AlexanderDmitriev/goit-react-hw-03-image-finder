import React, { Component } from "react";
import {createPortal} from 'react-dom';
import {ModalOverlay,ModalContent} from './Modal.styled';

const modalRoot=document.querySelector('#modal');

class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown', this.handleEsc)
    };

    componentWillUnmount(){
        window.removeEventListener('keydown',this.handleEsc);
    };

    handleEsc = (event) =>{
        if (event.code==='Escape') {
            this.props.onClose();
        }
    };

    handleBackDrop = (event) => {
        if (event.target===event.currentTarget) {
            this.props.onClose();
        }
    };
    
    render(){
        return createPortal(
            <ModalOverlay>
                <ModalContent>
                    <img src="" alt="oops" />
                </ModalContent>
            </ModalOverlay>,
            modalRoot
    );
    }
};

export default Modal;