import { OrbitControls as OC } from "@react-three/drei"
import type { OrbitControlsProps } from "@react-three/drei/core/OrbitControls"

const OrbitControls = (props: OrbitControlsProps) => {
  return <OC {...props} />
}

export default OrbitControls