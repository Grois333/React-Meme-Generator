import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []
        }
        
        //Binds in the constructor(if you dont use arrow functions)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)

    }

    //Getting Data with lifecycle
    componentDidMount(){
       fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
          .then(response => {
              const {memes} = response.data
              console.log(memes[0]) 
              this.setState({allMemesImgs: memes})

          })
    }


    //onChange handler Event method for the inputs
    handleChange = (event) => {

        // console.log("working!")

        //Get the name from the attribute name from the inputs of the boxes
        const {name, value} = event.target;

        //Update the state with the value from the box
        this.setState({ [name]: value});

    }


    //onSubmit event method to generate random meme from array
    handleSubmit = (event) => {

        //Prevent the refreshing of the page
        event.preventDefault()

        //Get a random int (index on the array), Get the meme from that index
        const randNum = Math.floor(Math.random() * this.state.allMemesImgs.length);

        //Set 'randomImg' to the '.url' of the random item I grabbed
        const randMemeImg = this.state.allMemesImgs[randNum].url;

        //Update State for the randomImg property for the value to be randoMemeImg
        this.setState({ randomImg:randMemeImg });

    }

        render() {
            return(

                // <h1>MEME GENERATOR SECTION</h1>

                

                <div>

                   

                    <form className="meme-form" onSubmit={this.handleSubmit}>

                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                     <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />


                    <button>Gen</button>

                    <button className='print' onClick={() => window.print()}>Print</button>

                    </form>

                    <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>

                </div>
            )
        }
}
export default MemeGenerator;