import Data from '../components/Data';
import Project from '../components/Project';

function Projects() {
    const projects = Data.map(project => {
        return <Project
            key={project.id}
            {...project}
        // text={project.text}
        // img={project.img}
        // skill={project.skill}
        // years={project.years}
        />
    }
    )
    return <div className='projects'>{projects}</div>
}

export default Projects;



