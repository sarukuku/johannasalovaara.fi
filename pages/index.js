import React from 'react'
import Head from 'next/head'
import Masthead from '../components/masthead'
import Heading from '../components/heading'
import Columnize from '../components/columnize'
import SiteHeader from '../containers/header'
import Icon from '../components/icon'
import SoMe from '../components/some'
import settings from '../settings'

export default class Index extends React.Component {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      // navigator.serviceWorker.register('/sw.js')
      //  .catch(err => console.error('Service worker registration failed', err))
    } else {
      console.log('Service worker not supported')
    }
  }

  render () {
    return (
      <div>
        <Head>
          <title>Johanna Salovaara</title>
          <meta name='description' content='Autan yrityksiä, järjestöjä ja asiantuntijoita viestimään paremmin.' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='manifest' href='/static/manifest.webmanifest' />
          <meta name='theme-color' content={settings.colors.salmon} />
        </Head>

        <SiteHeader />
        <Masthead />

        <section className='m-text-align--center'>
          <Heading semanticLevel='h1' textAlign='center' gradientDirection='to white'>
            Vaikuttavaa<br />viestintää
          </Heading>

          <p>
            Autan yrityksiä, järjestöjä ja asiantuntijoita viestimään paremmin. Mikäli haluat kasvattaa tietoisuutta brändistäsi, sitouttaa asiakkaasi tehokkaammin tai vaikuttaa ympäröivään yhteiskuntaasi, on viestintä keino tavoittaa yleisösi.
          </p>

          <p>
            Viestinnän ytimessä ovat laadukkaat sisällöt. Tuotan sisältöjä, jotka vastaavat tarpeisiisi – oli se sitten keskustelun herättäminen, toimintasi merkityksen muotoilu tai digitaalisen verkostosi kasvattaminen.
          </p>
        </section>

        <section className='m-bg-color--salmon'>
          <Heading id='palvelut' semanticLevel='h2' textAlign='center' gradientDirection='to salmon'>
            Palvelut
          </Heading>

          <Columnize large>
            <div>
              <Icon name='calm' />
              <Heading semanticLevel='h3' size='medium'>
                Viestinnän<br />sisällöt
              </Heading>
              <ul>
                <li>Tiedotteet, lehdistömateriaalit</li>
                <li>Blogit</li>
                <li>Artikkelit</li>
                <li>Nettisivutekstit, esitteet</li>
                <li>Sosiaalisen median sisällöt</li>
                <li>Esitykset, presentaatiot, puheet</li>
              </ul>
            </div>

            <div>
              <Icon name='enthusiastic' />
              <Heading semanticLevel='h3' size='medium'>
                Viestinnän<br />strateginen<br />suunnittelu
              </Heading>
              <ul>
                <li>Ydinviestit, bränditarinat</li>
                <li>Viestintäsuunnitelmat</li>
                <li>Viestintäkalenterit</li>
              </ul>
            </div>

            <div>
              <Icon name='wink' />
              <Heading semanticLevel='h3' size='medium'>
                Viestinnän<br />konsultointi
              </Heading>
              <ul>
                <li>Sparraus ja tuki</li>
                <li>Valmennukset</li>
              </ul>
            </div>
          </Columnize>
        </section>

        <section className='m-text-align--center'>
          <Heading id='kenelle' semanticLevel='h2' textAlign='center' gradientDirection='to white'>
            Kenelle
          </Heading>

          <p>
            Teen viestintää kaikenlaisille organisaatioille yrityksistä järjestöihin. Viestintä- ja markkinointitoimistoille toimin freelancerina sisällöntuotannon ja viestinnän suunnittelun projekteissa.
          </p>

          <p>
            Autan myös eri alojen asiantuntijoita, tutkijoita ja tieteentekijöitä viestien kiteyttämisessä ja selkeyttämisessä. Käännän vaikeat teoriat ja tutkimustulokset kansankielelle ja autan tavoittamaan oikeat yleisöt yhteiskunnallisessa keskustelussa.
          </p>
        </section>

        <section className='m-bg-color--salmon'>
          <Heading id='tausta' semanticLevel='h2' textAlign='center' gradientDirection='to salmon'>
            Tausta
          </Heading>

          <Columnize>
            <Heading semanticLevel='h3' size='medium'>
              Viestintä
            </Heading>
            <p>
              Ennen freelanceriksi hyppäämistä toimin viisi vuotta eri positioissa viestintätoimistossa. Viestinnän kokemusta minulle on kertynyt pörssiyhtiöistä ja järjestöistä startup-yrityksiin, mm. IT-, turvallisuus-, rakennus- ja terveysaloilta. Olen toteuttanut asiakkailleni viestintää sisällöntuottajan, valmentajan, viestintäkonsultin ja viestinnän suunnittelijan rooleissa.
            </p>
          </Columnize>

          <Columnize>
            <Heading semanticLevel='h3' size='medium'>
              Markkinointi
            </Heading>
            <p>
              Olen valmistunut Turun yliopiston kauppakorkeakoulusta kauppatieteiden maisteriksi (KTM) markkinointi pääaineenani. Opintojeni ohella työskentelin mainostoimistossa, jossa kartutin käytännön kokemusta markkinoinnin ja brändäyksen maailmasta.
            </p>
          </Columnize>

          <Columnize>
            <Heading semanticLevel='h3' size='medium'>
              Teologia
            </Heading>
            <p>
              Viestinnän töiden ohella opiskelen teologiaa ja uskontotutkimusta Helsingin yliopistolla. Sydäntäni lähellä ovat siis markkinointiviestinnän lisäksi eksistentiaaliset kysymykset ja hengellinen pohdiskelu.
            </p>
          </Columnize>
        </section>

        <section>
          <Heading id='yhteystiedot' semanticLevel='h2' textAlign='center' gradientDirection='to white'>
            Yhteystiedot
          </Heading>

          <Columnize>
            <Heading semanticLevel='h3' size='medium'>
              Pyydä tarjousta<br />tai kysy lisää!
            </Heading>
            <p>
              <a href='mailto:johanna.salovaara11@gmail.com'>johanna.salovaara11@gmail.com</a>
              <br />
              –
              <br />
              <a href='tel:+358400642709'>+358 400 642 709</a>
            </p>
          </Columnize>

          <SoMe />

          <img className='portrait' src='/static/portrait.jpg' alt='Portrait of Johanna Salovaara' />
        </section>

        <style jsx global>{`
          @font-face {
            font-family: 'Sporting Grotesque Bold';
            src: url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot');
            src: url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.eot?#iefix') format('embedded-opentype'),
                url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff') format('woff'),
                url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Bold.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          
          @font-face {
            font-family: 'Sporting Grotesque Regular';
            src: url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot');
            src: url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.eot?#iefix') format('embedded-opentype'),
                url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff') format('woff'),
                url('/static/webfonts/SportingGrotesque/Sporting_Grotesque-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'Quattrocento Regular';
            src: url('/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff2') format('woff2'),
                url('/static/webfonts/Quattrocento/quattrocento-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        
          @font-face {
            font-family: 'Quattrocento Bold';
            src: url('/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff2') format('woff2'),
                url('/static/webfonts/Quattrocento/quattrocento-bold-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: 'Quattrocento Regular', serif;
            color: ${settings.colors.blue};
            font-size: 16px;
          }

          h1,h2,h3,
          h4,h5,h6 {
            margin: 0;
          }

          p {
            padding: 0 1rem 1rem 1rem;
            margin: 0 auto 0 auto;
            max-width: 557px;
            color: ${settings.colors.blue};
          }

          ul {
            margin: 0 0 0 1rem;
            padding: 0 1rem 1rem 1rem;
            color: ${settings.colors.blue};
            list-style: disc;
          }

          @media (min-width: ${settings.breakPoints.l}) {
            p, ul {
              font-size: 20px;
              padding-bottom: 1.5rem;
            }
          }

          .m-bg-color--salmon {
            background-color: ${settings.colors.salmon};
          }

          .m-text-align--center {
            text-align: center;
          }

          .portrait {
            position: relative;
            max-width: 100%;
            margin: 1rem auto 0 auto;
            left: 50%;
            transform: translate(-50%, 4px);
          }

          .hidden-but-readable {
            clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
          }
        `}</style>
      </div>
    )
  }
}
