import React, { Component } from 'react'
import { IonCard, IonCardContent } from '@ionic/react'

export default class Input2 extends Component {
    state = {
        range: 0,
        result:0,
       
    }
handleSelect = (e) => {
this.setState({
    [e.target.name]:e.target.value

})  
  }

handleChange = (e) => {
    this.setState({
        [e.target.name]:Number(e.target.value)

    },
    this.calculate)  
    console.log(e.target.value)

  }

    calculate = () => {
        const {range} = this.state;
        this.setState({
          result : range*5
        })   
    }
    render() {
        const {range,result} = this.state;
        return (
            <center>
                 <IonCard className="inputcard">
                     <IonCardContent>
                        <div className="row">
                            <div className="col-md-1" style={{margin:"auto",lineHeight:"4px"}} > 
                            {range}mA
                            </div>
                            <div class="col-md-10"><input type="range" name="range" min="0" max="20" value={range} class="slider" id="myRange" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10" style={{margin:"auto",lineHeight:"4px"}} > 
                           <h2 >{result} Percentage</h2>
                            </div>
                            {/* <div class="col-md-10"><input type="range" name="result" min="0" max="100" value={result} class="slider" id="myRange"/> */}
                            {/* </div> */}
                        </div>
                     </IonCardContent>
                 </IonCard>
            </center>
        )
    }
}
