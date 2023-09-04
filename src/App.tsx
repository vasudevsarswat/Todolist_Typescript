import Addtodo from './components/Addtodo'
import Navbar from './components/Navbar'
import Todo from './components/Todo'

const App = () => {
  return (
    <main>
      <h1>Todo list using Typescript</h1>
      <Navbar />
      <Addtodo/>
      <Todo/>
    </main>
  )
}

export default App
