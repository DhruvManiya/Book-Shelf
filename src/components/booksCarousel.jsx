
import { Carousel } from '@trendyol-js/react-carousel';
import classes from '../styles/sass/booksCarousel.module.scss'


var swaping = false;
var itemShow =9.5;



const booksCarousel = ({items}) => {

    return (
        <>
        
        <Carousel show={itemShow} slide={1} transition={0.5} swiping={swaping}>
		
        { items.map((item) => {
          return (
            <div key={item.rank}>
                <li className={classes.li}>
                    <img src={item.book_image} />
                    <section className={classes.briffDesc}>
                        <h1>{item.title}</h1>
                        <p>author - {item.author}</p>
                        <p>rank - {item.rank}</p>
                    </section>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>

        </>
    );

}

export default booksCarousel;