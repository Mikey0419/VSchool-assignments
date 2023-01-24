import './App.css'
import Button from './Button'
import Header from './Header'
import {ThemeContextProvider} from './contextProvider'

function App() {

  return (
    <ThemeContextProvider>
      <Header />
      <Button />
    </ThemeContextProvider>
  )
}

export default App
