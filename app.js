import React from 'react';
import Typewriter from 'typewriter-effect';
import './app.css';


function App() {

    
const myMessageS = document.querySelector('#messageM');



        <Typewriter 
        onInit = {

            (typewriter) => {

                typewriter.typeString("Hello Massa!").start();
            }

        }
        
        />

}

export default App;