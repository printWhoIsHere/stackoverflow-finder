import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import { AppWrapper } from './style';

const  App = () => {
  return (
    <AppWrapper>
      <Header />
      <Content />
      <Footer />
    </AppWrapper>
)
};

export default App;
