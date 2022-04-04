import React from "react";
import './Centre.scss';
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import {Context} from '../../../Context/Id'

// DownLoad Images from Assets

import Dollie from '../../../Assets/Image/Navbar/DollieBlair.svg'
import Left from '../../../Assets/Image/Navbar/Left.svg';
import Right from '../../../Assets/Image/Navbar/Right.svg';
import FoodOrange from '../../../Assets/Image/Navbar/FoodOrange.svg';


function Centre() {
    const { setToken } = React.useContext(Context)
    
    const [photos1, setPhotos1] = React.useState([]);
    const [photos2, setPhotos2] = React.useState([]);
    const [photos3, setPhotos3] = React.useState([]);
    
    React.useEffect(()=>{
        (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            
            const data = await response.json();
            
            if(data){
                setPhotos1(data.slice(0, 50))
                setPhotos2(data.slice(50, 100))
                setPhotos3(data.slice(100, 150))
            }
        })()
    },[])
    
    const handleId = (e)=>{
        setToken(e.currentTarget.id);
    }
    
    return(
        <>
        <div className="centre__container">
        
        <div className="title__box--1">
        
        <img src={Dollie} alt="Dollie Blair" width={50} height={50}/>
        
        <Link className="photo__link" to='/channel'>
        
        <h2 className="dollie__blair">Dollie Blair</h2>
        
        </Link>
        
        <img className="left" src={Left} alt="left" width={28} height={28} />
        <img className="right" src={Right} alt="right" width={28} height={28} />
        
        </div>
        
        <ul className="photos__list--1">
        {
            photos1 && photos1.map(photo=>(
                <Link className="photo__link" to='/videoplayer' key={photo.id}>
                <li onClick={handleId} className="photos__item" id={photo.id} >
                
                <img className="photo__image" src={photo.thumbnailUrl} alt="photourl" width={250} height={150}/>
                <h2 className="photo__id">id: {photo.id}</h2>
                <p className="photo__title">{photo.title}</p>
                <div className="photo__description">
                <p className="photo__text1">80k views  ·  3 days ago</p>
                <p className="photo__text2">Dollie Blair</p>
                
                </div>
                </li>
                </Link>
                ))
            }
            </ul>
            
            
            
            <div className="title__box--2">
            
            <h2 className="rec__title">Recommended</h2>
            
            <img className="left" src={Left} alt="left" width={28} height={28} />
            <img className="right" src={Right} alt="right" width={28} height={28} />
            
            </div>
            
            
            
            <ul className="photos__list--2">
            {
                photos2 && photos2.map(photomoto=>(
                    <Link className="photo__link" to='/videoplayer' key={photomoto.id}>
                    <li onClick={handleId} className="photos__item" id={photomoto.id}>
                    
                    <img className="photomoto__image" src={photomoto.thumbnailUrl} alt="photourl" width={540} height={250}/>
                    <h2 className="photomoto__id">id: {photomoto.id}</h2>
                    <p className="photomoto__title">{photomoto.title}</p>
                    <p className="photomoto__text">34k views  ·  5 months ago</p>
                    </li>
                    </Link>
                    ))
                }
                </ul>
                
                
                <div className="title__box--3">
                
                <img className="food__orange" src={FoodOrange} alt="FoodOrange" width={50} height={50} />
                
                <Link className="photo__link" to='/channel'>
                <h2 className="food__title">Food & Drink</h2>
                </Link>
                <div className="food__div">
                <p className="food__text">Recommended channel for you</p>
                <Button text="Subscribe 2.3m"/>
                
                
                <img className="left1" src={Left} alt="left" width={28} height={28} />
                <img className="right" src={Right} alt="right" width={28} height={28} />
                </div>
                
                
                
                </div>
                
                <ul className="photos__list--3">
                {
                    photos3 && photos3.map(photomoto=>(
                        <Link className="photo__link" to='/videoplayer' key={photomoto.id}>
                        <li onClick={handleId} className="photos__item" id={photomoto.id} >
                        
                        <img className="photo3__image" src={photomoto.thumbnailUrl} alt="photourl" width={250} height={150}/>
                        <h2 className="photo__id">id: {photomoto.id}</h2>
                        <p className="photo3__title">{photomoto.title}</p>
                        <div className="photo__description">
                        <p className="photo3__text">240k views  ·  4 months ago</p>
                        <p className="photo3__text1">Food & Drink</p>
                        
                        </div>
                        </li>
                        </Link>
                        ))
                    }
                    </ul>
                    
                    
                    
                    
                    
                    
                    </div>
                    
                    </>
                    )
                }
                
                export default Centre;