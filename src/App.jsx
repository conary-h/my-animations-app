import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import ExpandableCard from './components/ExpandableCard';
import DragToReveal from './components/DragToReveal';
import StaggeredList from './components/StaggeredList';

function App() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <section>
        <h1>Framer motion example</h1>
        <p>
          This is a simple example of how to use Framer Motion to create a
          simple animation.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ExpandableCard />
          <ExpandableCard />
          <ExpandableCard />
        </div>

        <h2>How it works</h2>

        <div
          style={{
            maxWidth: 700,
            margin: 'auto',
            textAlign: 'left',
          }}
        >
          <p>
            <strong>Variants:</strong> We define two states using variants:
            initial for the default state and hover for the state when the mouse
            is over the card. Each state has different scale and backgroundColor
            properties.
          </p>
          <p>
            <strong>Animation:</strong> The whileHover prop on the motion.div
            tells Framer Motion to animate to the hover variant when the element
            is hovered over.
          </p>
          <p>
            <strong>Transition:</strong> The transition prop controls how the
            animation behaves between states, making the grow/shrink effect
            smooth.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 500, marginTop: 100, background: 'red' }}>
        <DragToReveal />
      </div>

      <section>
        <h1>GSAP example</h1>
        <p>
          This is a simple example of how to use GSAP to create a simple
          animation.
        </p>

        <StaggeredList />
      </section>
    </div>
  );
}

export default App;
