"use client";
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import clsx from 'clsx';

// Custom component for rotating the model
const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      <Suspense fallback={null}>
          {children}
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
