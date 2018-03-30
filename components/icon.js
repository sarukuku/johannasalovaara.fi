import React from 'react'
import Calm from '../svg/face-calm.svg'
import Enthusiastic from '../svg/face-enthusiastic.svg'
import Wink from '../svg/face-wink.svg'
import LinkedIn from '../svg/icon-linkedin.svg'
import Twitter from '../svg/icon-twitter.svg'

export default class Icon extends React.Component {
  render () {
    const { name, style, animated } = this.props

    return (
      <div className={animated ? 'icon animated' : 'icon'} style={style || {}}>
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
          transition: all .2s ease-in-out;
        }

        .animated {
          animation-duration: 10s;
          animation-fill-mode: both;
          animation-iteration-count: infinite;
          animation-name: tada;
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

        @keyframes tada {
          from {
            transform: rotate3d(0, 0, 0, 0);
          }

          10% {
            transform: rotate3d(0, 0, 1, -10deg);
          }
        
          20% {
            transform: rotate3d(0, 0, 1, 10deg);
          }

          30% {
            transform: rotate3d(0, 0, 1, -10deg);
          }

          40%,
          50%,
          60%,
          70%,
          80%,
          90% {
            transform: rotate3d(0, 0, 0, 0);
          }

          to {
            transform: rotate3d(0, 0, 0, 0);
          }
        }
        `}</style>
      </div>
    )
  }
}
