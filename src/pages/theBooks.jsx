import classes from '../styles/sass/books.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';
import axios from 'axios';
import {useState ,useEffect} from 'react'


const theBooks=()=> {
 const [items, setItems] = useState(null);

    const fetchBooks= async ()=> {
        try {
            const res = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
                // console.log(res);
                setItems(res.data.results.books);
                
            } catch (e) {
                console.log(e);
            }
        };
        
        
        useEffect(() => {
        fetchBooks();
      }, []);

               
    console.log(items)

    return (
        <>
        
        <h1>Top 10...</h1>
        {items &&
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { items.map((item) => {
          return (
            <div key={item.rank}>
                <li className={classes.li}>
                    <img src={item.book_image} />
                    <h1>{item.title}</h1>
                    <p>{item.author}</p>
                    <p>{item.rank}</p>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>}
        </>
    )
}

export default theBooks ;
