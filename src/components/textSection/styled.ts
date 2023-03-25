import styled from "styled-components";
import Link from "next/link";

export const Header = styled.h2`
  margin: 2rem 0;
  text-align: center;
`;

export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 3rem 0;
  }
`;

export const InfoDiv = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 30vw;
  }
`;

export const TextDiv = styled.div`
  text-align: center;
  line-height: 1.5rem;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 65vw;
  }
`;

export const TagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledTag = styled.span`
  padding: 0.25rem;
  margin: 1rem;
  color: white;
  background-color: #34ebb1;
  border-radius: 10px;
  text-align: center;
`;

export const ProjectDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectLink = styled(Link)`
  font-size: 1.5rem;
  color: black;
  padding: 1rem;

  &:visited {
    text-decoration: none;
  }
`;
