import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('yonidisu111@gmail.com')
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000);
  }
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex items-center justify-center ">
              <img
                //   src="/assets/grid1.png "
                src="/assets/myphoto.png "
                alt="grid-1"
                className="w-[75%] sm:h-[276px] h-fit object-contain opacity-50"
              />
            </div>
            <div>
              <p className="grid-headtext">Hi,I'm Yonas Addisu</p>
              <p className="grid-subtext">
    With 2 years of experience in web development, I specialize in creating user-friendly interfaces and robust backend solutions. I enjoy collaborating with teams and tackling new challenges, always eager to learn and adapt to the latest technologies in the field.
</p>

            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/techstack.png"
              alt="grid-2"
              className="w-full sm:w-[276] h-fit object-contain opacity-50"
            />
            <p className="grid-headtext">Tech stack</p>
            <p className="grid-subtext">
    I specialize in JavaScript with a focus on React.js, and I have experience with Node.js for backend development. Recently, I've been working with Next.js. Additionally, I am proficient in SQL, MySQL, and MongoDB for database management, and I have knowledge of Java and C++.
</p>

          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

              />
            </div>
            <div className="">
              <p className="grid-headtext">I work remotely across most timezones.</p>
              <p className="grid-subtext">I’m a skilled developer based in Ethiopia, offering my expertise for remote projects. I’m dedicated to creating effective solutions that meet client needs.</p>
              <a href="tel:+251922105234" className="w-full mt-10  flex items-end">
                <Button
                  name={
                    <div className="flex items-center space-x-2">
                      <img src="/assets/icons8-call-48.png" alt="phone" className="w-5 h-5" />
                      <span>Contact me</span>
                    </div>
                  }
                  isBeam
                  containerClass="w-full"
                />
              </a>

            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I'm passionate about crafting cutting-edge, interactive web experiences that engage users and push the boundaries of what’s possible on the web.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2 flex justify-center items-center">
  <div className="grid-container bg-gray-900 rounded-xl shadow-lg p-4 space-y-4">
    <div className="flex justify-center items-center h-[75%]">
      <img
        src="/assets/emailicon.png"
        alt="email-icon"
        className="w-auto h-auto max-w-[120px] max-h-[120px]" 
      />
    </div>
    <div className="space-y-2 text-center">
      <p className="grid-subtext text-lg font-semibold text-white">
        Contact me
      </p>
      <a
        href="mailto:yonidisu111@gmail.com"
        className="flex items-center justify-center space-x-2 text-white"
      >
        {/* Email Icon */}
        <img
          src="assets/emailicon.png"
          alt="email"
          className="w-6 h-6"
        />
        <p className="lg:text-xl md:text-lg font-medium text-gray-300 hover:text-white transition">
          yonidisu111@gmail.com
        </p>
      </a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
