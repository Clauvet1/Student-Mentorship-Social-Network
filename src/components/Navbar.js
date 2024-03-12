import logo from '../assets/images/sm1.png'
const Navbar = () => {
    return ( 
        <div className="bar shadow-lg rounded-5 p-1 fw-bold">
            <nav class="navbar navbar-expand-xxl  navbar-white bg-white rounded-5" aria-label="Seventh navbar example">
    <div className="container-fluid">
      <a className="navbar-brand mx-3" id='IMG-logo' href="https:\\google.com">
        <img className='w-100' src={logo} alt="Logo" /> SMentorship
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleXxl">
        <ul className="navbar-nav me-auto ms-5 mb-2 mb-sm-0">
        <li className="nav-item dropdown ms-5">
            <a className="nav-link dropdown-toggle ms-5" href="#" data-bs-toggle="dropdown" aria-expanded="false">Browse</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li>
        <form role="search" className="pe-5 me-2">
          <input className="form-control rounded-5 me-5 pe-5" id="search" type="search" placeholder="Search" aria-label="Search"/>
        </form>
        </li>
          <li className="nav-item ms-5 ps-5">
            <a className="nav-link active" aria-current="page" href="#">For mentors</a>
          </li>
          <li className="nav-item dropdown" >
            <a className="nav-link dropdown-toggle"  href="#" data-bs-toggle="dropdown" aria-expanded="false">More</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item" id="navMore">
            <a className="nav-link" href="#">Log in</a>
          </li>
          <li className="nav-item rounded-5" id="signUp">
            <a className="nav-link btn rounded-5" href="#">Sign up</a>
          </li>
        </ul>
      </div>
     
    </div>
  </nav>
  </div>
     );
}
 
export default Navbar;