import { Canvas } from "@react-three/fiber"
import type { Props } from '@react-three/fiber/dist/declarations/src/web/Canvas'

const ThreeCanvas = (props: Props) => {
  return <Canvas {...props} />
}

export default ThreeCanvas