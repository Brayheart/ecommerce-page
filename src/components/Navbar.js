const Nav = () => {
    return (
        <nav className='nav'>
        <ol className='nav-items'>
          <li><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" /></li>
          <li>Colections</li>
          <li>Men</li>
          <li>Women</li>
          <li>Contact</li>
        </ol>
        <div className='nav-icons'>
          <li><img src={process.env.PUBLIC_URL + '/images/icon-cart.svg'} className='shopping-cart' alt="" /></li>
          <li><img src={process.env.PUBLIC_URL + '/images/image-avatar.png'} className='profile-img' alt="" /></li>
        </div>
      </nav>
    )
}

export default Nav;