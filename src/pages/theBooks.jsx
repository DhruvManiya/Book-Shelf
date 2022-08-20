
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
            const res2 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Business-books.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res3 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Health.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res4 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Science.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res5 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Sports.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res6 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Travel.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res7 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Family.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
            const res1 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
                console.log(res1);
                console.log(res2);
                console.log(res3);
                console.log(res4);
                console.log(res5);
                console.log(res6);
                console.log(res7);
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
        
        <h1>Top 15 Fiction Books</h1>
        {items &&
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { items.map((item) => {
          return (
            <div key={item.rank}>
                <li className={classes.li}>
                    <img src={item.book_image} />
                    <h1>{item.title}</h1>
                    <p>author - {item.author}</p>
                    <p>rank - {item.rank}</p>
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