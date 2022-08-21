import axios from 'axios';
import classes from '../styles/sass/magazines.module.scss'
import { Carousel } from '@trendyol-js/react-carousel';
import {useState , useEffect} from 'react'


function theComic() {
    const [magazines,setMagazines] = useState(null);
    const [searchValue,setSearchValue] = useState('');
    const [items,setItems] = useState([]);
    
    useEffect(()=>{
        
        getUser(searchValue.trim().replaceAll(" ",'+'));
        setItems([]);

    },[searchValue]);
    
 
    

    async function getUser(userSerch) {
        try {
          const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+${userSerch}+intitle&printType=magazines&projection=full&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
          console.log(userSerch);
          if(!res.data.hasOwnProperty('items') && userSerch === ''){
            setItems([]);
          }else{
            setItems(res.data.items);
          }
        } catch (error) {
          console.error(error);
        }
      };

    async function fetchMagazine() {
        try {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Magazine&printType=magazines&orderBy=newest&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            if(!res.data.hasOwnProperty('items')){
                setMagazines(null);
            }else{
                setMagazines(res.data.items);
            }
        } catch (error) {
            console.error(error);
        }
    };
    console.log(items);
    
    useEffect(() => {
        fetchMagazine();
      }, []);
    return (
        <>
            
        <div className={classes.mainSection}>
            <h1 className={classes.heading}>Search your magazine</h1>
            <input type="search" placeholder="Search magazines by it's name" onChange={e => setSearchValue(e.target.value)}/>
            <div className={classes.div}>
                <ul className={classes.ul}>
                
                {
                !items ? 
                    <p>Items Not Found</p>
                : 
                    items.map((item) => {
                        return <li key={item.id}>
                            {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt={searchValue}/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                            <div className={classes.bookAutherTitle}>
                            {!item.volumeInfo.hasOwnProperty('title') ? <p></p> : <p>{item.volumeInfo.title}</p>}
                            {!item.volumeInfo.hasOwnProperty('authors') ? <i></i> :<i>{item.volumeInfo.authors[0]}</i>}
                            </div>
                        </li>
                    })
                
                }
                </ul>
            </div>
            
        </div>


        <h1 className={classes.title}>Top 10 Magazines</h1>
        
        
        
        
        
        {!magazines ?
        <p>books not found</p>
        :
        <Carousel show={9.5} slide={1} swiping={false} >
		

        {magazines.map((magazine) => {
            return <li className={classes.li} key={magazine.id}>
                {!magazine.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={magazine.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!magazine.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1>{magazine.volumeInfo.title}</h1>}
                    {!magazine.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p>published in : {magazine.volumeInfo.publishedDate}</p>}
                    {!magazine.volumeInfo.hasOwnProperty('language') ? <i></i> :<p><i>language - </i><b>{magazine.volumeInfo.language}</b></p>}
                </section>
            </li>
        })}

        </Carousel>}


        </>
    )
}

export default theComic ;