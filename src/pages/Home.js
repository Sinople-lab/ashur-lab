
import Header from './../components/Header'
import Footer from './../components/Footer'
import Cover from '../components/Cover'

import img from '../images/img.jpg'

const Home = () => {
  return (
    <div >
        <Header />
        <Cover />
        {/* style={{background:'#003333'}} */}
        <div className='display-container black' style={{background:'#0000'}}>
          <div id="about" className="content container padding-64">
            <div className="row">

              <div className="col m6 center half padding-large">
                <img src={img}
                className="round-xxlarge image"
                alt="Martin Carballo"
                />
              </div>

              <div className="half padding-large">
                <h1 className="center text-white">About Me</h1><br/>
                <h5 className="center text-white">Martin Carballo</h5>
                <p className="large text-light-grey">
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur
                  adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="large text-light-grey hide-medium">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
