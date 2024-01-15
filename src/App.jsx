//npm run dev 

import Main_page from './Components/Main_page'
import Header from './Components/Header'
import Playlist from './Components/Playlist'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {


  return (
    <>
     <Router >
      <Header />
        <Routes>
            <Route path='/' element={<Main_page />} />
            <Route path='/playlist' element={<Playlist />} />
            
        </Routes>
      <Footer />

    </Router> 
    
    
    </>
  )
}

export default App
