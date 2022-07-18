import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/structure/header';
import Footer from './components/structure/footer';
import Content from './components/structure/content';
import Repositories from './pages/repositories';
import Profile from './pages/profile';
import Favorites from './pages/favorites';
import './App.css';
import { UserProvider } from './context/UserProvider';

export default function App() {

  return (

    <div className="app-content">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/repositories" element={<Repositories />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Content>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>

  )

}
