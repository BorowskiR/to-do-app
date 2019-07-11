import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'


class App extends Component {
  counter = 9
  state = {
    tasks: [
      
      ]
    }

  deleteTask = (id) => {
    console.log('delete w komponencie app ' + id) ;
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1) //usuniecie elementu o indeksie kliknietym 
    this.setState({
      tasks: tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('change status w komponencie app ' + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => { //map() tez byłby dobry
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
      this.setState({
        tasks: tasks
      })
    })
    
  }
  addTask = (text, date, important) => {
    console.log('dodany obiekt')
    const task = {
      id: this.counter,
      text: text, //tekst z inputa
      date: date, //wziete z inputa
      important: important, //wartosc z inputa
      active: true,
      finishDate: null,
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
    
  }


  render() { 
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask}
        change={this.changeTaskStatus}/>
      </div>
    )
  }
}
 


export default App;
