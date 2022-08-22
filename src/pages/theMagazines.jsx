import axios from 'axios';
import classes from '../styles/sass/magazines.module.scss'
import { Carousel } from '@trendyol-js/react-carousel';
import {useState , useEffect} from 'react'
import Magazinescarousel from '../components/magazinesCarousel';

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
        <Magazinescarousel items={businesses}/>
        
        }
        <h1 className={classes.title}>Food Magazines</h1>
        
        {!foods ?
        <p>Magazines not found</p>
        :
        <Magazinescarousel items={foods}/>
        }

        <h1 className={classes.title}>Health Magazines</h1>
        
        {!health ?
        <p>Magazines not found</p>
        :
        <Magazinescarousel items={health}/>
        }

        <h1 className={classes.title}>Fitnesses Magazines</h1>
        
        {!fitnesses ?
        <p>Magazines not found</p>
        :
        <Magazinescarousel items={fitnesses}/>
        }

        <h1 className={classes.title}>Science Magazines</h1>
        
        {!science ?
        <p>Magazines not found</p>
        :
        <Magazinescarousel items={science}/>
        }
        

        </>
    )
}

export default theComic ;