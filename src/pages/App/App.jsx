
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import SearchPage from '../SearchPage/SearchPage'
import SearchDetailPage from '../SearchDetailPage/SearchDetailPage'
import NavBar from '../../components/NavBar/NavBar'
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />}/>
            <Route path="/orders" element={<OrderHistoryPage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/search/detail" element={<SearchDetailPage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}