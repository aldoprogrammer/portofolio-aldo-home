import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import { GitHub } from '@material-ui/icons';
import "../styles/ProjectDisplay.css";
import { IconButton } from '@material-ui/core';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

  return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img src={project.image} alt="gambar project"/>
        <p>
            <b>Skills:</b> {project.skills}
        </p>
      <IconButton href={project.github} target="_blank">
        <GitHub />
      </IconButton>
    </div>
  );
}

export default ProjectDisplay