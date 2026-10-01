function CursosCard(props) {
    return(
        <>
            <p>Nombre: {props.nombre}</p>
            <p>Descripción: {props.desc}</p>
            <p>Horas: {props.horas}</p>
        </>
    )
}
export default CursosCard