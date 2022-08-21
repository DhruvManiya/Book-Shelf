import axios from 'axios';
import classes from '../styles/sass/magazines.module.scss'
import { Carousel } from '@trendyol-js/react-carousel';
import {useState , useEffect} from 'react'

var swaping = false;
var itemShow =9.5;

function theComic() {
    const [businesses,setBusinesses] = useState(null);
    const [foods,setFoods] = useState(null);
    const [fitnesses,setFitnesses] = useState(null);
    const [science,setScience] = useState(null);
    const [health,setHealth] = useState(null);
    
  async function fetchMagazine() {
        try {
            const res1 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Business+subject&maxResults=20&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            const res2 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Food+subject&maxResults=20&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            const res3 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Fitness+subject&maxResults=20&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            const res4 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Science+subject&maxResults=20&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            const res5 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Health+subject&maxResults=20&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            if(!res1.data.hasOwnProperty('items')){
                setBusinesses(null);
            }else{
                setBusinesses(res1.data.items);
            }
            if(!res2.data.hasOwnProperty('items')){
                setFoods(null);
            }else{
                setFoods(res2.data.items);
            }
            if(!res3.data.hasOwnProperty('items')){
                setFitnesses(null);
            }else{
                setFitnesses(res3.data.items);
            }
            if(!res4.data.hasOwnProperty('items')){
                setScience(null);
            }else{
                setScience(res4.data.items);
            }
            if(!res5.data.hasOwnProperty('items')){
                setHealth(null);
            }else{
                setHealth(res5.data.items);
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    
    useEffect(() => {
        fetchMagazine();
      }, []);
    return (
        <>


        <h1 className={classes.title}>Business Magazines</h1>
        
        {!businesses ?
        <p>books not found</p>
        :
        <Carousel show={itemShow} slide={1} swiping={swaping} >
		

        {businesses.map((business) => {
            return <li className={classes.li} key={business.id}>
                {!business.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={business.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!business.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{business.volumeInfo.title}</h1>}
                    {!business.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {business.volumeInfo.publishedDate}</p>}
                    {!business.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{business.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}
        <h1 className={classes.title}>Food Magazines</h1>
        
        {!foods ?
        <p>Magazines not found</p>
        :
        <Carousel show={itemShow} slide={1} swiping={swaping} >
		

        {foods.map((food) => {
            return <li className={classes.li} key={food.id}>
                {!food.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={food.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!food.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{food.volumeInfo.title}</h1>}
                    {!food.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {food.volumeInfo.publishedDate}</p>}
                    {!food.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{food.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}

        <h1 className={classes.title}>Health Magazines</h1>
        
        {!health ?
        <p>Magazines not found</p>
        :
        <Carousel show={itemShow} slide={1} swiping={swaping} >
		

        {health.map((item) => {
            return <li className={classes.li} key={item.id}>
                {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!item.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{item.volumeInfo.title}</h1>}
                    {!item.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {item.volumeInfo.publishedDate}</p>}
                    {!item.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{item.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}

        <h1 className={classes.title}>Fitnesses Magazines</h1>
        
        {!fitnesses ?
        <p>Magazines not found</p>
        :
        <Carousel show={itemShow} slide={1} swiping={swaping} >
		

        {fitnesses.map((fitness) => {
            return <li className={classes.li} key={fitness.id}>
                {!fitness.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={fitness.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!fitness.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{fitness.volumeInfo.title}</h1>}
                    {!fitness.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {fitness.volumeInfo.publishedDate}</p>}
                    {!fitness.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{fitness.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}
        <h1 className={classes.title}>Science Magazines</h1>
        
        {!science ?
        <p>Magazines not found</p>
        :
        <Carousel show={itemShow} slide={1} swiping={swaping} >
		

        {science.map((item) => {
            return <li className={classes.li} key={item.id}>
                {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!item.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{item.volumeInfo.title}</h1>}
                    {!item.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {item.volumeInfo.publishedDate}</p>}
                    {!item.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{item.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}
        

        </>
    )
}

export default theComic ;