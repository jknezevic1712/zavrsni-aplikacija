import React from "react";
import {Link} from 'react-router-dom';
import style from './nav.module.css';

function Nav() {
  
    return (
      <nav>
        <div className={style.link}>
            <Link to="/" className={style.linkLeft}>
                Knjige
            </Link>
            <Link to="/unos_knjiga" className={style.linkLeft}>
                Unos Knjiga
            </Link>
            <Link to="/o_autoru" className={style.linkRight}>
                O Autoru
            </Link>
        </div>
      </nav>
    );
  }
  
  export default Nav;
  