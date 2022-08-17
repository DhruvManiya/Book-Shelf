import classes from '../styles/sass/books.module.scss';
import { Carousel } from '@trendyol-js/react-carousel';

import axios from 'axios';
import {useState ,useEffect} from 'react'




// const testRes = [
//     {
//         rank:1,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:2,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:3,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:4,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:5,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:6,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:7,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:8,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:9,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     },
//     {
//         rank:10,
//         book_image:"http://books.google.com/books/content?id=mToqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//         title:"test",
//         author:"test"
//     }
// ];

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

    async function top10() {
        try {
            const res = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=aYGQXVh9xCDNAW9Li2rTnuiToUxhD9Kw"
                );
                setMsg('msg')
                
                console.log(items);

                setItems(res.data.results.books);
                console.log(msg)
            } catch (e) {
                console.log(e);
            }
        };
        
        function top10Responce() {
            items.map((item) => {
                return (
                    <div key={item.rank}>
                  <li className={classes.li}>
                      <img src={item.book_image} />
                      <h1>{item.title}</h1>
                      <p>{item.author}</p>
                      <p>{item.rank}</p>
                  </li>
              </div>
            );
        })
    };
    
    const [items, setItems] = useState([]);
    const [msg, setMsg] = useState('');
    const [lodding, setLodding] = useState(<p>lodding</p>);

  
    useEffect(() => {
        top10();
        setLodding(top10Responce());
      }, [msg]);
    

    return (
        <>
        
        <h1>Top 10...</h1>
        <Carousel show={9.5} slide={1} transition={0.5}>
		
        {/* {items.map((item) => {
          return (
            <div key={item.rank}>
                <li className={classes.li}>
                    <img src={item.book_image} />
                    <h1>{item.title}</h1>
                    <p>{item.author}</p>
                    <p>{item.rank}</p>
                </li>
            </div>
          );
        })        
    } */}
    {lodding}


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