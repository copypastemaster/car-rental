import { Routes, Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import Nav from './components/Nav'
import Fleet from './containers/Fleet'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/fleet" element={<Fleet />}/>
      </Routes>   
    </>
  )
}

export default App
