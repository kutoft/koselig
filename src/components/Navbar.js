import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/pro-light-svg-icons'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      dropdownTitle: "About Koselig",
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScrolling);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScrolling);
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };


  updateTitle = (e, id) => {
    console.log(e.currentTarget);
    this.setState(
      {
        dropdownTitle: e.currentTarget.textContent,
        active: !this.state.active
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
    let parent = document.querySelector(".dropdown-content").children;
    for (let child of parent) {
      if(child.classList.contains("is-active")) {
        child.classList.remove("is-active");
      }
    };
    e.currentTarget.classList.add("is-active");

    this.handleScroll(id);
  };

  handleScroll = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: "start",
      inline: "nearest",
     });
  }

  handleScrolling = () => {
    const ids = [
      {
        id: '#about',
        title: 'About Koselig'
      },
      {
        id: '#membership',
        title: 'Membership'
      },
      {
        id: '#shares',
        title: 'Community Shares'
      },
      {
        id: '#gallery',
        title: 'Bread Gallery'
      }
    ];
    ids.forEach((id) => {
      let menuHeight = 73;
      let el = document.querySelector(id.id)
      let elHeight = el.getBoundingClientRect().height;
      let elTop = el.getBoundingClientRect().top;
      let elPosition = elTop - menuHeight;

      if(elPosition <= menuHeight + 1 && elPosition >= -menuHeight - 1) {
        this.setState(
          {
            dropdownTitle: id.title,
          }
        );
        let parent = document.querySelector(".dropdown-content").children;
        for (let child of parent) {
          if(child.classList.contains("is-active")) {
            child.classList.remove("is-active");
          }
          if(child.textContent === id.title) {
            child.classList.add("is-active");
          }
        };
      }

    });
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="column navbar-item" title="Logo">
              <img src={logo} alt="Koselig Bread" />
            </Link>
            <div className="navbar-menu column is-narrow has-text-centered">
              <div className={`dropdown ${this.state.navBarActiveClass}`} >
                <div className="dropdown-trigger">
                  <button
                    className="button"
                    onClick={() => this.toggleHamburger()}
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                  >
                    <span className="dropdown-title">{this.state.dropdownTitle}</span>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#about')}>
                      About Koselig
                    </div>
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#membership')}>
                      Membership
                    </div>
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#shares')}>
                      Community Shares
                    </div>
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#gallery')}>
                      Bread Gallery
                    </div>
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#meet')}>
                      Meet The Baker
                    </div>
                    <div className="navbar-item" onClick={(e) => this.updateTitle(e, '#faqs')}>
                      Common Q&As
                    </div>
                  </div>
                </div>
              </div>
              <Link className="button is-secondary" to="/about">
                <span className="hide-for-mobile">Become A Member</span>
                <span className="show-for-mobile-only">Join</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
