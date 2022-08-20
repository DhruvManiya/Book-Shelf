import classes from '../styles/sass/homePage.module.scss';
import axios from 'axios';
import {useState , useEffect, useId} from 'react'



  
function homePage() {
    const [searchValue,setSearchValue] = useState('');
    const [items,setItems] = useState([]);
    
    useEffect(()=>{
        
        getUser(searchValue.replaceAll(" ",''));

    },[searchValue]);
    
 
    

    async function getUser(userSerch) {
        try {
          const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q= + ${userSerch} +intitle+&orderBy=newest&projection=full&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
          console.log(userSerch);
          console.log(res);
          if(!res.data.hasOwnProperty('items')){
            setItems([]);
          }else{
            setItems(res.data.items);
          }
          console.log(res.data.items)
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className={classes.mainSection}>
            <h1 className={classes.heading}>Search your next book</h1>
            <input type="search" placeholder="Search books by it's name" onChange={e => setSearchValue(e.target.value)}/>
            <div className={classes.div}>
                <ul className={classes.ul}>
                
                {
                !items.length ? 
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
            <p>We gives rating of books so your next book become better for you</p>
        </div>


    )
}

export default homePage ;