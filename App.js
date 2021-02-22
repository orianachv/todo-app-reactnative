//import stuff
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

//create stuff
class App extends React.Component {
  state = {
    text: '',
    todo: []
  }

  addTodo = () => {
    let newTodo = this.state.text;
    let arr = this.state.todo;
    arr.push(newTodo);
    this.setState({ todo: arr, text: '' })
  }
  deleteTodo = (t) => {
    let arr = this.state.todo;
    let position = arr.indexOf(t);
    arr.splice(position, 1);
    this.setState({ todo: arr })
  }

  renderTodos = () => {
    return this.state.todo.map((t, i) => {
      return (
        <TouchableOpacity key={i}>
          <Text style={styles.todo} onPress={() => { this.deleteTodo(t) }}>{t}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            color='green'
            title='Add Todo'
            onPress={this.addTodo}
          />
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: '#B2EBF2'
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,

  },
  inputStyle: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    minWidth: 100,
    margin: 10
  },
  header: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  },
  todo: {
    fontSize:24,
    color:'white'
  }
}

//export stuff
export default App