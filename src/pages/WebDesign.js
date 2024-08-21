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
        <div className="w3-conteiner w3-black w3-container w3-padding-64" id="web-design">
            <h3 className="w3-center">MY WORK</h3>
            <p className="w3-center"><em>Here are some of my latest projects.<br/></em></p><br/>

            {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
            <div className="w3-row-padding w3-center">
                <div className="w3-col m3">
                <img src={gameshop} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Games eShop"/>
                </div>

                <div className="w3-col m3">
                <a href='https://slnople.wordpress.com/sinople/' target='_self'><img src={hero} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Web design Agency"/></a>
                </div>

                <div className="w3-col m3">
                <img src={roott} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="CSS animation for my Home page"/>
                </div>

                <div className="w3-col m3">
                <img src={ArtCorner} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Creative Repository Page"/>
                </div>
            </div>

            <div className="w3-row-padding w3-center w3-section">
                <div className="w3-col m3">
                <img src={landing1} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="JS Animation for my Hero section"/>
                </div>

                <div className="w3-col m3">
                <img src={form} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Sign up form for clients projects"/>
                </div>

                <div className="w3-col m3">
                <img src="https://img.itch.zone/aW1hZ2UvMTExNjMyMS8xMzM5MDIzOC5wbmc=/original/cUJKua.png" style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="2D Racing Game Design"/>
                </div>

                <div className="w3-col m3">
                <img src={Coming} style={{width:"100%"}} onclick="onClick(this)" class="w3-hover-opacity" alt="Coming Soon Page concept"/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default WebDesign