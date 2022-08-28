
import axios from 'axios';
import { useParams } from 'react-router-dom' 
import { useState, useEffect} from 'react'
import classes from '../styles/sass/descriptionPage.module.scss'



function bookPage(){
    const {id} = useParams();
    const [desc , setDesc] = useState({});
    const [imageLinks , setImageLinks] = useState({});
    const [readingModes , setReadingModes] = useState({});
    const [authors , setAuthors] = useState([])
    
    useEffect(() => {
        fatchDetailsOfItem();
      }, []);

      async function fatchDetailsOfItem() {
        try {
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${id}&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            if(res.hasOwnProperty('data') ){    
                setDesc(res.data.items[0].volumeInfo);
                setImageLinks(res.data.items[0].volumeInfo.imageLinks);
                setReadingModes(res.data.items[0].volumeInfo.readingModes);
                setAuthors(res.data.items[0].volumeInfo.authors)
            }else{
                setDesc({});
            }
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <>
        

            {desc===null ?  
            <section>Not Found</section> :
            
            <section className={classes.mainSection}>
                <h1 className= {classes.title}>Title : {desc.title}</h1>
                <section className={classes.section}>
                    <div className={classes.discOfMegaInBooks}>
                        {imageLinks===null ? <img alt='image' className={classes.img}/> : <img className={classes.img} src={imageLinks.smallThumbnail} />}
                        <p className={classes.date}><b>Published-date : </b>{desc.publishedDate}</p>
                        <p className={classes.publisher}><i><b>Publisher : </b>{desc.publisher}</i></p>
                        <p className={classes.totalPages}><b>Total Pages : </b>{desc.pageCount}</p>
                        <p className={classes.language}><i><b>Language : </b>{desc.language}</i></p>
                    </div>    
                    <div>
                        <i className={classes.authors}><b>Authors : </b>{authors==[] ? <i></i> : authors.map((author)=>{
                            return <p>
                                <i> {author},</i>
                            </p>
                        })}</i>
                        {desc.hasOwnProperty('description') && <p className={classes.description}><b>Description : </b>{desc.description}</p>}
                    </div>
                    
                </section>
            </section>}
        
        </>
    )

}
export default bookPage;
