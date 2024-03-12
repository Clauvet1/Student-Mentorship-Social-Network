import user1 from './assets/images/pic.jpg'
import SMM from './assets/images/peaple-connect.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMapLocation, faCalendarWeek, faCircleNodes } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return ( 
        <div className="main">
            <div className="content1">
                <div className="row">
                    <div className="col-lg-6 mb-5 col-md-6 col-sm-12">
                        <div className="orangeBox">
                        <h1 className='mb-5 fw-bold'>Get advice from Mentors</h1>
                        <p className='mb-5'>Talk with other successful students from your Institution, and become moltivated.</p>
                        <button className='btn bg-black rounded-5 text-white'>Find a mentor</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="box">
                            <div className="IMG">
                                <img className='IMG1 w-100 h-100' src={user1} alt="" />
                            </div>
                            <div className="boxContent w-75 m-auto ">
                                <h1>Clauvet Yome</h1>
                                <p className='ps-4'>Director of Scholar Institute</p>
                                <hr />
                                <h3 className='ps-4'>Scholar Institute</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="student-mentor-matching">
                <div className="row">
                    <div className="SMM col-lg-6 col-md-6 col-sm-12">
                        <h2 className='fw-bold my-4'>Student mentorship matching</h2>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faLanguage} />
                        <p>Language will be used to match mentee to a suitable mentor</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faMapLocation} />
                        <p>The geographical location of both the mentee and mentor is considered when matching</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faCalendarWeek} />
                        <p>Mentors schedule is considered when matching them with mentee, that is a mentor is available time is more likely to be a match</p>
                        </div>
                        <div className="line">
                        <FontAwesomeIcon className='icon-large' icon={faCircleNodes} />
                        <p>Both Mentee's and Mentor's shared interest are considered during the matching</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="IMG-SMM mx-auto">
                            <img className='w-100' src={SMM} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;