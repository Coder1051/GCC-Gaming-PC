import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import Header from './header';
import './css/navbar.css'

function Navigation() {
  const location = useLocation();
  // active navbar 
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Show on home route */}
      {location.pathname === "/" && (
        <div>
          <Header />
        </div>
      )}
      {/* Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: 'black', color: 'white' }}>
        <Container fluid='lg'>
          <Navbar.Brand as={Link} to="/">
            <img src="./images/gcclogo.png" alt="logo" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars style={{ color: 'white' }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/all-categories"
                className={`nav-item ${isActive('/all-categories') ? 'active' : 'text-white'}`}
              >
                ALL CATEGORIES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/pre-built-pc's"
                className={`nav-item ${isActive('/pre-built-pc\'s') ? 'active' : 'text-white'}`}
              >
                PRE BUILT PC'S
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/pc-components"
                className={`nav-item ${isActive('/pc-components') ? 'active' : 'text-white'}`}
              >
                PC COMPONENTS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/accessories"
                className={`nav-item ${isActive('/accessories') ? 'active' : 'text-white'}`}
              >
                ACCESSORIES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/hot-deals"
                className={`nav-item ${isActive('/hot-deals') ? 'active hot-deals' : 'text-danger'}`}
              >
                HOT DEALS
              </Nav.Link>
            </Nav>

            {/* Search div */}
            <div className="angled-search-container">
              <div className="angled-search-box">
                <input
                  type="search"
                  placeholder="Search by products, brands or keywords"
                  className="angled-search-input"
                  aria-label="Search"
                />
                <button className="angled-search-button">
                  <FaSearch />
                </button>
              </div>
            </div>
            <Nav className="d-flex flex-row">
              <Nav.Link as={Link} to="/profile" className="text-white me-2">
                <FaUser size={20} />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-white">
                <FaShoppingCart size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;