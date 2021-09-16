import React, {useState, useContext} from "react";
import style from './unosKnjiga.module.css';
import {KnjigeListaContext} from "./KnjigeListaContext";
import Form from './UnosForma';

const UnosKnjiga = () => {

    const [knjige, setKnjige] = useContext(KnjigeListaContext);
    const [naziv, setNaziv] = useState("");
    const [autor, setAutor] = useState("");
    const [godinaIzdanja, setGodinaIzdanja] = useState();
    const [izdavac, setIzdavac] = useState("");
    const [zanr, setZanr] = useState("");
    const [posudio, setPosudio] = useState("");

    return (
        <div className={style.body}>
            <div className={style.modal}>
                <header className={style.header}>
                    <h1>Unos Knjiga</h1>
                    <hr></hr>
                </header>
                <Form
                    knjige={knjige}
                    setKnjige={setKnjige}
                    naziv={naziv}
                    setNaziv={setNaziv}
                    autor={autor}
                    setAutor={setAutor}
                    godinaIzdanja={godinaIzdanja}
                    setGodinaIzdanja={setGodinaIzdanja}
                    izdavac={izdavac}
                    setIzdavac={setIzdavac}
                    zanr={zanr}
                    setZanr={setZanr}
                    posudio={posudio}
                    setPosudio={setPosudio}
                />
            </div>
        </div>
    );
};

export default UnosKnjiga;