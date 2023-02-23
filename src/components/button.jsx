//               { texto, segundaProp } = props
const Button = ( { texto } ) => {

    //console.log(props)
    /*
    const user = {
        name: "Brenda",
        age: 28, 
        favoriteAnimal : "Gato"
    }

    const { name, age } = user

    console.log( name )
    */

    //const { texto } = props

    return (
        <button className="btn-yellow">
            { texto }
        </button>
    )
}


export default Button
