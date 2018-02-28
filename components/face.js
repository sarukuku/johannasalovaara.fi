import React from 'react'
import Calm from '../svg/face-calm.svg'
import Enthusiastic from '../svg/face-enthusiastic.svg'
import Wink from '../svg/face-wink.svg'

export default class Face extends React.Component {
  render () {
    const { expression } = this.props

    return (
      <div className='face'>
        <div className='svg-container'>
          {expression === 'calm' &&
            <Calm />
          }
          {expression === 'enthusiastic' &&
            <Enthusiastic />
          }
          {expression === 'wink' &&
            <Wink />
          }
        </div>

        <style jsx>{`
        .face {
          position: relative;
          width: 4rem;
          margin: 1em;
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
