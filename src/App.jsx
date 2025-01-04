import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImageResult from './pages/ImageResult'
import Subscription from './pages/Subscription'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  console.log("App is rendering!");

  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Full viewport height
    },
    content: {
      flex: 1, // Allow this section to grow and take up available space
      overflowY: 'auto', // Enable scrolling for the content
      padding: '0px', // Optional padding for spacing
    },
    footer: {
      backgroundColor: '#0b1221', // Footer background color
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px 20px',
      marginTop: 'auto', // Ensures the footer sticks to the bottom
    },
    navbar: {
      position: 'sticky',
      top: 0, // Keeps navbar at the top when scrolling
      backgroundColor: '#080c16', // Navbar background color
      zIndex: 1000, // Ensures navbar stays on top of the content
      width: '100%',
    },
  };

  return (
    <div style={styles.appContainer}>
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
