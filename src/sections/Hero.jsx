import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import BasicLightingModel from "three/src/nodes/functions/BasicLightingModel.js";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Csslogo from "../components/Css";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
// import { Leva,useControls } from "leva";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Yonas <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <HackerRoom
            //   position={sizes.deskPosition}  
            //   rotation={[0, -3, 0]}  
            //   scale={sizes.deskScale} 
            /> */}
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={isSmall ? [2, -2, 0] : isMobile ? [3.5, -2, 0] : [4.5, -4.5, 0]}
              rotation={isSmall ? [0.2, 0.5, 0] : isMobile ? [0.3, 0.6, 0] : [0.3, 0.7, 0]}
              scale={isSmall?40:isMobile?50:65}
            />
            </HeroCamera>

            <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition}/>
                <Csslogo position={sizes.csslogoPosition}/>
            </group>
            
            <spotLight position={[20, 90, 80]} angle={Math.PI / 6} intensity={25} penumbra={1} />
            <ambientLight intensity={1} />
            <directionalLight position={[-70, -150, 50]} intensity={5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerclass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
