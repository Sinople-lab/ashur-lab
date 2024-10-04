import { Link } from 'react-router-dom'

import Header from './../components/Header'
import Footer from './../components/Footer'

import gameshop from './../images/gameshop.png'
import hero from './../images/hero.png'
import roott from './../images/roott.png'
import ArtCorner from './../images/ArtCorner.png'
import landing1 from './../images/landing1.png'
import form from './../images/form.png'
import Coming from './../images/coming.png'

const WebDesign = () => {
  return (
    <div>
        <Header />
        <div className="container black padding-64" id="web-design">
            <h3 className="center">Landing Page Designs</h3>
            <p className="center"><em>Clic on an image to visit the page.<br/></em></p><br/>

            {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
            <div className="row-padding center">
                <div className="col m3">
                <a href='https://sinople.itch.io'><img src={gameshop} style={{width:"100%"}} class="hover-opacity" alt="Games eShop"/></a>
                </div>

                <div className="col m3">
                <a href='https://slnople.wordpress.com/sinople/' target='_self'><img src={hero} style={{width:"100%"}} class="hover-opacity" alt="Web design Agency"/></a>
                </div>

                <div className="col m3">
                <a href='https://Sinople-lab.github.io/home'><img src={roott} style={{width:"100%"}} class="hover-opacity" alt="CSS animation for my Home page"/></a>
                </div>

                <div className="col m3">
                <Link to='/'><img src={ArtCorner} style={{width:"100%"}} class="hover-opacity" alt="Creative Repository Page"/></Link>
                </div>
            </div>

            <div className="row-padding center section">
                <div className="col m3">
                <a href='https://Sinople-lab.github.io/home'><img src={landing1} style={{width:"100%"}} class="hover-opacity" alt="JS Animation for my Hero section"/></a>
                </div>

                <div className="col m3">
                <a href='https://sinople-lab.github.io/homework/'><img src={form} style={{width:"100%"}} class="hover-opacity" alt="Sign up form for clients projects"/></a>
                </div>

                <div className="col m3">
                <a href='https://sinople.itch.io/sinoplerunner'><img src="https://img.itch.zone/aW1hZ2UvMTExNjMyMS8xMzM5MDIzOC5wbmc=/original/cUJKua.png" style={{width:"100%"}} class="hover-opacity" alt="2D Racing Game Design"/></a>
                </div>

                <div className="col m3">
                <a href='https://www.behance.net/gallery/192524891/Coming-Soon'><img src={Coming} style={{width:"100%"}} class="hover-opacity" alt="Coming Soon Page concept"/></a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default WebDesign
