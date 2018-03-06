import React from 'react'
import cN from 'classnames'
import settings from '../settings'

export default class Columnize extends React.Component {
  render () {
    const { children, large } = this.props

    const classes = cN({
      'colWrap': true,
      'm-width--large': large
    })

    return (
      <div className={classes}>
        {children}
        <style jsx>{`
          .colWrap {
            display: block;
            padding-bottom: 1rem;
          }

          .colWrap :global(p) {
            margin-left: 0 !important;
          }

          .colWrap :global(.heading) {
            text-align: left;
          }

          @media (min-width: ${settings.breakPoints.l}) {
            .colWrap {
              display: flex;
              flex-wrap: nowrap;
              max-width: 1000px;
              margin: 0 auto;
            }

            .colWrap.m-width--large {
              max-width: 1000px;
              justify-content: space-between;
            }

            .colWrap:not(.m-width--large) :globa(> *) {
              flex-grow: 1;
              flex-basis: 0;
            }

            .colWrap:not(.m-width--large) :global(.heading) {
              text-align: right;
            }
          }
        `}</style>
      </div>
    )
  }
}
