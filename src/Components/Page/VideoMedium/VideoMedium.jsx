import React from "react";
import './VideoMedium.scss';
import { Link } from 'react-router-dom'
import Button from '../../Button/Button';
import {Context} from '../../../Context/Id'

// DownLoad Images from Assets
import like from '../../../Assets/Image/Navbar/like.svg'
import dislike from '../../../Assets/Image/Navbar/dislike.svg'
import share from '../../../Assets/Image/Navbar/share.svg'
import more from '../../../Assets/Image/Navbar/More.svg'
import FoodOrange from '../../../Assets/Image/Navbar/FoodOrange.svg';


function VideoMedium() {
    const {token} = React.useContext(Context)
    const [photos5, setPhotos5] = React.useState([]);
    
    React.useEffect(()=>{
        (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            
            const data = await response.json();
            
            if(data){
                setPhotos5(data)
            }
        })()
    },[]    )

    let foundImg = photos5.find((e)=> e.id == token)
    let filterdata = photos5.filter((e)=> e.albumId == foundImg.albumId)
    console.log(filterdata);

    return(
        <div className="video__container">
        <div className="video__container--1">
        
        { foundImg && (
            <div>
                <img className="video__img" src={foundImg.thumbnailUrl} alt="flowerVideow" width={1200} height={700}/>
                <h2 className="video__title">id: {foundImg.id} </h2>
            <h2 className="video__title">{foundImg.title} </h2>
            </div>
        )}
        
        <div className="video__box">
        
        <p className="video__text">123k views</p>
        
        <ul className="video__list">
        <li className="video__item">
        <button className="video__btn">
        <img src={like} alt="like" width={14} height={13}/>
        <p>123k</p>
        </button>
        </li>
        
        <li className="video__item">
        <button className="video__btn">
        <img src={dislike} alt="like" width={14} height={13}/>
        <p>123k</p>
        </button>
        </li>
        
        <li className="video__item">
        <button className="video__btn">
        <img src={share} alt="like" width={14} height={12}/>
        <p>123k</p>
        </button>
        </li>
        
        <li className="video__item">
        <button className="video__btn">
        <img src={more} alt="like" width={28} height={6}/>
        </button>
        </li>
        </ul>
        </div>
        
        <div className="video__box--1">
        
        <img className="food__orange" src={FoodOrange} alt="FoodOrange" width={80} height={80} />
        
        <div className="video__box--2">
        <div className="video__box--inner">
        <h3 className="video__box--title">Food & Drink</h3>
        
        <p className="video__box--text">Published on 14 Jun 2019</p>
        
        <p className="video__box--description">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
        
        <a className="video__box--link" href="#Link">Show more</a>
        </div>
        
        <div className='video__box--btn'>
        <Button text="Subscribe 2.3m" variant='secondary'/>
        </div>
        </div>
        </div>
        
        
        </div>
        
        <div className="video__container--2">
        <div className="next__autoplay">
        <p className='next'>Next</p>
        
        <div className="video__autoplay">
        <h2 className="autoplay">Autoplay</h2>

        <svg
      className="me-2"
      width="44"
      height="28"
      viewBox="0 0 44 28"
      fill="#2196F3"
      xmlns="http://www.w3.org/2000/svg"
      >
      <rect
      opacity="0.1"
      width="44"
      height="28"
      rx="14"
      fill="#EBEBEB"
      />
      <g filter="url(#filter0_dd_0_1579)">
      <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 26C36.6274 26 42 20.6274 42 14C42 7.37258 36.6274 2 30 2C23.3726 2 18 7.37258 18 14C18 20.6274 23.3726 26 30 26Z"
      fill="dark"
      />
      <path
      d="M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z"
      stroke="url(#paint0_linear_0_1579)"
      strokeWidth="0.6"
      />
      <path
      d="M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z"
      stroke="url(#paint1_linear_0_1579)"
      strokeWidth="0.6"
      />
      </g>
      <defs>
      <filter
      id="filter0_dd_0_1579"
      x="17"
      y="1"
      width="26"
      height="27"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
      >
      <feFlood
      floodOpacity="0"
      result="BackgroundImageFix"
      />
      <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
      />
      <feOffset dy="1" />
      <feGaussianBlur stdDeviation="0.5" />
      <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.237602 0"
      />
      <feBlend
      mode="normal"
      in2="BackgroundImageFix"
      result="effect1_dropShadow_0_1579"
      />
      <feColorMatrix
      in="SourceAlpha"
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      result="hardAlpha"
      />
      <feOffset />
      <feGaussianBlur stdDeviation="0.5" />
      <feColorMatrix
      type="matrix"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
      />
      <feBlend
      mode="normal"
      in2="effect1_dropShadow_0_1579"
      result="effect2_dropShadow_0_1579"
      />
      <feBlend
      mode="normal"
      in="SourceGraphic"
      in2="effect2_dropShadow_0_1579"
      result="shape"
      />
      </filter>
      <linearGradient
      id="paint0_linear_0_1579"
      x1="18.1174"
      y1="2"
      x2="18.1174"
      y2="25.7651"
      gradientUnits="userSpaceOnUse"
      >
      <stop stopOpacity="0.01" />
      <stop offset="0.8" stopOpacity="0.02" />
      <stop offset="1" stopOpacity="0.04" />
      </linearGradient>
      <linearGradient
      id="paint1_linear_0_1579"
      x1="18"
      y1="2"
      x2="18"
      y2="26"
      gradientUnits="userSpaceOnUse"
      >
      <stop stopColor="white" stopOpacity="0.12" />
      <stop
      offset="0.2"
      stopColor="white"
      stopOpacity="0.06"
      />
      <stop
      offset="1"
      stopColor="white"
      stopOpacity="0.01"
      />
      </linearGradient>
      </defs>
      </svg>
        </div>
        </div>
        
        
        <ul className="photo__list--5">
        {
            filterdata && filterdata.map(photo=>(
                <Link className="photo__link--5" to='/videoplayer'>
                <li className="photo__item--5" key={photo.id}>
                
                <img className="photo__image--5" src={photo.thumbnailUrl} alt="photourl" width={250} height={150}/>
                <h5 className="photo__title--5">{photo.id}</h5>
                <h5 className="photo__title--5">{photo.albumId}</h5>
                <p className="photo__title--5">{photo.title}</p>
                <div className="photo__description--5">
                <p className="photo__text1--5">123k views</p>
                <p className="photo__text2--5">Dollie Blair</p>
                
                </div>
                </li>
                </Link>
                ))
            }
            </ul>
            
            </div>
            
            
            
            
            
            
            
            
            </div>
            )
        }
        
        export default VideoMedium;