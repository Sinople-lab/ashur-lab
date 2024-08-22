import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [hidden, setHidden] = useState(true);
    const [categories, setCategories] = useState([
        {
            id:1,
            title:'Photography'
        },
        {
            id:2,
            title:'Fine Art'
        },
        {
            id:3,
            title:'Animations'
        },
        {
            id:4,
            title:'Web Design'
        }
    ])
    const [subcategories ,setSubcategories] = useState([
        {
            id:11,
            title:'Landscapes',
            parent:'Photography'
        },
        {
            id:12,
            title:'Nature',
            parent:'Photography'
        },
        {
            id:13,
            title:'Fine Art',
            parent: 'Photography'
        },
        {
            id:21,
            title:'Watercolor Painting',
            parent:'Fine Art'
        },
        {
            id:22,
            title:'Drawings',
            parent:'Fine Art'
        },
        {
            id:31,
            title:'Video Games',
            parent: 'Animations'
        },
        {
            id:32,
            title: '2D animations',
            parent:'Animations'
        },
        {
            id:33,
            title:'Math',
            parent:'Animations'
        },
        {
            id:41,
            title:'Graphic Design',
            patent:'Web Design'
        },
        {
            id:42,
            title:'Photography Portfolios',
            parent:'Web Design'
        },
        {
            id:43,
            title:'Landing Page',
            parent:'Web Design'
        }

    ])
    
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

                {categories.map((category)=>(
                    <div className="w3-dropdown-hover">
                        <button key={category.id} className="w3-button">{category.title}</button>
                        <div className="w3-dropdown-content w3-bar-block w3-card-4" onMouseEnter={() => setHidden(false)}onMouseLeave={() => setHidden(true)} >
                        {subcategories.map((child)=> (
                            child.parent === category.title ? <a key={child.id} href="/" className="w3-bar-item w3-button">{child.title}</a> : "")
                        )}
                        </div>
                    </div>
                ))}
                {/* <div className="w3-dropdown-hover">
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
                </div> */}
            </div>    
        </div>
    )
}

export default Header