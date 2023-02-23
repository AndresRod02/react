
const CardSong = ( { title, genero, banda, album, fecha } ) => {
    return (
        <div className="CardSong">
        <h2>{title}</h2>
        <p>
            Genero: {genero}
            <br />
            Banda: {banda}
            <br />
            Album: {album}
            <br />
            Fecha de lanzamiento: {fecha}
        </p>
        </div>
    );
};

export default CardSong;