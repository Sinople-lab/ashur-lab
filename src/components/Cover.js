import './../styles/W3Style.css'
import './../styles/mystyle.css'

const Cover = () => {
  return (
    <div className="w3-display-container w3-padding-large w3-animate-opacity w3-text-white cover">
        
        <div className="w3-topleft w3-padding-large w3-xlarge">
            Martin Carballo
        </div>
        
        <div className='w3-display-middle'>
            <h1 className="w3-jumbo w3-center">Ashur Lab</h1>
            <hr className="w3-border-grey"/>
            <p className="w3-large w3-center"> My Creative Corner </p>
        </div>
        
    </div>
  )
}

export default Cover