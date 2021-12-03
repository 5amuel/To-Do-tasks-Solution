import React from 'react'
import Card from './components/Card'
import CardsWrapper from './components/CardsWrapper'
import Task from './components/Task'
import InputForm from './components/InputForm'
import { useState } from 'react'

export function ChallengeComponent() {
  const [newTask, setNewTask] = useState<string>("") //state to store the input value
  const [todoTasks, setTodoTask] = useState<ITask[]>([]) //state to add the tasks into the ToDo component
  const [inProgressTasks, setInProgressTask] = useState<ITask[]>([]) //state to add the tasks into the InProgress component
  const [doneTasks, setDoneTask] = useState<ITask[]>([]) //state to add the tasks into the DONE component

  // function to update newTask value from input
  const updateTask: InputChangeEventHandler = (e) => { 
    e.preventDefault()
    setNewTask(e.target.value)
  }
  
  //function to add tasks to the ToDo array
  const handleSubmit: SubmitEventHandler = (e) => { 
    e.preventDefault()
    const todoTaskJoined: ITask[] = [...todoTasks,  {task: newTask, status: "todo"}] 
    setTodoTask(todoTaskJoined)
    setNewTask("")
  }
  
  type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
  type SubmitEventHandler = React.FormEventHandler<HTMLFormElement>
  interface ITask {task: string, status: string}

  const moveTaskToRight = (status:string, i:number) => {
    if(status === "todo"){
      const newStatus = "inprogress" 
      const newTasks:ITask[] = [...todoTasks]
      const inProgressTask = {task: newTasks[i].task, status: newStatus}
      const newInprogressTasks = [...inProgressTasks, inProgressTask]
      const newTodoTasks = removeTask(i, newTasks)
      setInProgressTask(newInprogressTasks)
      setTodoTask(newTodoTasks) 
    }
    if(status === "inprogress"){
      const newStatus = "done" 
      const newTasks:ITask[] = [...inProgressTasks]
      const doneTask = {task: newTasks[i].task, status: newStatus}
      const newDoneTasks = [...doneTasks, doneTask]
      const newInProgressTasks = removeTask(i, newTasks)
      setDoneTask(newDoneTasks) 
      setInProgressTask(newInProgressTasks)
    }
  }

  const moveTaskToLeft = (status:string, i:number) => {
    if(status === "done"){
      const newStatus = "inprogress"
      const newTasks:ITask[] = [...doneTasks]
      const inProgressTask = {task: newTasks[i].task, status:newStatus}
      const newInProgressTasks = [...inProgressTasks, inProgressTask]
      const newDoneTasks = removeTask(i, newTasks)
      setInProgressTask(newInProgressTasks)
      setDoneTask(newDoneTasks)
    }
    if(status === "inprogress"){
      const newStatus = "todo"
      const newTasks:ITask[] = [...inProgressTasks]
      const todoTask = {task: newTasks[i].task, status: newStatus}
      const newTodoTasks = [...todoTasks, todoTask]
      const newInProgressTasks = removeTask(i, newTasks)
      setTodoTask(newTodoTasks)
      setInProgressTask(newInProgressTasks)
    }
  }

  const removeTask = (index:number, array:ITask[]) => {
      const newTasks:ITask[] = [...array]
      newTasks.splice(index, 1)
      return newTasks
  } 

  return (
    <>
      <CardsWrapper>
        <Card title="To Do">
          {todoTasks.map((task:{task:string, status:string}, index:number) => {
              return <Task 
                onRightClick={() => moveTaskToRight(task.status, index)} 
                onLeftClick={() => moveTaskToLeft (task.status, index)} 
                taskTitle={task.task} 
                rightBtnColor="green" 
                leftBtnColor="rgb(255,153,153)" 
                rightBtnOff={false}
                leftBtnOff={true} 
                key={index} 
              />
          })}
        </Card>

        <Card title="In Progress">
          {inProgressTasks.map((task:{task:string, status:string}, index:number) => {
              return <Task 
                onRightClick={() => moveTaskToRight(task.status, index)} 
                onLeftClick={() => moveTaskToLeft (task.status, index)} 
                taskTitle={task.task} 
                rightBtnColor="green" 
                leftBtnColor="red" 
                rightBtnOff={false}
                leftBtnOff={false} 
                key={index} 
              />
          })}
        </Card>
        
        <Card title="Done">
          {doneTasks.map((task:{task:string, status:string}, index:number) => {
              return <Task 
                onRightClick={() => moveTaskToRight(task.status, index)} 
                onLeftClick={() => moveTaskToLeft (task.status, index)} 
                taskTitle={task.task} 
                rightBtnColor="rgb(143,188,143)" 
                leftBtnColor="red" 
                rightBtnOff={true}
                leftBtnOff={false} 
                key={index} 
              />
          })}
        </Card>

      </CardsWrapper>
      <InputForm onChange={updateTask} onSubmit={handleSubmit} newTask={newTask}></InputForm>
    </>
  )
}



