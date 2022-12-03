import React, { Suspense } from 'react';
import './App.scss';
import Loder from './assets/components/Loder/Loder';
import CustomCursor from './assets/components/CustomCursor/index.jsx';
import AnimatedRoute from './AnimatedRoute';
function App() {
  return (
    <>
      <CustomCursor />
      <Suspense fallback={<Loder />}>
        <AnimatedRoute />
      </Suspense>
    </>
  );
}

export default App;
