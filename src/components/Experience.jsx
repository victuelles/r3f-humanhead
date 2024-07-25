import { useFBX, useGLTF } from "@react-three/drei";
import { MaleHead } from "./MaleHead";

export const Experience = () => {
 
  const { scene } = useGLTF("models/MaleHead3.gltf");
  const dino = useFBX("models/ColoredMaleHead.fbx");
  return (
    <>
 
      {/* <primitive object={scene} scale={0.1}  /> */}
   <primitive object={dino} scale={0.1} opacity={.5}  /> 
      <MaleHead  scale={9.9}/>
    </>
  );
};