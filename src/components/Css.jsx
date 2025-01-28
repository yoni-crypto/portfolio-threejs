import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Csslogo = (props) => {
  const { nodes, materials } = useGLTF('models/csslogo/scene.gltf')
  const meshRef = useRef() // Reference to the cube

  // Use frame to apply continuous rotation on each render frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 // Adjust this value to control speed
    }
  })

  return (
    <Float floatIntensity={1} dispose={null}>
      <group {...props} scale={0.1}>
        <mesh
          ref={meshRef} // Assign the reference to the mesh
          geometry={nodes.Baked_baked_0.geometry}
          material={materials.baked}
          position={[-100, 47, 1]} // Fixed position
          rotation={[2, -4, 10]}
          scale={1.5}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('models/csslogo/scene.gltf')
export default Csslogo
