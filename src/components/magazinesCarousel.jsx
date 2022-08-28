import { Carousel } from '@trendyol-js/react-carousel';
import classes from '../styles/sass/magazinesCarousel.module.scss'
import { Link } from 'react-router-dom';


var swaping = false;
var itemShow =9.5;


const magazinesCarousel = ({items}) => {

    return(
        <>
        
            <Carousel show={itemShow} slide={1} swiping={swaping} >
            

            {items.map((item) => {
                return <Link to={`/magazines/${item.id}`}>
                    <li className={classes.li} key={item.id}>
                        {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                        <section className={classes.briffDesc}>
                            {!item.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{item.volumeInfo.title}</h1>}
                            {!item.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {item.volumeInfo.publishedDate}</p>}
                            {!item.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{item.volumeInfo.language}</b></p>}
                        </section>
                    </li>
                </Link>
            })}

            </Carousel>
        
        </>
    )
}

export default magazinesCarousel;