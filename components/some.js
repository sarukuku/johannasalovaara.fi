import Icon from './icon'
import Smile from '../svg/icon-smile.svg'

export default () => (
  <div className='some'>
    <ul>
      <li>
        <a href='https://linkedin.com/'>
          <span className='hidden-but-readable'>LinkedIn</span>
          <Icon name='linkedin' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/'>
          <span className='hidden-but-readable'>Twitter</span>
          <Icon name='twitter' />
        </a>
      </li>
    </ul>
    <Smile className='smile' />
    <style jsx>{`
      .some {
        text-align: center;
      }

      ul {
        margin: 0;
        padding-bottom: .5rem;
      }

      li {
        display: inline-block;
      }

      a {
        text-decoration: none;
      }

      a :globa(> .icon) {
        margin: 0.25rem;
      }

      a:hover :globa(> .icon) {
        transform: rotateY(180deg);
      }

      :global(.smile) {
        transition: all .2s ease-in-out;
      }

      :global(.smile:hover) {
        transform: rotateZ(5deg) scale(1.1);
      }
    `}</style>
  </div>
)
