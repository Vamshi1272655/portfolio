import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';
import "./styles.css";
import Wave from 'react-wavify';

const menuItems = [
    {
        title: "Home",
        id: "/",
        cName: "nav-links",
    },
    {
      title: "About",
      id: "/about",
      cName: "nav-links",
    },
    {
      title: "Projects",
      id: "projects",
      cName: "nav-links",
    },
    {
      title: "Experience",
      id: "experience",
      cName: "nav-links",
    },
];



const Header = () => {
  const [open, setOpen] = useState(false);
  const handelClick = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

    return (
      <div>
          <div className="navbar">
          <div className="navbar-toggle" onClick={handelClick}>
          {open ? <CloseIcon /> : <MenuIcon fontSize="large" />}
          </div>
            <div className="pname">Vamsh.S</div>
            <ul className={open?"mainnav1":"mainnav"} type="none">
            {menuItems.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className='link'
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
            </ul>
        </div>
        <div>
        <Wave
        className="wave"
        fill="#E3D4C5"
        paused={false}
        options={{
            height: 20,           
            amplitude: 20,    
            speed: 0.15,           
            points: 3,            
          }} 
      />
        </div>
      </div>
        
    );
}

export default Header;
