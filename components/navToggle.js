import settings from '../settings'

export default ({ onClick, open }) => (
  <div className={`nav-toggle ${open ? 'm--open' : ''}`} onClick={onClick} >
    <span className='nav-toggle__1' />
    <span className='nav-toggle__2' />
    <span className='nav-toggle__3' />
    <style jsx>{`
      .nav-toggle {
        width: 4rem;
        height: calc(1rem + 6px);
        z-index: 200;
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      }

      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${settings.colors.blue};
        transition: all .2s ease-in-out;
        transform-origin: center;
      }

      .nav-toggle__1 {}
      .nav-toggle__2 {
        margin: 0.6rem 0;
      }
      .nav-toggle__3 {}

      .m--open .nav-toggle__2 {
        opacity: 0;
      }

      .m--open .nav-toggle__1 {
        transform: rotate(20deg);
        margin-top: calc(0.6rem + 2px);
      }

      .m--open .nav-toggle__3 {
        transform: rotate(-20deg);
        margin-top: calc(-1.2rem - 4px);        
      }

      @media (min-width: ${settings.breakPoints.l}) {
        .nav-toggle {
          display: none;
        }
      }
    `}</style>
  </div>
)
