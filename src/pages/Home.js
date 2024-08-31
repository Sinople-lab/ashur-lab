
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
        <div className='w3-display-container w3-black' style={{background:'#0000'}}>
          <div id="about" className="w3-content w3-container w3-padding-64">
            <div className="w3-row">

              <div className="w3-col m6 w3-center w3-half w3-padding-large">
                <img src={img}
                className="w3-round-xxlarge w3-image"
                alt="Martin Carballo"
                />
              </div>

              <div className="w3-half w3-padding-large">
                <h1 className="w3-center w3-text-white">About Me</h1><br/>
                <h5 className="w3-center w3-text-white">Martin Carballo</h5>
                <p className="w3-large w3-text-light-grey">
                The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="w3-large w3-text-light-grey w3-hide-medium">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home