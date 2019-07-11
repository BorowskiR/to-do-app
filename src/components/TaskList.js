import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    //console.log(active, done);

    
    

    const activeTasks = active.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change}/>)

    const doneTasks = done.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change}/>)
    return ( 
        <> 
        <div className="active">
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p>nie masz zadań do zrobienia</p>}
        </div>
        <hr/>
        <div className="done">
            <h3>Zadania zrobione <em>({done.length})</em></h3>
            {done.length > 5 && <span style={{fontSize: 10}}>wyświetlonych jest jedynie 5 ostatnich zadań</span>}
            {doneTasks.splice(0,5)} 
            {/* wytnij z tablicy 5 elementów od indeksu 0 i zwróć */}
            </div>
</>
    );
}
 
export default TaskList;