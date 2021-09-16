import React from "react";
import style from './oAutoru.module.css';

const OAutoru = () => {
    return (
        <div className={style.body}>
            <div className={style.modal}>
                <header className={style.header}>
                    <h1>O Autoru</h1>
                    <hr></hr>
                </header>
                <div className={style.listaPodaci}>
                    <p>
                        Student treće godine "Primjena informacijske tehnologije u poslovanju" (<a href="https://www.foi.unizg.hr/hr/studiji/pitup" target="_blank">PITUP</a>) na fakultetu "Fakultet Organizacije i Informatike" (<a href="https://www.foi.unizg.hr/" target="_blank">FOI</a>) u Varaždinu. Aplikacija je namijenjena završnom radu "Usporedba platformi za razvoj aplikacija u oblacima".
                    </p>
                    <h3>Osobni podaci:</h3>
                    <ul>
                        <li><b>Ime i prezime:</b> Jakov Knežević</li>
                        <li><b>Broj iksice:</b> 0016139974</li>
                        <li><b>E-mail:</b> <a href="mailto:jknezevic@foi.hr">jknezevic@foi.hr</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OAutoru;