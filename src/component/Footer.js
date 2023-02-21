import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return (
        <footer>
            <div>
              <div className='ic'>
                 <a href='mailto:info.rehack@gmail.com?'><FontAwesomeIcon size='2x' icon={faEnvelope} /></a>
                 <a href='https://github.com/o1ujok3/ReHACK'><FontAwesomeIcon size='2x' icon={faGithub} /></a>
              </div>
              <p>© ReHack Company</p> 

            </div>
            
        </footer>
    )
}

export default Footer;