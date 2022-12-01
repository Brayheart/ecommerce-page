import React from 'react';
// import Nav from './components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      modal: false,
      cartView: false,
      item: {
        img: <img src={process.env.PUBLIC_URL + '/images/image-product-1.jpg'} className='cart-img' alt="" />,
        title: 'Fall Limited Edition Sneakers',
        price: 125,
        count: 0
      },
      cart: [],
      counter: 0
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

  add = () => {
    this.setState({counter: this.state.counter+=1})
  }

  remove = () => {
    if(this.state.counter > 0){
      this.setState({counter: this.state.counter-=1})
    }
  }

  cartView = () => {
    this.setState({cartView: !this.state.cartView})
  }

  addToCart = () => {
    if(this.state.cart.length === 0){
      this.state.cart.push(this.state.item)
    }
    this.state.cart[0].count += this.state.counter
    this.setState({cart: this.state.cart})
  }

  render() {
    return (
      <div className="App">

        {
          this.state.modal && <div onClick={(e) => this.closeModal(e)} className="modal">
            <div className="modalContent">
            <Carousel>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/image-product-1.jpg'} className='' alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/image-product-2.jpg'} className='' alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/image-product-3.jpg'} className='' alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/images/image-product-4.jpg'} className='' alt="" />
                </div>
            </Carousel>
            </div>
          </div>
        }

      <nav className='nav'>
        <ol className='nav-items'>
          <li><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" /></li>
          <li>Colections</li>
          <li>Men</li>
          <li>Women</li>
          <li>Contact</li>
        </ol>
        <div className='nav-icons'>
          <li className='cart-master-container'>
            <button onClick={this.cartView} className='blank'>
              {this.state.cart.length !== 0 && <p className='notification'>{this.state.cart[0].count}</p>}
              <img src={process.env.PUBLIC_URL + '/images/icon-cart.svg'} className='shopping-cart' alt="" />
            </button>
            {this.state.cartView &&
              <div className='cart'>
              <h2 className='cart-title'>Cart</h2>
              {
                this.state.cart.length < 1 &&
                <p>Your Cart is Empty</p>
              }
              {
                this.state.cart.length === 1 &&
                <div>
                  <div className='cart-container'>
                    <div>{this.state.cart[0].img}</div>
                      <div className='cart-text-container'>
                        <div className='cart-text-title'>{this.state.cart[0].title}</div>
                        <div className='cart-text-price'>{`$${this.state.cart[0].price}.00`} x {this.state.cart[0].count} {`$${this.state.cart[0].price * this.state.counter}.00`}</div>
                      </div>
                  </div>
                  <button className='checkout'>Checkout</button>
                </div>
              }
            </div>
            }
          </li>
          <li><img src={process.env.PUBLIC_URL + '/images/image-avatar.png'} className='profile-img' alt="" /></li>
        </div>
      </nav>

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
                  <img onClick={this.remove} src={process.env.PUBLIC_URL + '/images/icon-minus.svg'} className='remove' alt="" />
                  <div>{this.state.counter}</div>
                  <img onClick={this.add} src={process.env.PUBLIC_URL + '/images/icon-plus.svg'} className='add' alt="" />
                </div>
                <button onClick={this.addToCart} className='add-to-cart'>Add to cart</button>
              </div>
            </div>
          </div>
        </section>
    
      </div>
    );
  }
}

export default App;
