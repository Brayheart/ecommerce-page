import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <ol className='nav-items'>
            <li><img src={require('./images/logo.svg').default} alt="" /></li>
            <li>Colections</li>
            <li>Men</li>
            <li>Women</li>
            <li>Contact</li>
          </ol>
          <div className='nav-icons'>
            <li><img src={require('./images/icon-cart.svg').default} className='shopping-cart' alt="" /></li>
            <li><img src={require('./images/image-avatar.png')} className='profile-img' alt="" /></li>
          </div>
        </nav>

        <section class='main-content'>
          <div className="half">
            <div className='main-img-container'>
              <img src={require('./images/image-product-1.jpg')} className='main-img' alt="" />
              <div className='thumbnail-container'>
                <img src={require('./images/image-product-1-thumbnail.jpg')} className='thumbnail' alt="" />
                <img src={require('./images/image-product-2-thumbnail.jpg')} className='thumbnail' alt="" />
                <img src={require('./images/image-product-3-thumbnail.jpg')} className='thumbnail' alt="" />
                <img src={require('./images/image-product-4-thumbnail.jpg')} className='thumbnail' alt="" />
              </div>  
            </div>
          </div>
          <div className="half">
            <h6>Sneaker Company</h6>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div>
            <div>$125.00</div>
            <div>50%</div>
          </div>
          <div>$250.00</div>
          <div>
            <img src={require('./images/icon-minus.svg').default} alt="" />
            <div>0</div>
            <img src={require('./images/icon-plus.svg').default} alt="" />
            <button>Add to cart</button>
          </div>
          </div>
        </section>
    
      </div>
    );
  }
}

export default App;
