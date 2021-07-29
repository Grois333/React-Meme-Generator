/*

Instructions:

STEP 1:
*Create a React app call it meme
*Render in <App /> component, something on the screen

STEP 2: 
*Create 2 new components - Header and MemeGenerator
*Header will only display things (Function component)
*MemeGenerator will be calling to an API and holding on to data (Class component)
*Each should be in their own file of the same name


STEP 3: 
*The Header Component will display a header with this image: http://pngall.com/wp-content/uploads/2016/05/Trollface.png
*A Paragraph with the text "Meme Generator"

STEP 4:
*In MemeGenerator component, Initialize state to save the following data:
   top text
   bottom text
   random image (initialize with "http://i.imgflip.com/1bij.jpg")


STEP 5:
*In MemeGenerator component, we'll be using an API that provides a bunch of meme images,

*Your task:
*make an API call to "https://api.imgflip.com/get_memes" and save 
the data that comes back (response.data.memes) to a new state property
called `allMemeImgs`. (The data that comes back is an array)
*Create a Form with a button

STEP 6:
*Create 2 Input fields, one for the topText and one for the bottomText
*Remember that these will be "controlled forms", so make sure to add all the attributes you'll need for that to work


STEP 7:
*Create the onChange handler method
*It should update the corresponding state on every change of the input boxes


STEP 8:
*Create the area with a DIV to display a random image from the array of memes, Give it a className of meme
*Put the image with a source of the randomImg that we saved in the state
*Put h2 tags to display the text of the Top and Bottom in the Image, Give them a className of top and bottom.
*Each Text will be the ones that we saved in the state.


STEP 9 :
*Create a method that, when the "Gen" button is clicked, chooses one of the memes from
*our "allMemeImgs" array at random, and make it so that it's the meme's image that shows up
in the bottom portion of our meme Generator site.
(Remember the property of the chosen image in the array is ".url")


 */


import React from 'react';
import './App.css';
import Header from './Header';
import MemeGenerator from './MemeGenerator';





function App() {
  return (
    <div className="App">

    {/* <h1>Hello world</h1> */}

    <Header />
    <MemeGenerator />
      
    </div>
  );
}

export default App;
