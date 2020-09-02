import React from "react";
import Fade from "react-reveal/Fade";
import Section from "elements/Section";

import Client01 from "assets/images/clients-01.svg";
import Client02 from "assets/images/clients-02.svg";
import Client03 from "assets/images/clients-03.svg";
import Client04 from "assets/images/clients-04.svg";
import Client05 from "assets/images/clients-05.svg";
export default function Clients() {
  return (
    <Section className="clients">
      <Fade bottom delay={2000}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Client01} alt={Client01} />
              </li>
              <li>
                <img src={Client02} alt={Client02} />
              </li>
              <li>
                <img src={Client03} alt={Client03} />
              </li>
              <li>
                <img src={Client04} alt={Client04} />
              </li>
              <li>
                <img src={Client05} alt={Client05} />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
