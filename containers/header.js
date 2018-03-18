import React from 'react'
import cN from 'classnames'
import Navigation from '../components/navigation'
import Toggle from '../components/navToggle'

export default class Icon extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navOpen: false
    }
  }

  toggleNavigation () {
    this.setState({'navOpen': !this.state.navOpen})
  }

  render () {
    const classes = cN({
      'site-header': true,
      'm-nav-state--open': this.state.navOpen
    })

    return (
      <div className={classes}>
        <Navigation />
        <Toggle
          open={this.state.navOpen}
          onClick={() => { this.toggleNavigation() }} />

        <style jsx>{`
          :global(.main-nav) {
            top: 100%;
            opacity: 0;
          }

          :global(.m-nav-state--open .main-nav) {
            top: 0;
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}
