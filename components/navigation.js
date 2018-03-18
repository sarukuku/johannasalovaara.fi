import React from 'react'
import settings from '../settings'
let tId
export default class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navOpen: false
    }
  }

  componentWillReceiveProps (nextProps) {
    window.clearTimeout(tId)
    if (nextProps.open) {
      this.nav.style.display = 'block'
      tId = window.setTimeout(() => {
        this.setState({'navOpen': true})
      }, 1)
    } else {
      this.setState({'navOpen': false})
      tId = window.setTimeout(() => {
        this.nav.style.display = 'none'
      }, 500)
    }
  }

  render () {
    return (
      <nav className={`main-nav ${this.state.navOpen ? 'm--open' : ''}`} ref={(nav) => { this.nav = nav }} >
        <ul>
          <li><a href='#'>Palvelut</a></li>
          <li><a href='#'>Kenelle?</a></li>
          <li><a href='#'>Tausta</a></li>
          <li><a href='#'>Yhteystiedot</a></li>
        </ul>
        <style jsx>{`
          .main-nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 100;
          }
      
          .main-nav:before {
            content: '';
            width: 0;
            height: 0;
            background-color: ${settings.colors.salmon};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 100%;
            transition: all .4s ease-in-out;
            z-index: -1;    
            border: 0px solid transparent;             
          }
          
          .m--open.main-nav:before {
            width: 200vmax;
            height: 200vmax;
            border: 1rem solid ${settings.colors.blue}; 
          } 
      
          ul {
            display: flex;
            flex-direction: column;
            margin: 0;
            text-align: center;
            justify-content: center;
            align-items: center;
            height: 100%;
            list-style: none;
            opacity: 0;
            transition: all .2s ease-in-out;        
            transition-delay: 0s;
            visibility: hidden;
            transform: scale(0.9);
          }
      
          .m--open ul {
            visibility: visible;
            opacity: 1;
            transition-delay: 0s;
            transition-delay: .2s;
            transform: scale(1);
          }
      
          li {}
      
          li:not(:last-child) {
            margin-bottom: 2rem;
          }
      
          a {
            text-decoration: none;
            color: ${settings.colors.blue};
            font-size: 30px;
            font-weight: bold;
            font-family: 'Sporting Grotesque Bold', sans-serif;
            line-height: 1.2;
          }
        `}</style>
      </nav>
    )
  }
}
