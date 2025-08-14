import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { colors } from '../utils';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate(); 

  return (
    <header className="header" style={{backgroundColor: colors.light, color: colors.dark }}>
        <img src={logo} className="logo" alt="logo" onClick={()=>{navigate("/")}}/>
        <div style={{display: 'flex', justifySelf: 'flex-end'}}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Curios">Curios</Link>
            </nav>
        </div>
    </header>
  );
}

export default NavBar;