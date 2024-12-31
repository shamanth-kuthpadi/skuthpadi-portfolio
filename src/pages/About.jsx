
// I want to create a component for each work experience
import profileImg from "../assets/profile.jpeg";
import Experience from "../components/Experience";

import React from "react";
import TypingEffect from "react-typing-effect";


function About() {
    return (
      <div className="about">
        <div className="about-main">
          <div className="header">
            <h1>
              <TypingEffect
                text={["About ."]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
              />
            </h1>
          </div>
          <div className="container">
            <div className="profile-pic">
              <img src={profileImg} className="profimg" />
            </div>
            <div className="para">
              <p>
                I am Shamanth, a recent computer science graduate from the{" "}
                <a href="https://www.cics.umass.edu/">
                  University of Massachusetts Amherst
                </a>
                . My interests lie at the intersection of machine learning,
                causal modeling, medical analyses, and software development. In
                January 2025, I will continue my education as a Master's student
                in computer science at the University of Massachusetts Amherst.
              </p>
              <p>
                I am currently an ML research intern at{" "}
                <a href="https://iomics.ai/">IOMICS Corporation</a>, where I
                focus on building automated casual estimation pipelines for
                multi-omics data. In addition, I recently completed an
                independent study under the supervision of{" "}
                <a href="https://people.cs.umass.edu/~cmusco/">Cameron Musco</a>{" "}
                where I applied spectral analysis on structural brain
                connectomic networks to classify brain regions.
              </p>
              <h4>Other Interests/Hobbies</h4>
              <ul>
                <li>
                  I am a huge coffee enthusiast and love trying new coffee
                  roasts.
                </li>
                <li>I also enjoy watching and playing soccer</li>
                <li>
                  Gaming! At the moment, I am engrossed in Ghost of Tsushima.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experiences">
          <h2>My Experience</h2>
          <Experience
            name="IOMICS Corporation"
            date="June 2024"
            title="Machine Learning Research Intern"
            desc={[
              "Provided data-driven recommendations to the CTO and chief engineer, contributing to strategic decisions in product development and deployment",
              "Reviewed 50+ research papers on advanced machine learning and causal inference/discovery methodologies",
              "Utilized cutting-edge tools such as DoWhy and causal-learn to explore and answer causal questions in omics data",
              "Developed and delivered tutorials and theoretical presentations on causal analysis, effectively communicating complex concepts to the company’s engineers",
            ]}
            link="https://iomics.ai/"
          />
          <Experience
            name="University of Massachusetts Amherst"
            date="Sept. 2023 - June 2024"
            title="Undergraduate Course Assistant (UCA)"
            desc={[
              "Collaborated directly with professors and course instructors to foster learning 300+ students",
              "Engaged directly with students to provide course assistance in a broad category of concepts",
            ]}
            link="https://www.umass.edu"
          />
          <Experience
            name="University of Massachusetts Amherst"
            date="Sept. 2023 - Dec. 2023"
            title="Learning Resource Center (LRC) Peer Tutor"
            desc={[
              "Mentored 30+ students in a broad category of courses within the computer science department, earning an extension contract as a result of my effectiveness",
              "Selected as a distinguished hire from a pool of hundreds of candidates through two rounds of interview where I was tested on communication skills and academic aptitude",
            ]}
            link="https://www.umass.edu"
          />
          <Experience
            name="University of Massachusetts at Amherst"
            date="June 2023 - Sept. 2023"
            title="Undergraduate Research Volunteer (URV)"
            desc={[
              "Developed research skills in the field of data science and machine learning",
              "Shadowed PhD research work in Approximate Nearest Neighbor(ANN) search algorithm, gaining exposure to lab work",
              "Calculated performance metrics of various ANNs systems and visualized them graphically",
            ]}
            link="https://www.umass.edu"
          />
        </div>
      </div>
    );
}

export default About;