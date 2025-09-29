import React from "react";
import "./Resume.css";
import educationImg from "../Assets/champlain-sign.jpg"; // replace with your college logo
import skillsImg from "../Assets/csharp-code.png";      // abstract tech illustration
import experienceImg from "../Assets/leahy.jpg";    // project/team illustration
import SplitSection from "../components/SplitSection/SplitSection";           // your split-section component

const ResumePage = () => {
    return (
        <div className="main-content">
            {/* Education + Coursework */}
            <SplitSection
                imageSrc={educationImg}
                imageAlt="Champlain College Logo"
                title="Education"
                text={
                    <>
                        <strong>Champlain College</strong><br />
                        Computer Science & Innovation, minor in Game Programming<br />
                        Burlington, VT, 05401
                        <br /><br />
                        <strong>Course Work:</strong><br />
                        Linux/Unix Programming<br />
                        Network Programming<br />
                        Data Structures & Algorithms<br />
                        Open Source Software Dev<br />
                        Database Management Systems<br />
                        Data Mining<br />
                        Computer Architecture<br />
                        Software Design Patterns<br />
                        Game Architecture<br />
                        Advanced Artificial Intelligence for Games
                    </>
                }
            />

            {/* Technical Skills */}
            <SplitSection
                imageSrc={skillsImg}
                imageAlt="Technical Skills Illustration"
                title="Technical Skills"
                text={
                    <>
                        <strong>Programming Languages & Tools:</strong><br />
                        C, C/C++, HTML/CSS/JavaScript, Python, Bash, C# (.NET), Java, Go, SQL, GitHub Actions, MSTest, LiteDB
                        <br /><br />
                        <strong>Other Skills:</strong><br />
                        Git / Git workflows, CI/CD pipelines, Docker, Bash scripting, Unity, Linux/Unix environments, responsive web design, ADB
                        <br /><br />
                        <strong>Leadership / Professional Skills:</strong><br />
                        Team management, project planning & oversight, documentation & CI/CD governance, conference participation / networking
                    </>
                }
                flip={true}
            />

            {/* Experience */}
            <SplitSection
                imageSrc={experienceImg}
                imageAlt="Leahy Center Teamwork"
                title="Experience"
                text={
                    <>
                        <strong>Leahy Center (May 2023 - Current)</strong><br />
                        At the Leahy Center, I manage a team of software developers designing a tool to automate the process of data extraction about IoT smart devices from Android devices using ADB under a research grant from the NCFI. The project uses the .NET Framework and has been in development since 2021. I also oversee all of the projects' CI/CD developments, such as automated unit testing and linting, to even working with an internal documentation tool on DocFX that automatically updates when new code or documentation is merged.
                        <br /><br />
                        Because of my work on the project, I was also sent on an expenses-paid business trip to the Techno Security & Digital Forensics Conference in the summer of 2024 to network and learn from industry experts giving seminars at the conference.
                    </>
                }
            />
        </div>
    );
};

export default ResumePage;
