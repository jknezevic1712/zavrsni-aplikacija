import React from "react";
import style from './knjiga.module.css';

const Knjiga = ({setFilteredBooks,filteredBooks, knjiga, knjige, setKnjige, naziv, autor, godinaIzdanja, izdavac, zanr, dostupna, posudio}) => {

    const deleteHandler = () => {
        //Filtrirao je sve todo-ve i prikazo sve osim onog kojeg si obriso
        //zapravo nije obriso item neg ga je filtriro
        // filtriraj todos-e po el, tj daj mi sve todo-ove kojima je todo.id razlicit od el.id
        setFilteredBooks(filteredBooks.filter((el) => el.key !== knjiga.key ))
    };

    const reserveHandler = () => {
        setFilteredBooks(filteredBooks.map(book => {
            if(book.key === knjiga.key){
                if (book.posudio === '' && knjiga.posudio === '') {
                    return {
                        ...book,
                        dostupna: !book.dostupna, posudio: 'Hrvoje Horvat'
                    }
                } else if(book.posudio !== '' && knjiga.posudio !== '') {
                    return {
                        ...book,
                        dostupna: !book.dostupna, posudio: ''
                    }
                }
            }
            return book;
        }))
    };
    
    return (
        <ul className={style.list}>
            <li>{naziv}</li>
            <li>{autor}</li>
            <li>{godinaIzdanja}.</li>
            <li>{izdavac}</li>
            <li>{zanr}</li>
            <li>{posudio}</li>
            <li className={style.available}><i className={`fas ${dostupna ? `fa-times ${style.iconRed}` : `fa-check ${style.iconGreen}`}`}></i></li>
            <li className={style.actions}>
                <button onClick={reserveHandler} className={style.reserve_btn}>
                    <i className="fas fa-check-square"></i>
                </button>
            </li>
            <li className={style.actions}>
                <button onClick={deleteHandler} className={style.trash_btn}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </ul>
    );
};

export default Knjiga;