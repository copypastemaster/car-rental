import { Routes, Route } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>   
    </>
  )
}

export default App
