
import classes from '../styles/sass/books.module.scss';
import axios from 'axios';
import {useState ,useEffect} from 'react'
import Bookscarousel from '../components/booksCarousel';


const theBooks=()=> {
 const [fictions, setFiction] = useState(null);
 const [businesses, setBusinesses] = useState(null);
 const [healths, setHealths] = useState(null);
 const [sciences, setSciences] = useState(null);

    const fetchBooks= async ()=> {
        try {
            const res1 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Xr1uLqm2CGYORpVkPh8u1UgqeZZS6aUF"
                );

            const res2 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Business-books.json?api-key=wunst8t6GtpdeONjTcpVtBA5tMVEoHzn"
                );
            const res3 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Health.json?api-key=x1oX1sIsPci1GfxnBEmuAEpsy283EN5A"
                );
            const res4 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Science.json?api-key=DoLQkfxZ5AdNqff1OZO29zYjMoGcRA1i"
                );

                
                setFiction(res1.data.results.books);
                setBusinesses(res2.data.results.books);
                setHealths(res3.data.results.books);
                setSciences(res4.data.results.books);
                
            } catch (e) {
                console.log(e);
            }
        };
        
        
        useEffect(() => {
        fetchBooks();
      }, []);

               

    return (
        <>

        <h1 className={classes.title}>Top 15 Fiction Books</h1>
        {!fictions ?
        <p>books not found</p>
        :
        <Bookscarousel items={fictions}/>
        }

        <h1 className={classes.title}>Top 10 business Books</h1>

        {!businesses ?
        <p>books not found</p>
        :
        <Bookscarousel items={businesses}/>
        }

        <h1 className={classes.title}>Top 10 health Books</h1>

        {!healths ?
        <p>books not found</p>
        :
        <Bookscarousel items={healths}/>
        }

        <h1 className={classes.title}>Top 10 science Books</h1>

        {!sciences ?
        <p>books not found</p>
        :
        <Bookscarousel items={sciences}/>
        }

        </>
    )
}

export default theBooks ;
