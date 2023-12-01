/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level18.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level18-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.017Action"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_018">
          <mesh
            name="result-5_009"
            geometry={nodes["result-5_009"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={nodes["result-5_009"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_009"].morphTargetInfluences}
          />
          <mesh
            name="result-5_009_1"
            geometry={nodes["result-5_009_1"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_009_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_009_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_009_2"
            geometry={nodes["result-5_009_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_009_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_009_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_009_3"
            geometry={nodes["result-5_009_3"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_009_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_009_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_009_4"
            geometry={nodes["result-5_009_4"].geometry}
            material={materials["petals.001"]}
            morphTargetDictionary={
              nodes["result-5_009_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_009_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_009_5"
            geometry={nodes["result-5_009_5"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_009_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_009_5"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level18-transformed.glb");
