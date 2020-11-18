import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Header} from 'react-native-elements';

import * as firebase from 'firebase';
import db from '../config.js';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <Header
                 backgroundColor = {"#144BF6"}
                 centerComponent = {{
                     text: "Story Hub",
                     style: {color: 'black', fontSize: 20}
                 }}
                />
                <View>
                    
                </View>
            </View>
        )
    }
}