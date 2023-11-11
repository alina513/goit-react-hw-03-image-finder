import { Modal } from "components/Modal/Modal"
import css from "./ImageGallertItem.module.css"
import React from "react";
import { Component } from "react";


export class ImageGalleryItem extends Component {
    state ={
        isModalOpen: false
    }

    openModal = () => {
        this.setState({
          isModalOpen: true
        })
      }
    
      closeModal = (event) => {
        if(event.currentTarget === event.target)
        {this.setState({
          isModalOpen: false
        })}
        return
      }
      

    render() {
        const {image} = this.props;
    return (
        <li className={css.item}>
  <img src={image.webformatURL} alt="cat" className={css.image} onClick={this.openModal}/>
  {this.state.isModalOpen && (<Modal image={image.largeImageURL} closeModal={this.closeModal}/>)}
</li>
    )}
}