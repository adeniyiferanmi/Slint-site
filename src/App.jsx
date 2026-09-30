import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pilgrimage } from './pages/Pilgrimage';
import { StudyAbroad } from './pages/StudyAbroad';
import { FlightTickets } from './pages/FlightTickets';
import { TourPackages } from './pages/TourPackages';
import { Destinations } from './pages/Destinations';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/pilgrimage" element={<Pilgrimage />} />
          <Route path="services/study-abroad" element={<StudyAbroad />} />
          <Route path="services/flight-tickets" element={<FlightTickets />} />
          <Route path="services/tour-packages" element={<TourPackages />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}