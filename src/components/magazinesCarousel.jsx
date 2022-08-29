import classes from '../styles/sass/magazinesCarousel.module.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';




const magazinesCarousel = ({items}) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return (
        <>
            <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={8}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            marginInlineStart:1,
            border:'none',
            alignSelf: 'center',
            background: 'transplant',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            marginInlineEnd:1,
            border:'none',
            alignSelf: 'center',
            background: 'transplant',
            color: 'black',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[

          {
            itemsToShow: 7,
            itemsToScroll: 1,
            maxWidth: 1877,
          },
          {
            itemsToShow: 6,
            itemsToScroll: 1,
            maxWidth: 1644,
          },
          {
            itemsToShow: 5,
            itemsToScroll: 1,
            maxWidth: 1450,
          },
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            maxWidth: 1250,
          },
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            maxWidth: 1000,
          },
          {
            itemsToShow: 2,
            itemsToScroll: 1,
            maxWidth: 650,
          },
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            maxWidth: 435,
          },
          
        ]}
        speed={400}
        easing="linear"
      >
    {items.map((item) => {
        return <Link to={`/magazines/${item.id}`}>
            <li className={classes.li} key={item.id}>
                {!item.volumeInfo.hasOwnProperty('imageLinks') ? <img src='' alt='magazine not found'/> :<img src={item.volumeInfo.imageLinks.smallThumbnail} loading="lazy"/>}
                <section className={classes.briffDesc}>
                    {!item.volumeInfo.hasOwnProperty('title') ? <h1></h1> : <h1 className={classes.resDesc}>{item.volumeInfo.title}</h1>}
                    {!item.volumeInfo.hasOwnProperty('publishedDate') ? <p></p> : <p className={classes.resDesc}>published in : {item.volumeInfo.publishedDate}</p>}
                    {!item.volumeInfo.hasOwnProperty('language') ? <i></i> :<p className={classes.resDesc}><i>language - </i><b>{item.volumeInfo.language}</b></p>}
                </section>
            </li>
        </Link>
    })}
        
        
      </ReactSimplyCarousel>
    </div>

		


        </>
    );

}

export default magazinesCarousel;