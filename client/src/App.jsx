import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { HomeLayout } from './layouts/HomeLayout'
import HomePage from './pages'
import ContactPage from './pages/contact'
import ServicePage from './pages/services'



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeLayout><HomePage/></HomeLayout>} />
          <Route path='/services' element={<HomeLayout><ServicePage/></HomeLayout>} />
          <Route path='/contact' element={<HomeLayout><ContactPage/></HomeLayout>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
