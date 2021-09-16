import React, {useContext, useEffect, useState} from "react";
import style from './knjige.module.css';
import Knjiga from './Knjiga';
import {KnjigeListaContext} from "./KnjigeListaContext";
import FilterKnjige from "./FilterKnjige";

const Knjige = () => {

    const [knjige, setKnjige] = useContext(KnjigeListaContext);
    const [status, setStatus] = useState('sve');
    const [filteredBooks, setFilteredBooks] = useState([]);

    //RUN ONCE when the app starts
    useEffect(() => {

        const getLocalBooks = () => {
            if(localStorage.getItem('books') === null) {
                localStorage.setItem('books', JSON.stringify([]));
            } else {
                let bookLocal = JSON.parse(localStorage.getItem('books'));
                setKnjige(bookLocal);
            }
        };

        getLocalBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Use Effect
    useEffect(() => {

        const filterHandler = () => {
            switch (status) {
                case "dostupne":
                    setFilteredBooks(knjige.filter((knjiga) => knjiga.dostupna === true))
                    break;
                case "nedostupne":
                    setFilteredBooks(knjige.filter((knjiga) => knjiga.dostupna === false))
                    break;
                default:
                    setFilteredBooks(knjige);
                    break;
            }
          };

        filterHandler();
    }, [knjige, status]);


    return (
        <div className={style.body}>
            <div className={style.modal}>
                <header className={style.header}>
                    <h1>Knjižnica</h1>
                    <hr></hr>
                </header>
                <FilterKnjige
                    // status={status}
                    setStatus={setStatus}
                />
                {/* <div className="select">
                    <select onChange={statusHandler} name="books" className="filter-books">
                        <option value="sve">Sve</option>
                        <option value="dostupne">Dostupne</option>
                        <option value="nedostupne">Nedostupne</option>
                    </select>
                </div> */}
                {
                filteredBooks.sort((a, b) => (a.dostupna > b.dostupna) ? 1 : -1).map(knjiga => (
                        <div className={style.rowsList}>
                            <Knjiga
                                setFilteredBooks={setFilteredBooks}
                                filteredBooks={filteredBooks}
                                knjige={knjige}
                                setKnjige={setKnjige}
                                knjiga={knjiga}
                                key={knjiga.key}
                                naziv={knjiga.naziv}
                                autor={knjiga.autor}
                                godinaIzdanja={knjiga.godinaIzdanja}
                                izdavac={knjiga.izdavac}
                                zanr={knjiga.zanr}
                                dostupna={knjiga.dostupna}
                                posudio={knjiga.posudio}
                            />
                        </div>
                    ))
                }     
            </div>
        </div>
    );
};

export default Knjige;