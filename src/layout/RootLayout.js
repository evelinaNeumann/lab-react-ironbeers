import React from 'react';
import {  Outlet } from 'react-router-dom';
import Header from '../components/Header'
export default function RootLayout () {
    return (
        <div className="root-layout">
             
              <header>
          <Header />
       
        </header>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}