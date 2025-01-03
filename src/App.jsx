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
      padding: '20px', // Optional padding for spacing
    },
    footer: {
      backgroundColor: '#0b1221', // Example footer styling
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px 20px',
    },
  };

  return (
    <div style={styles.appContainer}>
      <Navbar />

      <div style={styles.content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imageresult' element={<ImageResult />} />
          <Route path='/subscription' element={<Subscription />} />
        </Routes>
      </div>

      <Footer style={styles.footer} />
    </div>
  )
}

export default App
