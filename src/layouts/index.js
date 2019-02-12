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
        <link href="https://fonts.googleapis.com/css?family=Kanit:300,800" rel="stylesheet" />
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
