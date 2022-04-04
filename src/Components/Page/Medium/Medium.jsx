import React from "react";
import './Medium.scss';
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import {Context} from '../../../Context/Id'

// DownLoad Images from Assets

import greenpic from '../../../Assets/Image/Navbar/Greenpic.png'
import margaret from '../../../Assets/Image/Navbar/MargaretPhelps.svg';
import kolokolnik from '../../../Assets/Image/Navbar/kolokolnik.svg';
import searchIcon from '../../../Assets/Image/Navbar/searchicon.svg';
import akula from '../../../Assets/Image/Navbar/Akula.png';
import flora from '../../../Assets/Image/Navbar/Flora.svg';
import violet from '../../../Assets/Image/Navbar/Violet.svg';
import phillip from '../../../Assets/Image/Navbar/Phillip.svg';
import Left from '../../../Assets/Image/Navbar/Left.svg';
import Right from '../../../Assets/Image/Navbar/Right.svg';

function Medium() {

    const [photos4, setPhotos4] = React.useState([]);

    const { setToken } = React.useContext(Context)

    
    React.useEffect(()=>{
        (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            
            const data = await response.json();
            
            if(data){
                setPhotos4(data.slice(30, 40))
            }
            console.log(data);
        })()
    },[]    )

    const handleId = (e)=>{
        setToken(e.currentTarget.id);
    }
    
    return(
        <div className="medium__container">
        
        <img className="medium__img" src={greenpic} alt="Greenpicture" width={1500} height={250} />
        
        <div className="medium__hero--box">
        <img src={margaret} alt="Margaret" width={80} height={80} />
        
        <div className="medium__hero--name">
        
        <h2 className="medium__hero--title">Margaret Phelps</h2>
        <p className="medium__hero--text">245K subscribed</p>
        
        </div>
        
        <img className="medium__kolokolnik" src={kolokolnik} alt="kolokolnik" width={22} height={26} />
        
        <Button text="Subscribe 2.3m" variant='secondary'/>
        
        </div>
        
        <ul className="medium__list">
        <li className="medium__item medium__item--active">Home</li>
        <li className="medium__item">Videos</li>
        <li className="medium__item">Playlists</li>
        <li className="medium__item">Channels</li>
        <li className="medium__item">Discussion</li>
        <li className="medium__item">About</li>
        <img src={searchIcon} alt="SearchIcon" width={19} height={19} />
        </ul>
        
        <div className="medium__wrapper">
        <Link className="photo__link" to='/videoplayer'>
        <img src={akula} alt="Akula" width={540} height={250}/>
        </Link>
        
        <div className="medium__wrapper--box">
        <h2 className="medium__choose">Choosing The Best Audio Player Software For Your Computer</h2>
        <p className="medium__text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
        <p className="medium__text1">11k views  ·  6 months ago</p>
        </div>
        
        <ul className="people__list">
        <li className="people__item">
        <p className="people__rec">Recommended channel</p>
        </li>
        
        <li className="people__item">
        <img src={flora} alt="Flora Benson" width={50} height={50}/>
        <p className="people__name">Flora Benson</p>
        </li>
        
        <li className="people__item">
        <img src={violet} alt="Flora Benson" width={50} height={50}/>
        <p className="people__name">Violet Cobb</p>
        </li>
        
        <li className="people__item">
        <img src={phillip} alt="Flora Benson" width={50} height={50}/>
        <p className="people__name">Phillip Mullins</p>
        </li>
        
        </ul>
        
        </div>
        <h2 className="margaret__title">Margaret Phelps videos</h2>
        
        <img className="left__medium" src={Left} alt="left" width={28} height={28} />
        <img className="right" src={Right} alt="right" width={28} height={28} />
        <div>
        
        </div>
        
        <ul className="photo__list--4">
        {
            photos4 && photos4.map(photo=>(
                <Link className="photo__link" to='/videoplayer' key={photo.id}>
                <li onClick={handleId} className="photo__item--4" id={photo.id}>
                
                <img className="photo__image--4" src={photo.thumbnailUrl} alt="photourl" width={250} height={150}/>
                <h2 className="photo__id--4">id: {photo.id}</h2>
                <p className="photo__title--4">{photo.title}</p>
                <div className="photo__description--4">
                <p className="photo__text1--4">240k views  ·  4 months ago</p>
                <p className="photo__text2--4">Food & Drink</p>
                
                </div>
                </li>
                </Link>
                ))
            }
            </ul>
            </div>
            )
        }
        
        export default Medium;