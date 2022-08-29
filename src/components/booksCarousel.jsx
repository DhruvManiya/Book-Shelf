
import classes from '../styles/sass/booksCarousel.module.scss'
import {Link} from 'react-router-dom'
import ReactSimplyCarousel from 'react-simply-carousel';
import React, { useState } from "react";




const booksCarousel = ({items}) => {
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
        
        { items.map((item) => {
          return (
            <Link to={`/books/${item.primary_isbn13}`}>
                <div key={item.rank}>
                    <li className={classes.li}>
                        <img src={item.book_image} />
                        <section className={classes.briffDesc}>
                            <h1 className={classes.resDesc}>{item.title}</h1>
                            <p className={classes.resDesc}>author - {item.author}</p>
                            <p className={classes.resDesc}>rank - {item.rank}</p>
                        </section>
                    </li>
                </div>
            </Link>
          );
        })        
    }
      </ReactSimplyCarousel>
    </div>

		


        </>
    );

}

export default booksCarousel;