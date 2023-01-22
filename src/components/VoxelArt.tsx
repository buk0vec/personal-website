import { Suspense, lazy } from "react";
import { Html } from "@react-three/drei";

const Canvas = lazy(() => import("./ThreeCanvas"));
const Model = lazy(() => import("./CV_Center"));
const OrbitControls = lazy(() => import("./OrbitControls"));

function Loader() {
  return (
    <Html center as="div">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Html>
  );
}

const VoxelArt = () => {
  return (
    <Canvas camera={{ position: [-12, 10, 10] }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enabled autoRotate />
        <Model scale={1.75} />
        <pointLight
          position={[-200, 40, 50]}
          color={[213, 174, 122]}
          intensity={0.01}
        />
        <hemisphereLight
          position={[0, 50, 0]}
          color={[213, 174, 122]}
          intensity={0.01}
        />
        <ambientLight intensity={0.2} />
      </Suspense>
    </Canvas>
  );
};

export default VoxelArt;
