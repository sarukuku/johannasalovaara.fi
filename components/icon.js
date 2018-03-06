import React from 'react'
import Calm from '../svg/face-calm.svg'
import Enthusiastic from '../svg/face-enthusiastic.svg'
import Wink from '../svg/face-wink.svg'
import LinkedIn from '../svg/icon-linkedin.svg'
import Twitter from '../svg/icon-twitter.svg'

export default class Icon extends React.Component {
  render () {
    const { name } = this.props

    return (
      <div className='icon'>
        <div className='svg-container'>
          {name === 'calm' &&
            <Calm />
          }
          {name === 'enthusiastic' &&
            <Enthusiastic />
          }
          {name === 'wink' &&
            <Wink />
          }
          {name === 'linkedin' &&
            <LinkedIn />
          }
          {name === 'twitter' &&
            <Twitter />
          }
        </div>

        <style jsx>{`
        .icon {
          position: relative;
          width: 4rem;
          margin: 1rem;
        }
  
        .svg-container {
          width: 100%;
          vertical-align: middle; 
          overflow: hidden;
          padding-bottom: 100%;
        }
  
        .svg-container :global(svg) { 
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        `}</style>
      </div>
    )
  }
}
