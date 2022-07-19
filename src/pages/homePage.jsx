import classes from '../styles/sass/homePage.module.scss';

function homePage() {
    return (
    
        <div className={classes.mainSection}>
            <h1 className={classes.heading}>Search your next book</h1>
            <input type="search" placeholder="Search books by it's name"/>
            <p>We gives rating of books so your next book become better for you</p>
        </div>


    )
}

export default homePage ;