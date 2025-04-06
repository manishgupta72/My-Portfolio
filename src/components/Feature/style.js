// components/FeaturedProjects/style.js
import styled from "styled-components";

export const FeaturedSection = styled.div`
  background: ${({ theme }) => theme.card_light};
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeaturedTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 40px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProjectImageSlider = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 12px;
  border-radius: 16px;
  background: ${({ theme }) => theme.card_light};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;
  }

  & > img {
    width: 300px;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
    scroll-snap-align: center;
    flex-shrink: 0;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
      width: 240px;
      height: 140px;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: 120px;
    }
  }
`;

export const ProjectInfo = styled.div`
  padding: 20px;
`;

export const ProjectName = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StackItem = styled.span`
  background: ${({ theme }) => theme.primary + 15};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const ViewButton = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.primary + 90};
  }
`;
