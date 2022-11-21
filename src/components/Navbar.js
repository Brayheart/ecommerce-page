const Nav = () => {
    return (
        <nav className='nav'>
        <ol className='nav-items'>
          <li><img src={require('../images/logo.svg').default} alt="" /></li>
          <li>Colections</li>
          <li>Men</li>
          <li>Women</li>
          <li>Contact</li>
        </ol>
        <div className='nav-icons'>
          <li><img src={require('../images/icon-cart.svg').default} className='shopping-cart' alt="" /></li>
          <li><img src={require('../images/image-avatar.png')} className='profile-img' alt="" /></li>
        </div>
      </nav>
    )
}

export default Nav;