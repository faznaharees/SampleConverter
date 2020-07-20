import React, { Component } from 'react'
import { IonCard, IonCardContent } from '@ionic/react'

export default class Input20 extends Component {
    
        state = {
            currencies : ['USD','AED','SID','EUR'],
            base: 'USD',
            amount:"",
            convertTo : 'EUR',
            result:'',
            date:''
        }
    handleSelect = (e) => {
    this.setState({
        [e.target.name]:e.target.value

    })  
      }

    handleChange = (e) => {
        this.setState({
            amount:e.target.value
    
        },
        this.calculate)  
        console.log(e.target.value)

      }

        calculate = () => {
            const amount = this.state.amount
            // if (amount === isNaN){
            //     return;
            // }
            // else{
                fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const date = data.dates
                    const result = data.rates[this.state.convertTo] * this.state.amount
                    this.setState({
                        result,date
                    })
                    console.log(result)
                })
                
            // }
        }
    render() {
       const {currencies,base,amount,convertTo,result,date} = this.state;
        
        return (
            <div>
               <center> <IonCard className="inputcard">
                   <IonCardContent>
                  
                <input type="number" value={amount} name="amount" onChange={this.handleChange}/>
                <select name="base" value={base} onChange={this.handleSelect}>
                    {currencies.map(currency=> 
                        <option value={currency}>{currency}</option>)}
                </select><br/>
                <input type="number" disabled={true} value={result} name="result"/>
                <select name="convertTo" value={convertTo} onChange={this.handleSelect}>
                    {currencies.map(currency=> 
                        <option value={currency}>{currency}</option>)}
                </select>
                
                   </IonCardContent>
               </IonCard>
               </center>
            </div>
        )
    }
}
