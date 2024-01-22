import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";

export const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const littleTokyo = useGLTF("./littleTokyo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <spotLight
      // position={[-20, 50, 10]}
      // angle={0.12}
      // penumbra={1}
      // intensity={1}
      // castShadow
      // shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        // object={computer.scene}
        object={littleTokyo.scene}
        scale={isMobile ? 0.6 : 0.65}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      // camera={{ position: [20, 3, 5], fov: 500 }}
      camera={{ position: [20, 3, 500], fov: 75 }}
      gl={{ preserveDrawingBuffer: false }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          minDistance={400}
          maxDistance={600}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI * 1.9999}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.55}
          enablePan={false}
          rotateSpeed={1}
          target={-1}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
