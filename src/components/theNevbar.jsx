import classes from '../styles/sass/nevbar.module.scss'

import { Link } from 'react-router-dom';

function theNevbar() {
    return(
        <header className={classes.header}>
            <Link to='/'><img src="../../images/book_shelf-removebg-preview.png" /></Link>
            <div className={classes.div}>
                <Link to='/home'><h3>Books</h3></Link>
                <Link to='/comics'><h3>Comics</h3></Link>
                <div>
                <img className='img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFMUlEQVRoge2ZXYhUZRjHf8975qCJa4kgQonWemewOmfGHT8wu2tNSlArs6+LQIhYSZEsyPwgRKIN3ZvoLjM/UAglky6KvtR1zjnDDlR3JtKnpqgsJDoz5+li3qV1d2Z3zplV92J/N/OeM+/zvM9/3u9nYJxx7gjSjHE+n58hIstF5DHgUWAWMMV+fR24APwsIt+WSqUvc7ncxebCrU8iIYVCYWkURZuBJ4BUg2ZlVT1pjHnf87wfkrQ7HLGEBEHQKiLdqtphX1VU9ZSIHANOua57vlQqXQVwXXdquVx+RFUXA08DiwDH2p1Q1c5sNvvrXRcShuE6Vf0ImAz8C+w1xnSl0+l/GrEvFovTS6XSRqATuA/oU9X12Wz2YJLAB9OQkCAItgLbAVT1sOu6m+bNm/dHkgZ7enoeSqVSXcAa+2prJpPZmcTXQEYU4vv+NhF5F1BV3ZHJZLaLiDbbcBAEG4AuwDAKYoYVYofTfiBS1Wez2ezRZhobTBAEa4BDgFHVtdls9lBSX3WFBEHQCvRSnRNbMpnM7qSNDEcQBFuAXUBfpVJpa29vP5/Ej6n3hYh0A5NV9fCdEgHged5u4AjQ4jjO3qR+agopFApL7RJ7Q1U3J3XeCCKiqVTqDaor4YogCJYk8VNTiN3sAPYsWLDgt4QxNoxdAbsBRCTRDzdESD6fn0F1x64YY7qaijAGrut2Ud1gO4rF4vS49kOEiMiTQEpEfmx0sxsN2traLgFnALdUKnWMVH8wtYQsBVDV482HF5tj9nNZXMNac+RR+3kqcTgJiaLoNICIzI1rW0vILABjzKgd6BoliqJzAKo6O65tLSEtABMmTLjeZFyxmTZt2jVbnDJsxRrU3RDvMbfiGtQS0gdw8+bN+5sOJyZXrlx5wBYvxbWtJeQCgKq2NhNUEhzHmWOLf8W1rSXkJwBVXdRMUEkQkYW27V/i2g4Roqrf2eLKJuNKwkoAY8xXcQ2HCKlUKieAMrAoyVEhKbatHFA2xnwT136IkFwud1FVTwKOvWPfFcrl8iaqyYnP58+ff22k+oOpufw6jrPLFjfk8/mZTcTXEL29vQ+q6usAIpLo7lNTSDqdPgN8AUw0xnygqk0l8oZDVaVSqewBJgHHPM8Lk/ipuyFWKpVOqnvKmjAM30wW5sgUCoW3VHUVcNkY81pSP3WFtLe3n1fV9fbxPZsoGFXCMHxGVXcCqOqr6XT6z6S+hj2i2OTZVlvvUBAEW0ZjmKmqhGH4tqoetL4jY8zkZnw2mqB7B9hhH4+Uy+WNuVzu9yQN5vP5mY7jfGiH00AqwEuZTOZAEr8N/7q+7z8nIh9TPR3fAPa6rttlb3YjUiwWp5fL5U2q2glMpDr/JvF/PhiqV90Xk6RRYw2Ts2fPPmxTNiv6GwZOA8ejKDodRdG5lpaWqwB9fX1TjTGtjuMsVtWngIX9QavqYcdxNkZRtAzYNxpiEo33IAiWiMhmVV1O438r3AKOiki353k9A3w9T20xL8TJPDY1cW2GvQN4XFXnishsqpeiMnAZ+BsIVfV7x3G+rpfM8H1/rYh8ShNi7thGFxe7vB/g9h6uiMgrnuftH8l+zAiBYcW87HneZ8PZjikhkFzMmLuzZzKZI6q6luo868dR1U/CMFxXz27M9Ug/vu+vFpGDDOoZ6myaY65H+slms0dtz5QGvHaAfXbJvo0x2yP92J45ALgDXg/pmTHbI/3Yv/vWMWjOAHMG1hvzPdKP7/ur7JxxRWSb53nb73VMifF9f7U9iY8zzt3iPxVUEdRqJvGuAAAAAElFTkSuQmCC" />
                <input type="search" placeholder='Search Book Name'/>
                </div>
            </div>
        </header>
    )
}

export default theNevbar ;