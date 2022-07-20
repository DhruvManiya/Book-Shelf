import classes from '../styles/sass/homePage.module.scss';
import axios from 'axios';
import {useState , useEffect} from 'react'



  
function homePage() {
    const [searchValue,setSearchValue] = useState('');
    const [items,setItems] = useState([]);
    console.log(searchValue);
    
    useEffect(()=>{
        
        getUser(searchValue);

    },[searchValue]);
    
 
    

    async function getUser(userSerch) {
        try {
          const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q= + ${userSerch} + &orderBy=newest&projection=full&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
          console.log(res);
          setItems(res.data.items);
        } catch (error) {
          console.error(error);
        }
      };

const [displayUl,setDisplayUl] = useState(false);

   
useEffect(()=>{
        

    if(searchValue===''){
        setDisplayUl(true);
    }


},[searchValue]);


    return (
        <div className={classes.mainSection}>
            <h1 className={classes.heading}>Search your next book</h1>
            <input type="search" placeholder="Search books by it's name" onChange={e => setSearchValue(e.target.value)}/>
            <div className={classes.div}>
                <ul className={classes.ul}>
                {                    
                    items.map((item) => {
                        return <li key={item.id}>
                            <img src={item.volumeInfo.imageLinks.smallThumbnail} />
                            <p>{item.volumeInfo.title}</p>
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