import React, {useState, createContext} from "react";

// Pomocu createContext-a mozes koristit informacije iz MovieProvider-a pomocu returna dolje
export const KnjigeListaContext = createContext();

// MovieProvider samo sluzi kako bi pohranio informacije
export const KnjigeListaProvider = props => {

    const [knjige, setKnjige] = useState([
        {
            key: 1,
            naziv: 'Smrt na Nilu',
            autor: 'Agatha Christie',
            godinaIzdanja: 1937,
            izdavac: 'Globus - Zagreb',
            zanr: 'Kriminalistički roman',
            dostupna: false,
            posudio: 'Ivo Ivić'
        },
        {
            key: 2,
            naziv: 'A onda je nestala',
            autor: 'Lisa Jewell',
            godinaIzdanja: 2019,
            izdavac: 'Mozaik knjiga',
            zanr: 'Kriminalistički roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 3,
            naziv: 'Supruge',
            autor: 'Tarryn Fisher',
            godinaIzdanja: 2021,
            izdavac: 'Mozaik knjiga',
            zanr: 'Kriminalistički roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 4,
            naziv: 'Posljednji ples leptira',
            autor: 'Kristin Hannah',
            godinaIzdanja: 2020,
            izdavac: 'Znanje',
            zanr: 'Ljubavni roman',
            dostupna: false,
            posudio: 'Ivo Ivić'
        },
        {
            key: 5,
            naziv: 'Zov anđela',
            autor: 'Guillaume Musso',
            godinaIzdanja: 2016,
            izdavac: 'Fokus komunikacije',
            zanr: 'Kriminalističko-ljubavni roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 6,
            naziv: 'Gradovi na papiru',
            autor: 'John Green',
            godinaIzdanja: 2015,
            izdavac: 'Fokus komunikacije',
            zanr: 'Roman za mlade',
            dostupna: false,
            posudio: 'Ivo Ivić'
        },
        {
            key: 7,
            naziv: 'Ulica krijesnica',
            autor: 'Kristin Hannah',
            godinaIzdanja: 2018,
            izdavac: 'Znanje',
            zanr: 'Ljubavno-erotski roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 8,
            naziv: 'Redovnik koji je prodao svoj Ferrari',
            autor: 'Robin Sharma',
            godinaIzdanja: 2020,
            izdavac: 'Koncept izdavaštvo',
            zanr: 'Psihološki roman',
            dostupna: false,
            posudio: 'Ivo Ivić'
        },
        {
            key: 9,
            naziv: 'Ponoćno sunce',
            autor: 'Jo Nesbo',
            godinaIzdanja: 2016,
            izdavac: 'Fokus komunikacije',
            zanr: 'Trilerski i kriminalistički roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 10,
            naziv: 'Izbliza',
            autor: 'Cara Hunter',
            godinaIzdanja: 2019,
            izdavac: 'Mozaik knjiga',
            zanr: 'Kriminalistički roman',
            dostupna: true,
            posudio: ''
        },
        {
            key: 11,
            naziv: 'Koliba',
            autor: 'William P. Young',
            godinaIzdanja: 2008,
            izdavac: 'Naklada Ljevak',
            zanr: 'Znanstveno-fantastični roman',
            dostupna: false,
            posudio: 'Ivo Ivić'
        }
    ]);

    return (
        <KnjigeListaContext.Provider value={[knjige, setKnjige]}>
            {props.children}
        </KnjigeListaContext.Provider>
    );
};