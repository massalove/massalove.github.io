import React from 'react';
import Typewriter from 'typewriter-effect';

function App() {

    return (

        <div className="welcome">

        <Typewriter 
        
        onInit = {

            (typewriter) => {

                typewriter.typeString("Hello Massa!").start();
            }

        }
        
        />


        </div>


    )

}

export default App;