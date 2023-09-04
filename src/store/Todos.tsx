import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProvideerProps ={
    children:ReactNode
}
export type Todo ={
    id:string;
    task:string;
    completed:boolean;
    created:Date;
}
export type Todoscontxt={
    todos:Todo[]
    handleAddToDo:(task:string)=>void;
    toggleTodoAsCompleted:(id:string)=>void;
    handleDeleteTodo:(id:string)=>void;
}


export  const Todoscontxt = createContext<Todoscontxt | null>(null)


export const TodosProvideer =({children}:TodosProvideerProps)=>{

    const[todos, setTodos]=useState<Todo[]>(()=>{
        try{
          const newTodos = localStorage.getItem("todos") ||"[]";
          return JSON.parse(newTodos) as Todo[]
        }
        catch(error){
            return [];
        }
    })
    const handleAddToDo = (task:string) => {
        setTodos((prev)=>{
            const newTodos:Todo[]=[
              {
                id:Math.random().toString(),
                task:task,
                completed:false,
                created:new Date()
              } ,
              ...prev 
            ]
           localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }
    const toggleTodoAsCompleted =(id:string) =>{
        setTodos((prev)=>{
            let newTodos=prev.map((todo)=>{
                if(todo.id=== id){
                    return {...todo ,completed:!todo.completed}
                }
                return todo;
            })
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }
    const handleDeleteTodo =(id:string)=>{
        setTodos((prev)=>{
            let newTodos=prev.filter((filterTodo)=>filterTodo.id !==id);
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos;
        })
    }

    return <Todoscontxt.Provider value={{todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo}}>
        {children}
    </Todoscontxt.Provider>
}

//consumer
export const useTodos = () => {
   const todosConsumer = useContext(Todoscontxt);
   if(!todosConsumer){
    throw Error("useTodos used outside of Provider");
   }
   return todosConsumer
}