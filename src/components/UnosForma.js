import React, {useEffect} from 'react';
import style from './unosForma.module.css';

const Form = ({ knjige, setKnjige,
    naziv, setNaziv, autor, setAutor,
    godinaIzdanja, setGodinaIzdanja, izdavac, setIzdavac,
    zanr, setZanr, posudio, setPosudio}) => {

    // Varijable za input field-ove
    const nazivHandler = (e) => {
        setNaziv(e.target.value);
    };
    const autorHandler = (e) => {
        setAutor(e.target.value);
    };
    const godinaIzdanjaHandler = (e) => {
        setGodinaIzdanja(e.target.value);
    };
    const izdavacHandler = (e) => {
        setIzdavac(e.target.value);
    };
    const zanrHandler = (e) => {
        setZanr(e.target.value);
    };
    const posudioHandler = (e) => {
        setPosudio(e.target.value);
    };

    useEffect(() => {

        const saveLocalBooks = () => {
            localStorage.setItem('books', JSON.stringify(knjige));
        };
        
        saveLocalBooks();
    }, [knjige]);

    // Submit funkcija
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(naziv !== "" && autor !== "" && godinaIzdanja !== "" && izdavac !== ""
         && zanr !== ""){
             if(posudio !== ""){
                setKnjige([
                    ...knjige,
                    {key: Math.round(Math.random() * 1000), naziv: naziv, autor: autor, godinaIzdanja: godinaIzdanja,
                        izdavac: izdavac, zanr: zanr, dostupna: false, posudio: posudio}
                ]);
                alert("Knjiga je uspješno unesena!");
             } else {
                setKnjige([
                    ...knjige,
                    {key: Math.round(Math.random() * 1000), naziv: naziv, autor: autor, godinaIzdanja: godinaIzdanja,
                        izdavac: izdavac, zanr: zanr, dostupna: true, posudio: posudio}
                ]);
                alert("Knjiga je uspješno unesena!");
             }
            
        } else {
            alert("Molimo ispunite sva obavezna polja označena s asteriskom (*) !");
        }
        setNaziv("");
        setAutor("");
        setGodinaIzdanja("");
        setIzdavac("");
        setZanr("");
        setPosudio("");
    };

    return (
        <form>
            <div className={style.submit}>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-check-circle"></i>
                </button>
            </div>
            <div className={style.fields}>
                <div className={style.input}>
                    <label htmlFor="naziv" className={style.labels}>*Naziv knjige:</label>
                    <input value={naziv} onChange={nazivHandler} type="text" className="todo-input" placeholder="*Naziv" name="naziv"/>
                </div>
                <div className={style.input}>
                    <label htmlFor="autor" className={style.labels}>*Autor:</label>
                    <input value={autor} onChange={autorHandler} type="text" className="todo-input" placeholder="*Autor" name="autor"/>
                </div>
                <div className={style.input}>
                    <label htmlFor="godinaIzdanja" className={style.labels}>*Godina izdanja:</label>
                    <input value={godinaIzdanja} onChange={godinaIzdanjaHandler} type="text" className="todo-input" placeholder="*Godina Izdanja" name="godinaIzdanja"/>
                </div>
                <div className={style.input}>
                    <label htmlFor="izdavac" className={style.labels}>*Izdavač:</label>
                    <input value={izdavac} onChange={izdavacHandler} type="text" className="todo-input" placeholder="*Izdavač" name="izdavac"/>
                </div>
                <div className={style.input}>
                    <label htmlFor="zanr" className={style.labels}>*Žanr:</label>
                    <input value={zanr} onChange={zanrHandler} type="text" className="todo-input" placeholder="*Žanr" name="zanr"/>
                </div>
                <div className={style.input}>
                    <label htmlFor="posudio" className={style.labels}>Posudio:</label>
                    <input value={posudio} onChange={posudioHandler} type="text" className="todo-input" placeholder="Posudio" name="posudio"/>
                </div>
            </div>
        </form>
    );
};

export default Form;