import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h1 className="text-secondary">You can get to Us through our<br/> <span className="fs-2 text-primary"> social media platforms</span><br/></h1>
                            
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h2 className="text-white fs-3 mb-3">Countries where Our Services are available</h2>
                            <ul >
                                <li><a href="#" className="text-decoration-none text-white">Cameroon</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Nigeria</a></li>
                                <li><a href="#" className="text-decoration-none text-white">USA</a></li>
                                <li><a href="#" className="text-decoration-none text-white">England</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Ghana</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Mexico...</a></li>
                            </ul>
                            </div>                    
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-box">
                                <h2 className="text-white fs-3">Contact</h2>
                                <p className="text-info fs-5">You can email us and</p>
                                <h2 className="text-info fs-5 mb-5">Follow us on</h2>
                                <p className="socials">
                                    <a href="https://github.com/Clauvet1" className="text-decoration-none text-white"><img className="btnIMG rounded-circle p-2" src="" alt=""/></a> 
                                    <a href="" className="text-decoration-none text-white"><img  className="btnIMG rounded-circle p-2"src="" alt=""/></a>
                                        <a href=""><FontAwesomeIcon className='icon-large' icon={faGithub} /></a>
                                        <a href=""><FontAwesomeIcon className='icon-large' icon={faWhatsapp} /></a>
                                        <a href=""><FontAwesomeIcon className='icon-large' icon={faXTwitter} /></a>
                                        
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-secondary">2024 All Rights Reserved.Designed by Clauvet Yome M.</p>
                </div>
                </div>
     );
}
 
export default Footer;