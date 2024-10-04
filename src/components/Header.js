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
            parent:'Photography',
            link:'/'
        },
        {
            id:12,
            title:'Nature',
            parent:'Photography',
            link:'/'
        },
        {
            id:13,
            title:'Fine Art',
            parent: 'Photography',
            link:'/'
        },
        {
            id:21,
            title:'Watercolor Painting',
            parent:'Fine Art',
            link:'/'
        },
        {
            id:22,
            title:'Drawings',
            parent:'Fine Art'
        },
        {
            id:31,
            title:'Video Games',
            parent: 'Animations',
            link:'/'
        },
        {
            id:32,
            title: '2D animations',
            parent:'Animations',
            link:'/'
        },
        {
            id:33,
            title:'Math',
            parent:'Animations',
            link:'/'
        },
        {
            id:41,
            title:'Graphic Design',
            parent:'Web Design',
            link:'/web-design'
        },
        {
            id:42,
            title:'Photography Portfolios',
            parent:'Web Design',
            link:'/'
        },
        {
            id:43,
            title:'Landing Page',
            parent:'Web Design',
            link:'/web-design'
        }

    ])
    
    return (
        <div id='home' className="container blue-gray header">
            
            <h1><Link to="/" >My Art Studio </Link></h1>
            <p> 
                This is my art corner where I organize my creative work
                sorted by the field it belongs to and the type of work.
            </p>
        
            {/* Nav bar */}
            <div className="bar light-grey menus">
                <a href="https://sinople-lab.github.io/home" target="_self" className="bar-item button">About Me</a>

                {categories.map((category)=>(
                    <div className="dropdown-hover">
                        <button key={category.id} className="button">{category.title}</button>
                        <div className="dropdown-content bar-block card-4" >
                            {subcategories.map((child)=> (
                                child.parent === category.title ? <a key={child.id} href={child.link} className="bar-item button">{child.title}</a> : "")
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header
