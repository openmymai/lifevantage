import React from 'react';
import Hero from '../components/Hero';
import Client from '../components/Client';


const IndexPage = () => {
  return (
  <div>
    <Hero />
    <main id="main">
      <Client />
    </main>
  </div>
  )
}

export default IndexPage;