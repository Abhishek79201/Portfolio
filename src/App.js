import React, { Suspense } from 'react';
import './App.scss';

import CustomCursor from './assets/components/CustomCursor/index.jsx';
import AnimatedRoute from './AnimatedRoute';
function App() {
  return (
    <>
      <CustomCursor />
      <Suspense>
        <AnimatedRoute />
      </Suspense>
    </>
  );
}

export default App;
