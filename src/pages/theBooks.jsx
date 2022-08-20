
import classes from '../styles/sass/books.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';
import axios from 'axios';
import {useState ,useEffect} from 'react'


const theBooks=()=> {
 const [fictions, setFiction] = useState(null);
 const [businesses, setBusinesses] = useState(null);
 const [healths, setHealths] = useState(null);
 const [sciences, setSciences] = useState(null);
 const [family, setFamily] = useState(null);

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
            const res7 = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/Family.json?api-key=QUFhu0pHaPXsUmlQl23DCCECJrkyJz1r"
                );
                
                setFiction(res1.data.results.books);
                setBusinesses(res2.data.results.books);
                setHealths(res3.data.results.books);
                setSciences(res4.data.results.books);
                setFamily(res7.data.results.books);
                
            } catch (e) {
                console.log(e);
            }
        };
        
        
        useEffect(() => {
        fetchBooks();
      }, []);

               

    return (
        <>

        <h1>Top 15 Fiction Books</h1>
        {!fictions ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { fictions.map((fiction) => {
          return (
            <div key={fiction.rank}>
                <li className={classes.li}>
                    <img src={fiction.book_image} />
                    <h1>{fiction.title}</h1>
                    <p>author - {fiction.author}</p>
                    <p>rank - {fiction.rank}</p>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>}

        <h1>Top 10 business Books</h1>

        {!businesses ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { businesses.map((business) => {
          return (
            <div key={business.rank}>
                <li className={classes.li}>
                    <img src={business.book_image} />
                    <h1>{business.title}</h1>
                    <p>author - {business.author}</p>
                    <p>rank - {business.rank}</p>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>}

        <h1>Top 10 health Books</h1>

        {!healths ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { healths.map((health) => {
          return (
            <div key={health.rank}>
                <li className={classes.li}>
                    <img src={health.book_image} />
                    <h1>{health.title}</h1>
                    <p>author - {health.author}</p>
                    <p>rank - {health.rank}</p>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>}

        <h1>Top 10 science Books</h1>

        {!sciences ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { sciences.map((science) => {
          return (
            <div key={science.rank}>
                <li className={classes.li}>
                    <img src={science.book_image} />
                    <h1>{science.title}</h1>
                    <p>author - {science.author}</p>
                    <p>rank - {science.rank}</p>
                </li>
            </div>
          );
        })        
    }
   
            </Carousel>}


        <h1>Top 10 family Books</h1>

        {!family ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        { family.map((mamber) => {
          return (
            <div key={mamber.rank}>
                <li className={classes.li}>
                    <img src={mamber.book_image} />
                    <h1>{mamber.title}</h1>
                    <p>author - {mamber.author}</p>
                    <p>rank - {mamber.rank}</p>
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
