import settings from '../settings'

export default ({ onClick }) => (
  <nav className='main-nav' onClick={onClick} >
    <ul>
      <li><a href='#'>Palvelut</a></li>
      <li><a href='#'>Kenelle?</a></li>
      <li><a href='#'>Tausta</a></li>
      <li><a href='#'>Yhteystiedot</a></li>
    </ul>
    <style jsx>{`
      .main-nav {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 100;
        background-color: ${settings.colors.salmon};
        transition: all .25s ease-in-out;
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
