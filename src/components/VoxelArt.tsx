import { Suspense, lazy } from "react";
import {
  Html,
  useProgress,
  SpotLight
} from "@react-three/drei";

const Canvas = lazy(() => import('./ThreeCanvas'))
const Model = lazy(() => import('./CV_Center'))
const OrbitControls = lazy(() => import('./OrbitControls'))

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const VoxelArt = () => {
  return (
    <Canvas camera={{ position: [-12, 10, 10] }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enabled autoRotate />
        <Model scale={1.75} />
        <ambientLight intensity={0.4} />
        <pointLight position={[-200, 40, 50]} castShadow={true} />
      </Suspense>
    </Canvas>
  ); 
};

export default VoxelArt;
