
import { Carousel } from '@trendyol-js/react-carousel';
import classes from '../styles/sass/booksCarousel.module.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';



var swaping = false;
var itemShow =9.5;



const booksCarousel = ({items}) => {

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
    return (
        <>
        
        <Carousel show={itemShow} slide={1} transition={0.5} swiping={swaping}>
		
        { items.map((item) => {
          return (
            <Link to={`/books/${item.primary_isbn13}`}>
                <div key={item.rank}>
                    <li className={classes.li}>
                        <img src={item.book_image} />
                        <section className={classes.briffDesc}>
                            <h1 className={classes.resDesc}>{item.title}</h1>
                            <p className={classes.resDesc}>author - {item.author}</p>
                            <p className={classes.resDesc}>rank - {item.rank}</p>
                        </section>
                    </li>
                </div>
            </Link>
          );
        })        
    }
   
            </Carousel>

        </>
    );

}

export default booksCarousel;