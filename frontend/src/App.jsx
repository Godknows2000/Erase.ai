import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImageResult from './pages/ImageResult'
import Subscription from './pages/Subscription'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  console.log("App is rendering!");

  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '0px',
    },
    footer: {
      backgroundColor: '#0b1221',
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px 20px',
      marginTop: 'auto',
    },
    // navbar: {
    //   position: 'sticky',
    //   top: 0,
    //   backgroundColor: '#080c16',
    //   zIndex: 1000,
    //   width: '100%',
    // },
  };

  return (
    <div style={styles.appContainer}>
      <ToastContainer position='top-right' />
      <div style={styles.navbar}>
        <Navbar />
      </div>

      <div style={styles.content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imageresult' element={<ImageResult />} />
          <Route path='/subscription' element={<Subscription />} />
        </Routes>
      </div>

      <Footer style={styles.footer} />
    </div>
  );
}

export default App;
