import React from 'react';
import PropTypes from 'prop-types';

const MyFirtsApp = ( {sayName ,subtitle} ) => {
   // const json={
   //    name:'Hania',
   //    age: '25'
   // };
   const sayHi='Hola mundo';
   return (
      <>
         <h1>{sayName}</h1>
         {/* <pre>{JSON.stringify(json, null,3)}</pre> */}
         <p>Mi primera aplicación</p>
         <p>{subtitle}</p>
      </>
   );
} 
MyFirtsApp.propTypes={
   sayName: PropTypes.string.isRequired,
}

MyFirtsApp.defaultProps={
   subtitle:'Im a subtitle'
}
export default MyFirtsApp;