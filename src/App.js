import React from 'react';
import items from './data';
import Accordion from './Accordion';

function App() {
  return <main>
    <section className="container">
    <h2>accordion project setup</h2>
    <Accordion items={items}/>
    </section>
  </main>
}

export default App;
