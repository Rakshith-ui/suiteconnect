import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SplashScreen , Home , RoomService , Facilities , Housekeeping , Support , MyCart , OrderConfirmed , TrackOrder } from './pages';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SplashScreen/>}/>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/room-service'} element={ <RoomService/>} />
        <Route path={'/my-cart'} element={ <MyCart/>} />
        <Route path={'/order-confirmed'} element={ <OrderConfirmed/>} />
        <Route path={'/track-order'} element={ <TrackOrder/>} />
        <Route path={'/facilties'} element={<Facilities/>}/>
        <Route path={'/housekeeping'} element={<Housekeeping/>}/>
        <Route path={'/support'} element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
