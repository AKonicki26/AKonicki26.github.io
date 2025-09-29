import Slideshow from './components/Slideshow'
import SplitSection from './components/SplitSection/SplitSection'

import MyPic  from './Assets/azzy-pic.png'

const Homepage = () => {
    return (
        <div className="main-content">
            <h1>Astrid Konicki</h1>
            <Slideshow></Slideshow>
            <h2>
                About Me
            </h2>
            <SplitSection
                imageSrc={MyPic}
                imageAlt="Me!"
                title="About Me"
                text={<span>Hey there! My name is Astrid. I’m a Computer Science & Innovation major studying at Champlain College. I started programming in high school, where I took an introductory Computer Science course in Java, making it my first official programming language. From this course, I fell in love with programming and computer science. I originally intended to use what I learned to make games, with my second course being a Video Game Design course. From there, I began learning Unity with C#, but I admittedly didn't make much progress. However, it is the beginning of my journey with C#.
<br/><br/>
Entering college, I started learning C++, HTML, Python, and JavaScript within my first semester. After my first year, I was recruited for a summer job on a software development team in C# at the Leahy Center by my professor at the time, Murat Gungor. I was able to stay in the position as my sophomore year started. I then was able to rise into the team lead position for the summer into my junior year, and I am still leading the team today in my senior year.
<br/><br/>
Because of this position, I’ve found myself having a love for backend software development specifically. While C# is my best language due to the amount of time and experience I have with it, I don’t have a particular language I want to focus on in my career. If given the choice of industry, I hope to be able to work developing software for Cyber Security and/or Digital Forensics purposes, since my time at the Leahy Center has helped me get a window into that industry.
</span>}
            showTitle={false}/>
        </div>
    )
}

export default Homepage;