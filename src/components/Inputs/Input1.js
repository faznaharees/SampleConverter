import React, { Component } from 'react'
import { IonCardContent ,IonCard } from '@ionic/react'

export default class Input1 extends Component {
    
        state = {
            rangeStart: '',
            rangeEnd : '',
            result25:'',
            result50:'',
            result75:'',
            date:''
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
            const {rangeEnd,rangeStart} = this.state;
            this.setState({
                result25 : rangeStart+ (rangeEnd-rangeStart)/4,
                result50 : rangeStart+ (rangeEnd-rangeStart)/2,
                result75 : rangeStart+ (rangeEnd-rangeStart)*3/4
            })   
        }
    render() {
       const {rangeEnd,result25,rangeStart,result50,result75,date} = this.state;
        
        return (
            <div>
                <center>
                <IonCard className="inputcard">
                    <IonCardContent>
                    <input type="number" placeholder="Range Start" value={rangeStart} name="rangeStart" onChange={this.handleChange}/>
                <br/>
                <input type="number" placeholder="Range End" value={rangeEnd} name="rangeEnd" onChange={this.handleChange}/>
                <br/><br/>
                <div className="row">
                    <div className="col">0%</div>
                    <div className="col">25%</div>
                    <div className="col">50%</div>
                    <div className="col">75%</div>
                    <div className="col">100%</div>
                </div>
                <div className="row">
                    <div className="col">{rangeStart}</div>
                    <div className="col">{result25}</div>
                    <div className="col">{result50}</div>
                    <div className="col">{result75}</div>
                    <div className="col">{rangeEnd}</div>
                </div>
                
                
               
                    </IonCardContent>
                </IonCard>
                </center>
            </div>
        )
    }
}
