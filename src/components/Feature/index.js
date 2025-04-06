// components/FeaturedProjects/index.js
import React from "react";
import {
  FeaturedSection,
  FeaturedTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImageSlider,
  ProjectInfo,
  ProjectName,
  ProjectDescription,
  ProjectStack,
  StackItem,
  ViewButton,
} from "./style";

import { featuredProjects } from "../../data/constants";

const FeaturedProjects = ({ setOpenModal }) => {
  return (
    <FeaturedSection id="featured">
      <FeaturedTitle>🚀 Featured Projects</FeaturedTitle>
      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImageSlider>
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`slide-${i}`} />
              ))}
            </ProjectImageSlider>
            <ProjectInfo>
              <ProjectName>{project.title}</ProjectName>
              <ProjectDescription>
                {project.description.split("\n")[0].slice(0, 150)}...
              </ProjectDescription>
              <ProjectStack>
                {project.stack.map((tech, i) => (
                  <StackItem key={i}>{tech}</StackItem>
                ))}
              </ProjectStack>
              <ViewButton
                onClick={() => setOpenModal({ state: true, project })}
              >
                View Project
              </ViewButton>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </FeaturedSection>
  );
};

export default FeaturedProjects;
