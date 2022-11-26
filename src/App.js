import React from 'react';
import Nav from './components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      modal: false
    }

  }

  Modal = () => {
    this.setState({modal: !this.state.modal})
  }

  closeModal = (e) => {
    if (e.target === e.currentTarget) {
      this.setState({modal: false})
   }
  }

  render() {
    return (
      <div className="App">

        {
          this.state.modal && <div onClick={(e) => this.closeModal(e)} className="modal">
            <div className="modalContent">
            <Carousel>
                <div>
                  <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-1.jpg'} className='' alt="" />
                </div>
                <div>
                  <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-2.jpg'} className='' alt="" />
                </div>
                <div>
                  <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-3.jpg'} className='' alt="" />
                </div>
                <div>
                  <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-4.jpg'} className='' alt="" />
                </div>
            </Carousel>
            </div>
          </div>
        }

        <Nav/>

        <section class='main-content'>
          <div className="half">
            <div className='main-img-container'>
              <img src={process.env.PUBLIC_URL + '/images/image-product-1.jpg'} className='main-img' alt="" />
              <div className='thumbnail-container'>
                <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-1-thumbnail.jpg'} className='thumbnail' alt="" />
                <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-2-thumbnail.jpg'} className='thumbnail' alt="" />
                <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-3-thumbnail.jpg'} className='thumbnail' alt="" />
                <img onClick={this.Modal} src={process.env.PUBLIC_URL + '/images/image-product-4-thumbnail.jpg'} className='thumbnail' alt="" />
              </div>  
            </div>
          </div>

          <div className="half">
            <div className="text-content-container">
              <p className='companyname'>Sneaker Company</p>
              <p className='title'>Fall Limited Edition Sneakers</p>
              <p className='card-text'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
              durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

              <div className='price-container'>
                <div>$125.00</div>
                <div>50%</div>
              </div>
              
              <div className='oldprice'>$250.00</div>
              <div className="cart-buttons">
                <div className='cart-add-remove'>
                  <img src={process.env.PUBLIC_URL + '/images/icon-minus.svg'} alt="" />
                  <div>0</div>
                  <img src={process.env.PUBLIC_URL + '/images/icon-plus.svg'} alt="" />
                </div>
                <button className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
        </section>
    
      </div>
    );
  }
}

export default App;
