import React from 'react';
import Footer from '../containers/Footer';
// import { Link } from 'react-router-dom';
import Header from '../containers/Header';

// The Header creates links that can be used to navigate
// between routes.
const HomeSweetHome = () => (
  <div>
    <Header />
    <div>
      <p> Home Sweet Home. </p>
    </div>
    <Footer />
  </div>
);

export default HomeSweetHome;