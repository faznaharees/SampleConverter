import React, { Component } from 'react'
import {IonButton, IonCard, IonTitle, IonToast } from '@ionic/react';
import List from './List'
import Input20 from './Inputs/Input20';

export default class Home extends Component {
    render() {
        return (
            <div>
              <IonCard className="header">
                  <IonTitle><h2>InstaConvert</h2></IonTitle>
              </IonCard>
              <List/>
             
            </div>
        )
    }
}
