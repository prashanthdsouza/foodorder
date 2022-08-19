import { Fragment } from "react";

import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='food'/>
        </div>
    </Fragment>
    );
};

export default Header;