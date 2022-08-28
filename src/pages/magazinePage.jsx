
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
                    <div className={`${classes.discOfMegaInMega} ${classes.responsie}`}>
                            <p className={classes.date}><b>Published-date :</b> {desc.publishedDate}</p>
                            <p className={classes.publisher}><i><b>Publisher :</b> {desc.publisher}</i></p>
                            <p className={classes.totalPages}><b>Total Pages :</b> {desc.pageCount}</p>
                            <p className={classes.language}><i><b>Language :</b> {desc.language}</i></p>
                            {readingModes.image && readingModes.text ? <p className={classes.moad}><b>Reading Moad :</b> Image, Text</p> : <></> }
                            {readingModes.image ? <p className={classes.moad}><b>Reading Moad :</b> Image</p> : <></> }
                            {readingModes.text ? <p className={classes.moad}><b>Reading Moad :</b> Text</p> :  <></> }
                    </div>
                    <div className={classes.discOfMega}>
                        <i className={classes.authors}><b> Authors:</b>{authors==[] ? <i></i> : authors.map((author)=>{
                            return <p>
                                <i>{author},</i>
                            </p>
                        })}</i>
                        {desc.hasOwnProperty('description') && <p className={classes.description}><b> Description</b> : {desc.description}</p>}
                        <div className={`${classes.discOfMegaInMega} ${classes.responsieNone}`}>
                            <p className={classes.date}><b>Published-date :</b> {desc.publishedDate}</p>
                            <p className={classes.publisher}><i><b>Publisher :</b> {desc.publisher}</i></p>
                            <p className={classes.totalPages}><b>Total Pages :</b> {desc.pageCount}</p>
                            <p className={classes.language}><i><b>Language :</b> {desc.language}</i></p>
                            {readingModes.image && readingModes.text ? <p className={classes.moad}><b>Reading Moad :</b> Image, Text</p> : <></> }
                            {readingModes.image ? <p className={classes.moad}><b>Reading Moad :</b> Image</p> : <></> }
                            {readingModes.text ? <p className={classes.moad}><b>Reading Moad :</b> Text</p> :  <></> }
                        </div>
                        
                    </div>
                    
                </section>
            </section>}
        
        </>
    )

}
export default magazinePage;