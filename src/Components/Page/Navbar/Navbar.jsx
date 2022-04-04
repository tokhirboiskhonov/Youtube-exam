import React, { useRef } from "react";
import './Navbar.scss';
import { Link, NavLink } from "react-router-dom";
import languages from "../../Localization/Languages";
import useLanguages from "../../../Hooks/useLanguages";

// DownLoad Images from Assets

import Hamburger from '../../../Assets/Image/Navbar/Hamburger.svg';
import Youtube from '../../../Assets/Image/Navbar/Logo.svg';
import Home from '../../../Assets/Image/Navbar/Home.svg';
import Trending from '../../../Assets/Image/Navbar/Trending.svg';
import Subscriptions from '../../../Assets/Image/Navbar/Subscriptions.svg';
import Library from '../../../Assets/Image/Navbar/Library.svg';
import History from '../../../Assets/Image/Navbar/History.svg';
import WatchLater from '../../../Assets/Image/Navbar/WatchLater.svg';
import Favourites from '../../../Assets/Image/Navbar/Favourites.svg';
import Liked from '../../../Assets/Image/Navbar/Liked.svg';
import Music from '../../../Assets/Image/Navbar/Music.svg';
import Games from '../../../Assets/Image/Navbar/Games.svg';
import ShowMore from '../../../Assets/Image/Navbar/ShowMore.svg';
import Gussie from '../../../Assets/Image/Navbar/Gussie.svg';
import Nora from '../../../Assets/Image/Navbar/Nora.svg';
import Belle from '../../../Assets/Image/Navbar/Belle.svg';
import Eunice from '../../../Assets/Image/Navbar/Eunice.svg';
import Emma from '../../../Assets/Image/Navbar/Emma.svg';
import Leah from '../../../Assets/Image/Navbar/Leah.svg';
import Setting from '../../../Assets/Image/Navbar/Setting.svg';

function Navbar() {
    
    const [show, setShow] = React.useState(false);
    
    const [lang, setLang] = useLanguages()
    
    const HamburgerClick = useRef();
    
    const BurgerOn = useRef();
    
    const BurgerStop = useRef();
    
    return(
        <>
        <nav className='nav'>
        
        <div className="ham__youtube">
        <img className="hamburger__img" src={Hamburger} ref={BurgerStop} alt="Hamburger" width={20} height={17} onClick={()=>{
            HamburgerClick.current.style.marginLeft = "-200px"
            BurgerOn.current.style.display = "block"
            BurgerStop.current.style.display = "none"
        }} />
        
        <img className="onHamburger__img" src={Hamburger} ref={BurgerOn} alt="Hamburger" width={20} height={17} onClick={()=>{
            HamburgerClick.current.style.marginLeft = "0px"
            BurgerOn.current.style.display = "none"
            BurgerStop.current.style.display = "block"
        }} />
        
        <a href="#Link">
        <img className="youtube__logo" src={Youtube} alt="Youtube-logo" width={116} height={25} />
        </a>
        </div>
        
        <select className="select__languages" value={lang} onChange={(evt)=>setLang(evt.target.value)}>
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        </select>
        <div className="nav__centre" ref={HamburgerClick}>
        
        <ul className="nav__list">
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Home} alt="Home" width={20} height={19}/>
        </a>
        <NavLink className='nav__link' to='/'>{languages[lang].navbar.nav.navItem1}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Trending} alt="Trending" width={16} height={21}/>
        </a>
        <NavLink className='nav__link' to='/trending'>{languages[lang].navbar.nav.navItem2}</NavLink>
        </li>
        
        <li className="nav__item nav__item--mr">
        <a href="#Link">
        <img className="nav__img" src={Subscriptions} alt="Subscriptions" width={18} height={18}/>
        </a>
        <NavLink className='nav__link' to='/subscriptions'>{languages[lang].navbar.nav.navItem3}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Library} alt="Library" width={20} height={16}/>
        </a>
        <NavLink className='nav__link' to='/library'>{languages[lang].navbar.nav.navItem4}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={History} alt="History" width={20} height={18}/>
        </a>
        <NavLink className='nav__link' to='/history'>{languages[lang].navbar.nav.navItem5}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={WatchLater} alt="Watch later" width={17} height={19}/>
        </a>
        <NavLink className='nav__link' to='/watchlater'>{languages[lang].navbar.nav.navItem6}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Favourites} alt="Favourites" width={19} height={18}/>
        </a>
        <NavLink className='nav__link' to='/favourites'>{languages[lang].navbar.nav.navItem7}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Liked} alt="Liked videos" width={18} height={17}/>
        </a>
        <NavLink className='nav__link' to='/likedvideos'>{languages[lang].navbar.nav.navItem8}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Music} alt="Music" width={18} height={20}/>
        </a>
        <NavLink className='nav__link' to='/music'>{languages[lang].navbar.nav.navItem9}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={Games} alt="Games" width={22} height={16}/>
        </a>
        <NavLink className='nav__link' to='/games'>{languages[lang].navbar.nav.navItem10}</NavLink>
        </li>
        
        <li className="nav__item">
        <a href="#Link">
        <img className="nav__img" src={ShowMore} alt="Show More" width={13} height={7}/>
        </a>
        <NavLink className='nav__links' to='/'onClick={()=>{setShow(!show)}}>{languages[lang].navbar.nav.navItem11}</NavLink>
        </li>
        </ul>
        <div className={show && 'channel__show'}>
        
        <h2 className="channel__title">Subscriptions</h2>
        
        <ul className="channel__list">
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Gussie} alt="Gussie Singleton" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Gussie Singleton</Link >
        </li>
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Nora} alt="Nora Francis" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Nora Francis</Link>
        </li>
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Belle} alt="Belle Briggs" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Belle Briggs</Link>
        </li>
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Eunice} alt="Eunice Cortez" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Eunice Cortez</Link>
        </li>
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Emma} alt="Emma Hanson" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Emma Hanson</Link>
        </li>
        
        <li className="channel__item">
        <a href="#Link">
        <img className="channel__img" src={Leah} alt="Leah Berry" width={26} height={26}/>
        </a>
        <Link className="channel__link" to='/channel'>Leah Berry</Link>
        </li>
        </ul>
        </div>
        </div>
        
        <div className="setting__box">
        <img src={Setting} alt="Setting" width={19} height={20} />
        <p className="setting">Setting</p>
        </div>
        
        
        
        </nav>
        </>
        )
    }
    
    export default Navbar;