import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from "./store/store"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Lay from './Lay'
import Society from './components/Society'
import Home from './components/Home'
import Senior from './components/Senior'
import {Provider} from 'react-redux';
import Post from './components/Post'
import Chat from './components/Chat'
import BoysHostel from './components/BoysHostel'
import Contact from './components/Contact'
import GirlsHostel from './components/GirlsHostel'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </StrictMode>,
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Lay/>}>
      <Route path='' element={<Home/>} />
      <Route path='society' element={<Society/>} />
      <Route path='senior' element={<Senior/>} />
      <Route path='explore/post' element={<Post/>} />
      <Route path='explore/chat' element={<Chat/>} />
      <Route path='explore/hostel/boyshostel' element={<BoysHostel/>} />
      <Route path='explore/hostel/girlshostel' element={<GirlsHostel/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>  
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)