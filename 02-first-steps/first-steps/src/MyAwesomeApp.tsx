import type { CSSProperties } from "react";

const firstName = 'Daniel';
const lastName = 'Perez';

const favoriteGames = ['Zelda', 'Mario', 'Metroid'];
const isActive = true;

const address = {zip: '12345', city: 'New York'};

const myStyles:CSSProperties = {
    backgroundColor:'#fafafa',
    borderRadius: isActive?10:20, 
    padding: 10,
    fontSize: 20,
    marginTop: 10,
};

export function MyAwesomeApp() {


  return (
    <>
        <h1 data-testid="first-name-title">{firstName}</h1>
        <h3>{lastName}</h3>
        <p>{favoriteGames.join(',')}</p>
        
        <h1>{isActive.toString()} o {isActive?'Activo':'No activo'}</h1>

        <p
        style={myStyles}
        >{JSON.stringify(address)}</p>
    </>
  )
}   
    