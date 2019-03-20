import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Alert, StatusBar, Image, Button } from 'react-native';
import { Container } from './app/components/Container';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
})

let index = 0,
resultsText = "",
arryObj;
const helpOptions = ["go", "look"];


export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.buttonPressed = this.buttonPressed.bind(this)
    this.state = {
      resultsText: "",
      myArr: [
        {id: 0, text: "hello"}
      ],
    }
  }

  showAction = (index, action, noun) => {
    if (noun === "north") {
      arryObj = {id: index, text: "to the north with you."};
    } else {
      arryObj = {id: index, text: "Go you will."};
    }
  }

  showHelp = (index, action) => {
    arryObj = {id: index, text: "Here are some things you can do."};
  }

  invalidOption = (index, action) => {
    arryObj = {id: index, text: "Invalid Command!"};
  }

  buttonPressed = () => {
    index++
    resultsText = this.state.resultsText.toLowerCase();
    let action = resultsText.split(" ")[0];
    let noun = resultsText.split(" ")[1];
    
    console.log(this.state.myArr);
    console.log(action);
    switch (action) {
      case "go":
      this.showAction(index, action, noun)
        break;
      case "help":
         this.showHelp(index, action);
         break;
      default:
        this.invalidOption(index, action)
    }

    // if (action === "go"){
    //     if (direction === "north") {
    //       arryObj = {id: index, text: "to the north with you."};
    //     } else {
    //       arryObj = {id: index, text: "Go you will."};
    //     }

    // } else if (action === "help") {
    //   arryObj = {id: index, text: "here are some things you can do."}
    // } else {
    //   arryObj = {id: index, text: "You have made a bad choice."};
    // }

    this.setState((state) => {
      const list = [...state.myArr, arryObj];
      return {
        myArr: list
      }
    });
};

  render() {
    

    // myArrTextworking = arrayofthings.map(buttonInfo => (
    //   <Text key={buttonInfo.id}>{buttonInfo.text}</Text>
    // ))

    return (
        <Container>
            <StatusBar translucent={false} barStyle="light-content" />
            {
              this.state.myArr.map((story) => {
                return <Text key={ story.id }>{story.text} </Text>
              })
            }
          
            <Text style={{padding: 10, fontSize: 42}}>
              {/* {this.state.resultsText} */}
            </Text>
            <TextInput
              style={{height: 40, width: 200, backgroundColor: 'white'}}
              //ref={input => this.resultsText = input}
              onChangeText={resultsText => this.setState({resultsText})}
            /> 

            <Button title={"submit"} onPress={this.buttonPressed}/>

      </Container>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);

