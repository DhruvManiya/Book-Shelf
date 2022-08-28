
import axios from 'axios';
import { useParams } from 'react-router-dom' 
import { useState, useEffect} from 'react'
import classes from '../styles/sass/descriptionPage.module.scss'

function magazinePage(){
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
            const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?projection=full&key=AIzaSyAr3fNjJy4OTQfHW2CYdjOvPs04aPWvezQ`);
            if(res.hasOwnProperty('data') && res.data.hasOwnProperty('volumeInfo')){
                setDesc(res.data.volumeInfo);
                setImageLinks(res.data.volumeInfo.imageLinks);
                setReadingModes(res.data.volumeInfo.readingModes);
                setAuthors(res.data.volumeInfo.authors)
            }else{
                setDesc({});
            }
        } catch (error) {
            console.log(error)
        }
    };

console.log(desc)
    return(
        <>
        

            {desc===null ?  
            <section>Not Found</section> :
            
            <section className={classes.mainSection}>
                <h1 className= {classes.title}>Title : {desc.title}</h1>
                <section className={classes.section}>
                    {imageLinks===null ? <img alt='image' className={classes.img}/> : <img className={classes.img} src={imageLinks.large} />}
                    <div className={classes.discOfMega}>
                        <i className={classes.authors}>Authors :{authors==[] ? <i></i> : authors.map((author)=>{
                            return <p>
                                <i>{author},</i>
                            </p>
                        })}</i>
                        {desc.hasOwnProperty('description') && <p className={classes.description}>Description : {desc.description}</p>}
                        <p className={classes.date}>Published-date : {desc.publishedDate}</p>
                        <p className={classes.publisher}><i>Publisher : {desc.publisher}</i></p>
                        <p className={classes.totalPages}>Total Pages : {desc.pageCount}</p>
                        <p className={classes.language}><i>Language : {desc.language}</i></p>
                        {readingModes.image && readingModes.text ? <p className={classes.moad}>Reading Moad : Image, Text</p> : <></> }
                        {readingModes.image ? <p className={classes.moad}>Reading Moad : Image</p> : <></> }
                        {readingModes.text ? <p className={classes.moad}>Reading Moad : Text</p> :  <></> }
                    </div>
                    
                </section>
            </section>}
        
        </>
    )

}
export default magazinePage;