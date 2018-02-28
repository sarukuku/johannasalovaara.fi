import VerticalLogo from '../svg/logo-vertical.svg'
import HorizontalLogo from '../svg/logo-horizontal.svg'
import settings from '../settings'

export default () => (
  <header className='masthead'>

    <div className='svg-container verticalLogo'>
      <VerticalLogo />
    </div>
    <div className='svg-container horizontalLogo'>
      <HorizontalLogo />
    </div>

    <style jsx>{`
      .masthead {
        min-height: 80vh;
        background-color: ${settings.colors.salmon};
        position: relative;
      }

      .svg-container { 
        display: inline-block;
        position: absolute;
        top: calc(50% + 1.5rem);
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%; 
        vertical-align: middle; 
        overflow: hidden;
      }

      .svg-container :global(svg) { 
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
      }

      .verticalLogo {
        padding-bottom: ${123 / 262 * 100}%;
      }

      .horizontalLogo {
        display: none;
        padding-bottom: ${107 / 959 * 100}%;
      }

      @media (min-width: ${settings.breakPoints.m}) {        
        .verticalLogo {
          display: none;
        }
        
        .horizontalLogo {
          display: inline-block;
          top: calc(50% + 2rem);
        }
      }

      @media (min-width: ${settings.breakPoints.l}) {
        .masthead{
          min-height: 70vh;
        }

        .horizontalLogo {
          top: calc(50% + 2.5rem);          
        }
      }

      @media (min-width: ${settings.breakPoints.xl}) {
        .horizontalLogo {
          top: calc(50% + 3rem);          
        }
      }

    `}</style>
  </header>
)
