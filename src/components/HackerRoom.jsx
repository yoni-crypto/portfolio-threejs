/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DeadLink (https://sketchfab.com/d43dLink)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-setup-8a75c64542c14be0ad3dcf75423eda0d
Title: Gaming Setup
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const HackerRoom=(props)=> {
  const { nodes, materials } = useGLTF('models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stoo1_Stoo1_0.geometry}
          material={materials.Stoo1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sit_sit_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pc_pc_0.geometry}
          material={materials.material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pc_pc_0_1.geometry}
          material={materials.material_2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/scene.gltf')
export default HackerRoom;
