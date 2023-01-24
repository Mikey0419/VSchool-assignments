import './App.css'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
import { ThemeContextProvider } from './contextProvider'

function App() {

  return (
    <ThemeContextProvider>
        <Header />
        <Button />
        <Footer />
    </ThemeContextProvider>
  )
}

export default App
