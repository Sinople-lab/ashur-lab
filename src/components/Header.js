import { Link } from "react-router-dom"

const Header = () => { 
  return (
    <div id='home' className="w3-container w3-blue-gray header">
        
        <h1><Link to="/" >My Art Studio </Link></h1>
        <p> 
            This is my art corner where I organize my creative work
            sorted by the field it belongs to and the type of work.
        </p>
    
        {/* Nav bar */}
        <div className="w3-bar w3-light-grey menus">
        <a href="https://sinople-lab.github.io/home" target="_self" className="w3-bar-item w3-button">About Me</a>

        <div className="w3-dropdown-hover">
            <button className="w3-button">Photography</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" className="w3-bar-item w3-button">Landscapes</a>
                <a href="#" className="w3-bar-item w3-button">Nature</a>
                <a href="#" className="w3-bar-item w3-button">Fine Art</a>
            </div>
        </div>

        <div className="w3-dropdown-hover">
            <button className="w3-button">Fine art</button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" className="w3-bar-item w3-button">Watercolor Paintings</a>
                <a href="#" className="w3-bar-item w3-button">Drawing</a>
            </div>
        </div>

        <div className="w3-dropdown-hover">
            <button className="w3-button">Animations</button>
                <div className="w3-dropdown-content w3-bar-block w3-card-4">
                    <a href="#" className="w3-bar-item w3-button">Video Games</a>
                    <a href="#" className="w3-bar-item w3-button">2D animations</a>
                    <a href="#" className="w3-bar-item w3-button">Math</a>
                </div> 
            </div>

            <div className="w3-dropdown-hover">
                <button className="w3-button">Web Design</button>
                <div className="w3-dropdown-content w3-bar-block w3-card-4">
                    <a href="#" className="w3-bar-item w3-button">Graphic Design</a>
                    <a href="#" className="w3-bar-item w3-button">Photography Portfolios</a>
                    <Link to="/web-design" className="w3-bar-item w3-button">Web Design</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header