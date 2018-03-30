import React from 'react'
import cN from 'classnames'
import settings from '../settings'

export default class Heading extends React.Component {
  render () {
    const {children, semanticLevel, textAlign, gradientDirection, size, className, ...other} = this.props
    const HeadingTag = semanticLevel

    const classes = cN({
      'heading': true,
      'm-gradient--to-white': gradientDirection === 'to white',
      'm-gradient--to-salmon': gradientDirection === 'to salmon',
      'm-size--medium': size === 'medium'
    })

    return (
      <HeadingTag className={`${classes} ${className || ''}`} {...other}>
        <span className='htext'>
          {children}
        </span>

        <style jsx>{`
          :global(.heading) {
            font-size: 30px;
            font-weight: bold;
            text-align: ${textAlign};
            color: ${settings.colors.blue};
            font-family: 'Sporting Grotesque Bold', sans-serif;
            line-height: 1.2;
            margin-bottom: 1rem;
            padding: 0 1rem;            
          }

          :global(.htext) {
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-name: fadeIn;
            animation-delay: 0.8s;
          }

          :global(.m-gradient--to-white) {
            background: linear-gradient(
              to bottom,
              ${settings.colors.salmon} 0%,
              ${settings.colors.salmon} 48%,
              ${settings.colors.white} 48%,
              ${settings.colors.white} 100%
            );
            padding: 3rem 1rem;
            margin-bottom: 0;
          }

          :global(.m-gradient--to-salmon) {
            background: linear-gradient(
              to bottom,
              ${settings.colors.white} 0%,
              ${settings.colors.white} 48%,
              ${settings.colors.salmon} 48%,
              ${settings.colors.salmon} 100%
            );
            padding: 3rem 1rem;
            margin-bottom: 0;
          }

          :global(.m-size--medium) {
            font-size: 25px;
          }

          @media (min-width: ${settings.breakPoints.m}) {
            :global(.m-gradient--to-white),
            :global(.m-gradient--to-salmon) {
              padding: 4rem 1rem;
            }
          }

          @media (min-width: ${settings.breakPoints.l}) {
            :global(.m-gradient--to-white),
            :global(.m-gradient--to-salmon) {
              padding: 5rem 1rem;
              font-size: 48px;
            }
          }

          @media (min-width: ${settings.breakPoints.xl}) {
            :global(.m-gradient--to-white),
            :global(.m-gradient--to-salmon) {
              padding: 6rem 1rem;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
          
            to {
              opacity: 1;
            }
          }
        `}</style>
      </HeadingTag>
    )
  }
}
