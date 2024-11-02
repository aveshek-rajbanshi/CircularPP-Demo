import { Canvas } from "@react-three/fiber";
import React from 'react'
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Cyl from "./Cyl";
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing";

function App() {
  return (
    <>
  <Canvas flat camera={{ fov: 25 }}>n
       {/* <OrbitControls /> */}
       <ambientLight />
       <Cyl /> 
       <EffectComposer>
       <Bloom
         mipmapBlur
         intensity ={7.0}
         lumianceThreshold={0}
         luminanceSmoothing={0}
         /> 
         <ToneMapping adaptive />
         </EffectComposer> 
  </Canvas>

  <div className="w-full bg-black py-32">
    <h1 className="text-white text-center ">Welcome to Portfolio.</h1>
  </div>

  </>
  );
};

export default App;