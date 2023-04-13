
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Follower from './pages/Follower/Follower';
import Home from './pages/Home/Home';
import Front from './pages/Front/Front';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Front />} />
            <Route path="profile/:id" element={<Home />} />
            <Route path="followers" element={<Follower />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
