
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ren from './render';

import Signup from './signup';
import Login from './login';
import CartList from './cartlist';
import Admin from './admin_page';
import Cat from './cat_sec';
import Payment from './payment';
import FormValidation from './checkout';

export default function App() {
  return (

<BrowserRouter>
<Routes>
<Route  exact path='/gotohome' element={<Ren/>}/>
<Route  path='/mainpage' element={<Cat/>}/>
<Route  path='/mainpage/home' element={<Cat/>}/>
<Route  path='/grocery/signup' element={<Signup/>}/>
<Route  path='/grocery/login' element={<Login/>}/>
<Route  path='/cartlist' element={<CartList/>}/>
<Route  path='/goto/payment/paymentgateway' element={<Payment/>}/>
<Route  path='/checkout' element={<FormValidation/>}/>
</Routes>
    </BrowserRouter>

  );
}
