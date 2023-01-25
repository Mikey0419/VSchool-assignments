import { ContextProvider } from './context'
import List from './List'
import './App.css'

function App() {

  return(
    <ContextProvider>
      <List />
    </ContextProvider>
  )
}

export default App
