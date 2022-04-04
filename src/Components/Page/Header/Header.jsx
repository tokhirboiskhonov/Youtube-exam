import React from 'react';
import './Header.scss';

// DownLoad Images from Assets

import Camera from '../../../Assets/Image/Navbar/camera.svg'
import Prilojeniya from '../../../Assets/Image/Navbar/prilojeniya.svg';
import Kolokolnik from '../../../Assets/Image/Navbar/kolokolnik.svg';
import Userpic from '../../../Assets/Image/Navbar/Userpic.svg';


function Header() {
    return(
        <>
        <div className="header__container">
            
        <div className="header">
        <input
        className="input"
        type="text"
        placeholder="Search" />
        
        <ul className="img__list">

        <li className="img__item">
        <img className="medium__images medium__images--1" src={Camera} alt="Camera" width={27} height={20} />
        </li>
        
        <li className="img__item">
        <img className="medium__images" src={Prilojeniya} alt="Camera" width={21} height={21} />
        </li>
        
        <li className="img__item">
        <img className="medium__images" src={Kolokolnik} alt="Camera" width={22} height={26} />
        </li>
        
        <li className="img__item">
        <img className="medium__images" src={Userpic} alt="Camera" width={40} height={40} />
        </li>
        
        </ul>
        </div>
        </div>
        
        </>
    )
}
export default Header;