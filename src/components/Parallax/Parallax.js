//todo: is it necessary?
import "./Parallax.css";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${require("./../../assets/parallax/parallax1.jpg")})`,
        }}>
        <h3>
          Scroll Down to See the Parallax Effect.{" "}
          <span role="img" aria-label="arrow-down">
            ⬇️
          </span>
        </h3>

        <Parallax pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#232946" }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#8bd3dd" }} />

          <ParallaxLayer offset={1} speed={-0.2} style={{ opacity: 0.6 }}>
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ width: "50%", marginLeft: "20%" }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.2 }}>
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "50%", marginLeft: "55%" }}
            />
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "40%", marginLeft: "15%" }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0} style={{ opacity: 0.6 }}>
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "50%", marginLeft: "10%" }}
            />
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "40%", marginLeft: "55%" }}
            />
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ display: "block", width: "30%", marginRight: "55%" }}
            />
          </ParallaxLayer>
        </Parallax>
      </div>
      <footer>
        <span>Made with</span>
        <a target="_blank" rel="noreferrer" href="https://react-spring.io">
          &nbsp;React-Spring
        </a>
        <div>
          Cloud Image from
          <a target="_blank" rel="noreferrer" href="https://freepngimg.com/">
            &nbsp;FreePNGimg
          </a>
        </div>
      </footer>
    </>
  );
}
