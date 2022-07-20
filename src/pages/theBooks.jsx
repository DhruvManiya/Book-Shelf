import classes from '../styles/sass/books.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';

const responce = [
    {
        id:1,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:2,
        url:"../../images/bookShelfLinkLogo.png",
        name:'second book',
        auther:'abc',
        publishDate:"01-07-2010"
    },
    {
        id:3,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:4,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:15,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:16,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:17,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:18,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:19,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:11,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:12,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:13,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:41,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:51,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:61,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:71,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
    {
        id:81,
        url:"../../images/bookShelfLinkLogo.png",
        name:'first book',
        auther:'xyz',
        publishDate:"12-08-2001"
    },
];

function theBooks() {
    return (
        <>
        
        <h1>testing...</h1>
        <Carousel show={9.5} slide={1} swiping={false} >
		

        {responce.map((res) => {
            return <li className={classes.li} key={res.id}>
                <img src={res.url} />
                <h1>{res.name}</h1>
                <p>{res.auther}</p>
                <p>{res.publishDate}</p>
            </li>
        })}

        </Carousel>
        
        <h1>testing...</h1>
        <Carousel show={9.5} slide={1} swiping={false} >
		

        {responce.map((res) => {
            return <li className={classes.li} key={res.id}>
                <img src={res.url} />
                <h1>{res.name}</h1>
                <p>{res.auther}</p>
                <p>{res.publishDate}</p>
            </li>
        })}

        </Carousel>
        <h1>testing...</h1>
        <Carousel show={9.5} slide={1} swiping={false} >
		

        {responce.map((res) => {
            return <li className={classes.li} key={res.id}>
                <img src={res.url} />
                <h1>{res.name}</h1>
                <p>{res.auther}</p>
                <p>{res.publishDate}</p>
            </li>
        })}

        </Carousel>


        </>
    )
}

export default theBooks ;