import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Route from './Route.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path:'/contactus',
        element: <ContactUs />
      },
      {
        path:'/user/:id',
        element: <User />
      },
      {
        path: '/github',
        element: <Github />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = "/" element={<Layout />}>
//       <Route path ="" element={<Home />} />
//       <Route path ="/about" element={<About />} />
//       <Route path = "/contactus" element={<ContactUs />} />
//        <Route 
//        loader = {() => {}}
//        path = "/github" 
//        element={<Github />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
