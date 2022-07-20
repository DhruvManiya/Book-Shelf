import classes from '../styles/sass/footer.module.scss';

function theFooter(props) {
    return (
        <footer className={classes.footer}>
            <h1>{props.copiright}</h1>
            <p>{props.date}</p>
        </footer>
    )
}

export default theFooter ;