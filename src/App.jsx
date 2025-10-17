import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SplashScreen , Home , RoomService , Facilities , FacilitiesServices , BookingConfirmed , Housekeeping , Support , MyCart , OrderConfirmed , TrackOrder, ExtraTowels , RequestConfirmed , LiveChat } from './pages';

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
        <Route path={'/facilities'} element={<Facilities/>}/>
        <Route path={'/facilities-services'} element={<FacilitiesServices/>}/>
        <Route path={'/booking-confirmed'} element={<BookingConfirmed/>}/>
        <Route path={'/housekeeping'} element={<Housekeeping/>}/>
        <Route path={'/extratowels'} element={<ExtraTowels/>}/>
        <Route path={'/request-confirmed'} element={<RequestConfirmed/>}/>
        <Route path={'/support'} element={<Support/>}/>
        <Route path={'/live-chat'} element={<LiveChat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
