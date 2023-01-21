import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Model } from "./CV_Center";

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
        <Environment preset="sunset" />
        <ambientLight intensity={1} />
      </Suspense>
    </Canvas>
  );
};

export default VoxelArt;
