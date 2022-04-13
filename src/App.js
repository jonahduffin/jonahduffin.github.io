import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SortHome from './sorting/SortHome';
import Layout from './Layout';
import Home from './home/Home';
import AboutMe from './aboutme/AboutMe';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="sorting" element={<SortHome />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
