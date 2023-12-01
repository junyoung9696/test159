/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level8.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level8-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.003Action"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_008">
          <mesh
            name="result-5_006"
            geometry={nodes["result-5_006"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_006"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_006"].morphTargetInfluences}
          />
          <mesh
            name="result-5_006_1"
            geometry={nodes["result-5_006_1"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_006_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_2"
            geometry={nodes["result-5_006_2"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_006_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_3"
            geometry={nodes["result-5_006_3"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={
              nodes["result-5_006_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_4"
            geometry={nodes["result-5_006_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_006_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_5"
            geometry={nodes["result-5_006_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_006_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_6"
            geometry={nodes["result-5_006_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_006_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level8-transformed.glb");
