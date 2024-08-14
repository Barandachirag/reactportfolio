import React from 'react';
import '../project/project.css';
import theme from '../../assets/theme.svg'
import project_data from '../../assets/project_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div className='project'>
      <div className="project-title">
        <h1>Project</h1>
        <img src={theme} alt="" />
      </div>
      <div className="project-container">
        {project_data.map((project,index)=>{
          return <img key={index} src={project.p_img} alt="" />
        })}
      </div>
       <div className="project-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
       </div>
    </div>
  );
};

export default Project;
