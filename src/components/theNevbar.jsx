import classes from '../styles/sass/nevbar.module.scss'

import { Link } from 'react-router-dom';

function theNevbar() {
    return(
        <header className={classes.header}>
            <Link to='/'><img src="../../images/book_shelf-removebg-preview.png" /></Link>
            <div className={classes.div}>
                <Link to='/home'><h3>Home</h3></Link>
                <Link to='/books'><h3>Books</h3></Link>
                <Link to='/magazines'><h3>Magazines</h3></Link>
            
            </div>
        </header>
    )
}

export default theNevbar ;