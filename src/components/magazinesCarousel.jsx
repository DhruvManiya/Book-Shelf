import { Carousel } from '@trendyol-js/react-carousel';
import classes from '../styles/sass/magazinesCarousel.module.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';




const magazinesCarousel = ({items}) => {

    const[itemShow , setItemShow] = useState(null)
    const[swaping , setSwaping] = useState(false)
    function respon(){
        let responsiveWidth = window.innerWidth;

        if (responsiveWidth >= 1750) {
            setItemShow(9.5);
        }
        else if (responsiveWidth >= 1600) {
            setItemShow(8.5)
        }
        else if (responsiveWidth >= 1400) {
            setItemShow(7.5)
        }
        else if (responsiveWidth >= 1200) {
            setItemShow(6.5)
        }
        else if (responsiveWidth >= 1000) {
            setItemShow(5.5)
        }
        else if (responsiveWidth >= 800) {
            setItemShow(4.5)
            setSwaping(true)
        }
        else if (responsiveWidth >= 600) {
            setItemShow(3.5)
            setSwaping(true)
        }
        else if (responsiveWidth >= 450) {
            setItemShow(2.5)
            setSwaping(true)
        }
        else if (responsiveWidth >= 320) {
            setItemShow(1.5)
            setSwaping(true)
        }

}

useEffect(()=>{
    respon();
},[])
    console.log(itemShow);
    return(
        <>
        
            <Carousel show={itemShow} slide={1} swiping={swaping} >
            

            {items.map((item) => {
                return <Link to={`/magazines/${item.id}`}>
                    <li className={classes.li} key={item.id}>
                        {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                        <section className={classes.briffDesc}>
                            {!item.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1 className={classes.resDesc}>{item.volumeInfo.title}</h1>}
                            {!item.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p className={classes.resDesc}>published in : {item.volumeInfo.publishedDate}</p>}
                            {!item.volumeInfo.hasOwnProperty('language') ? <i></i> :<p className={classes.resDesc}><i>language - </i><b>{item.volumeInfo.language}</b></p>}
                        </section>
                    </li>
                </Link>
            })}

            </Carousel>
        
        </>
    )
}

export default magazinesCarousel;