import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/underArmourLogo.svg';
import './menuPrimary.styles.css';


class MenuPrimary extends Component {
  state = {
    isOpen: false,
    anchorEl: null
  };

  handleMenuItemHover = event =>
    this.setState({
      isOpen: true,
      anchorEl: event.currentTarget.id
    });

  handleSubmenuLeave = () => {
    this.setState({
      isOpen: false,
      anchorEl: null
    })
  };

  handleMenuItemLeave = (event) => {
    if(!event.relatedTarget.id) {
      this.setState({
        isOpen: false
      })
    } 
  }

  render() {
    const styles = {
      overlay: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.465)',
      zIndex: 94,
      position: 'fixed',
      display: 'block',
      visibility: 'visible',
      opacity: 1,
      transition: 'opacity 100ms ease-in'
      }
    };

    return (
      <Fragment>
        <div id="header" className="global-header">
        <div className='primary-logo'>
          <Link className='primary-logo__link'>
            <Logo/>
          </Link>
        </div>
        <nav id="primary-nav" className="navigation__wrapper">
          <ul className="navigation clearfix">
            <li className="first-level">
              <Link
                id="arrivals"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                NEW ARRIVALS
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "arrivals" 
                    ? "is-open"
                    : "" 
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>Men's New Arrivals</Link>
                        </h5>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>Women's New Arrivals</Link>
                        </h5>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>Kid's New Arrivals</Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="men"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                MEN
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "men"
                    ? "is-open"
                    : ""
                } sub-navigation`}

                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_mens">
                  <div className="sub-navigation__spotlight nav-spotlight-mens">
                    <ul>
                      <li><Link>BEST SELLERS</Link></li>
                      <li><Link>GIFT GUIDE</Link></li>
                      <li><Link>STEPHEN CURRY WARDROBE</Link></li>
                      <li><Link>PROJECT ROCK COLLECTION</Link></li>
                      <li><Link>UA HOVR™</Link></li>
                      <li><Link>UA RUSH</Link></li>
                      <li><Link>SPORTSTYLE</Link></li>
                      <li><Link><span style={{color:'#FF0000'}}>OUTLET</span></Link></li>
                    </ul>
                  </div>
                  <div className='sub-navigation__categories'>
                    <div className='sub-navigation__category-row'>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Tops</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Short Sleeves</Link></li>
                          <li><Link>Sleeveless & Tanks</Link></li>
                          <li><Link>Polos</Link></li>
                          <li><Link>Long Sleeves</Link></li>
                          <li><Link>Hoodies & Sweatshirts</Link></li>
                          <li><Link>Jackets</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Bottoms</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Shorts</Link></li>
                          <li><Link>Pants</Link></li>
                          <li><Link>Leggings & Tights</Link></li>
                          <li><Link>UnderWear</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Shoes</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Training Shoes</Link></li>
                          <li><Link>Basketball Shoes</Link></li>
                          <li><Link>Golf Shoes</Link></li>
                          <li><Link>Sportsyle Shoes</Link></li>
                          <li><Link>Outdoor Shoes</Link></li>
                          <li><Link>Slides</Link></li>
                        </ul>
                      </div>
                      <div className='sub-navigation__category-row'>
                        <div className='nav-group sub-navigation__category-group'>
                          <h5 className='sub-navigation__categories-header'><Link>Accessories</Link></h5>
                          <ul>
                            <li><Link>Backpacks & Bags</Link></li>
                            <li><Link>Headwear</Link></li>
                            <li><Link>Gloves</Link></li>
                            <li><Link>Socks</Link></li>
                            <li><Link>Belts</Link></li>
                            <li><Link>Equipment</Link></li>
                          </ul>
                        </div>
                        <div className='nav-group sub-navigation__category-group'>
                          <h5 className='sub-navigation__categories-header'><Link>Sports</Link></h5>
                          <ul className='sub-categories'>
                            <li><Link>Running</Link></li>
                            <li><Link>Training</Link></li>
                            <li><Link>Golf</Link></li>
                            <li><Link>Basketball</Link></li>
                            <li><Link>Football</Link></li>
                            <li><Link>Outdoor</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="women"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                WOMEN
              </Link>
              <div
                id='subNavigation'
                className={`${
                  this.state.isOpen && this.state.anchorEl === "women"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_womens">
                  <div className='sub-navigation__spotlight nav-spotlight-womens'>
                    <ul>
                      <li><Link>BEST SELLERS</Link></li>
                      <li><Link>GIFT GUIDE</Link></li>
                      <li><Link>PROJECT ROCK</Link></li>
                      <li><Link>COLLECTION</Link></li>
                      <li><Link>UA HOVR™</Link></li>
                      <li><Link>UA RUSH</Link></li>
                      <li><Link>SPORTSTYLE</Link></li>
                      <li><Link><span style={{color:'#FF0000'}}>OUTLET</span></Link></li>
                    </ul>
                  </div>
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>TOPS</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Sports Bras</Link></li>
                          <li><Link>Short Sleeves</Link></li>
                          <li><Link>Sleeveless & Tanks</Link></li>
                          <li><Link>Long Sleeves</Link></li>
                          <li><Link>Hoodies & Sweatshirts</Link></li>
                          <li><Link>Jackets</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Bottoms</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Shorts</Link></li>
                          <li><Link>Capris</Link></li>
                          <li><Link>Pants</Link></li>
                          <li><Link>Leggings & Tights</Link></li>
                          <li><Link>UnderWear</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Shoes</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Training Shoes</Link></li>
                          <li><Link>Golf Shoes</Link></li>
                          <li><Link>Sportsyle Shoes</Link></li>
                          <li><Link>Slides</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'>
                          <Link>Accessories</Link>
                        </h5>
                        <ul>
                          <li><Link>Backpacks & Bags</Link></li>
                          <li><Link>Headwear</Link></li>
                          <li><Link>Gloves</Link></li>
                          <li><Link>Socks</Link></li>
                          <li><Link>Belts</Link></li>
                          <li><Link>Equipment</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Sports</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Running</Link></li>
                          <li><Link>Training</Link></li>
                          <li><Link>Golf</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="kids"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                KIDS
              </Link>
              <div
                id="subNavigation"
                className={`${
                  this.state.isOpen && this.state.anchorEl === "kids"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_new-arrivals">
                  <div className='sub-navigation__spotlight nav-spotlight-kids'>
                    <ul>
                      <li><Link>NEW ARRIVALS</Link></li>
                      <li><Link>BEST SELLERS</Link></li>
                      <li><Link>OUTLET</Link></li>
                    </ul>
                  </div>
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>TOPS</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Short Sleeves</Link></li>
                          <li><Link>Long Sleeves</Link></li>
                          <li><Link>Hoodies & Sweatshirts</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'><Link>Bottoms</Link></h5>
                        <ul className='sub-categories'>
                          <li><Link>Shorts</Link></li>
                          <li><Link>Capris</Link></li>
                          <li><Link>Leggings & Pants</Link></li>
                        </ul>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>KID'S SHOES</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Basketball Shoes</Link></li>
                        </ul>
                      </div>
                      <div className='nav-group sub-navigation__category-group'>
                        <h5 className='sub-navigation__categories-header'>
                          <Link>Accessories</Link>
                        </h5>
                        <ul>
                          <li><Link>Backpacks & Bags</Link></li>
                          <li><Link>Headwear</Link></li>
                          <li><Link>Socks</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="shoes"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                SHOES
              </Link>
              <div
                id="subNavigation"
                className={`${
                  this.state.isOpen && this.state.anchorEl === "shoes"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
              >
                <nav className="sub-navigation__wrapper sub-navigation_footwear">
                  <div className='sub-navigation__spotlight nav-spotlight-footwear'>
                    <ul>
                      <li><Link>UA HOVR™</Link></li>
                      <li><Link>CURRY 7</Link></li>
                      <li><Link>SPIETH 3</Link></li>
                      <li><Link>SPORTSTLE SHOES</Link></li>
                    </ul>
                  </div>
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>MEN'S SHOES</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Training Shoes</Link></li>
                          <li><Link>Basketball Shoes</Link></li>
                          <li><Link>Golf Shoes</Link></li>
                          <li><Link>Sportsyle Shoes</Link></li>
                          <li><Link>Outdoor Shoes</Link></li>
                          <li><Link>Slides</Link></li>
                        </ul>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>WOMEN'S SHOES</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Training Shoes</Link></li>
                          <li><Link>Golf Shoes</Link></li>
                          <li><Link>Sportsyle Shoes</Link></li>
                          <li><Link>Slides</Link></li>
                        </ul>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>KIDS'S SHOES</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Running Shoes</Link></li>
                          <li><Link>Basketball Shoes</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
            <li className="first-level">
              <Link
                id="outlet"
                className="navigation__link"
                onMouseEnter={this.handleMenuItemHover}
                onMouseLeave={this.handleMenuItemLeave}
              >
                OUTLET
              </Link>
              <div
                id="subNavigation"
                className={`${
                  this.state.isOpen && this.state.anchorEl === "outlet"
                    ? "is-open"
                    : ""
                } sub-navigation`}
                onMouseLeave={this.handleSubmenuLeave}
                
              >
                <nav className="sub-navigation__wrapper sub-navigation_new_outlet">
                  <div className="sub-navigation__categories">
                    <div className="sub-navigation__category-row">
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>ALL MEN'S</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Shirts & Tops</Link></li>
                          <li><Link>Bottoms</Link></li>
                          <li><Link>Shoes</Link></li>
                          <li><Link>Accessories</Link></li>
                        </ul>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>ALL WOMEN'S</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Shirts & Tops</Link></li>
                          <li><Link>Bottoms</Link></li>
                          <li><Link>Shoes</Link></li>
                          <li><Link>Accessories</Link></li>
                        </ul>
                      </div>
                      <div className="nav-group sub-navigation__category-group">
                        <h5 className="sub-navigation__categories-header">
                          <Link>ALL KID'S</Link>
                        </h5>
                        <ul className='sub-categories'>
                          <li><Link>Shirts & Tops</Link></li>
                          <li><Link>Bottoms</Link></li>
                          <li><Link>Shoes</Link></li>
                          <li><Link>Accessories</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {this.state.isOpen && <div style={styles.overlay} />}
      </Fragment>
    );
  }
}

export default MenuPrimary;

