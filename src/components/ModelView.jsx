import {
  View,
  PerspectiveCamera,
  OrbitControls,
  Html,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  controlRef,
  setRotationState,
  gsapType,
  item,
  size,
}) => {
  return (
    <>
      <View
        index={index}
        id={gsapType}
        className={` w-full h-full  ${
          index === 2 ? "-right-[100%]" : ""
        } absolute`}
      >
        {/* ambient light */}
        <ambientLight intensity={0.5} />
        {/* directional light */}

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        {/* to move the camera with a mouse use orbit controls */}
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => {
            setRotationState(controlRef.current.getAzimuthalAngle());
          }}
        />

        <group
          ref={groupRef}
          name={index == 1 ? "small" : "large"}
          position={[0, 0, 0]}
        >
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <IPhone
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      </View>
    </>
  );
};

export default ModelView;
