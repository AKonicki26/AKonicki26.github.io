import SplitSection from "../components/SplitSection/SplitSection";
import CyanneCard from '../Assets/cyanne.png'
import MyPic from "../Assets/azzy-pic.png";

const ProjectsPage = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <p>I've worked on a few projects during my time in college and in my personal time.
            <br/> Here are some ones I'm especially proud of, and think you should see!</p>

            <SplitSection
                imageSrc={CyanneCard}
                imageAlt="Playing Card"
                title="Splatoon Playing Card Generator"
                text={<span>This playing card generator was a for-fun project. A group of friends wanted to be able to make playing cards for ourselves based on our characters in the Nintendo video game Splatoon 3. To make this possible with a simple UI, I added several options based on how we wanted the cards to look, including board colors, name and division placements, and the ability to upload your own screenshot to be placed in the card. The card placements are designed to work with screenshots taken in-game, which will always be wider than they are tall. Going forward, I hope to add more customization options and fix some of the bugginess with moving and uploading the images.
            <br/><br/>
                This card generator is actually live on this website here! You can use it <a href={"./cardbuilder"}>on the CardBuilder Page!</a>
            </span>}
            />
            <div style={{ height: "50px" }}></div>

            <SplitSection
                imageSrc={MyPic}
                imageAlt="GeneticAlgorithm"
                title="Genetic Algorithm"
                text={<span>The genetic algorithm is an AI evolutionary algorithm that has generations of agents attempting to complete a task. The agents start with completely random inputs, then the best performers are selected and mutated slightly, hoping to have the mutations improve their performance. This cycle continues until a desired performance level is achieved.
<br/><br/>
In this simple test of the algorithm, the agents are trying to move from the left side of the screen towards a small target circle, and are scored by distance to the target and then by time to reach the target if multiple agents in a generation reach the target.

                    <br/><br/> GitHub Link: <a href="https://github.com/AKonicki26/GPR-340-Final" target={"_blank"}>https://github.com/AKonicki26/GPR-340-Final</a>
            </span>}
                flip={true}/>
            <div style={{ height: "50px" }}></div>

            <SplitSection
                imageSrc={MyPic}
                imageAlt="Chess"
                title="Chess AI"
                text={<span>This chess AI was built for an in-class competition for the Advanced AI for Games course. The goal was to take in a string representation of the board and return the best move possible. The AI used the MinMax algorithm to determine the best move.
<br/><br/>
To do this, it will first turn the string representation of the board into a usable object. Then it will generate all possible moves it can make from the current board state, then generate all possible moves the opponent can make from each of those new board states, and repeat until a certain depth has been found. Then, it will evaluate all board states and find the best possible state for itself, and make the move that leads to that board state.
<br/><br/>
To work efficiently, the AI is also multithreaded to get through as many board states as possible within the allotted time for the competition. It also reuses the same board object as often as it can to avoid wasting time and resources on memory allocations.
<br/><br/>
In the first competition, my AI placed first in the first competition, which was a single elimination bracket. We were then given a brief period of time to discover bugs and optimize our AIs further. After this time, my AI was eliminated in the second bracket run.
</span>}
            />
        </div>
    )
}

const Projects = () => {
return (
    <div className="main-content">
        <ProjectsPage></ProjectsPage>
    </div>
)
}

export default Projects;