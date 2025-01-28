import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    // Smoothly move the camera position towards [0, 0, 20]
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

    // Update group rotation based on pointer movement, but only on non-mobile devices
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      )
    }
  })

  return (
    <group scale={1} ref={groupRef}>
      {children}
    </group>
  )
}

export default HeroCamera
