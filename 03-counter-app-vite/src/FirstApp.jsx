// // const newMessage = 'Daniel';

// const getMessage = ( ) => {
//     return newMessage.meesage;
// }

// const getResult = (a, b) =>{
//     return a +b;
// }

// const newMessage = {
//     meesage: 'Hola Mundoo', 
//     title: 'Fernando'
// }

import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) =>{    
    
    return (
        <>
            {/* <h1>Hola Mundo</h1>
            <p>{getMessage()}</p>
            <p>{getResult(2, 3)}</p>
            <h1>{ JSON.stringify(newMessage) }</h1> */}
            {/* <p>Soy un subtitulo</p> */}
            <h1>{title}</h1>
            <p>{subtitle }</p>
        </>
    )
}

FirstApp.propTypes  = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
} 

FirstApp.defaultProps = {
    title: 'No hay titulo', 
    subtitle: 'No hay subtitulo'
}