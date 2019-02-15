import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lost Valley Luau - 2019</title>
        <link rel="canonical" href="https://lostvalleyluau.com/" />
        <link href="https://fonts.googleapis.com/css?family=Kanit:400,600,800" rel="stylesheet" />
        <meta name="description" content="Missouri's premier early season cross country mountain bike race, snaking through the scenic hillsides and valleys of Weldon Spring, MO."/>
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer>
        <h2>Footer</h2>
      </Footer>
    </div>
  );
};

export default Layout;
