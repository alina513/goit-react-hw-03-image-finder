import React from 'react';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImagesWithQuery } from 'helpers/helpers';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    loading: false,
    error: false,
    
  };

  

  addPhoto = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
    });
  };


  onButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    )
    try {
        this.setState({ loading: true, error:false });
        const photos = await fetchImagesWithQuery(
          this.state.query,
          this.state.page
        );
        this.setState(prevState => ({images: [...prevState.images, ...photos ]}));
      
    } catch (error) {
      this.setState({
        error: true,
      });
      toast.error('Please, try loading page again')
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.addPhoto} />
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images}/>
        )}
        {this.state.images.length > 11 && <Button onButton={this.onButton} />}
        <Toaster/>
      </div>
    );
  }
}
