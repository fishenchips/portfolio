import styled from "styled-components";

export const TagDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1020px) {
    width: 40%;
  }
`;

export const StyledTag = styled.p`
  padding: 0.5rem 1rem;
  line-height: 1.1rem;
  color: #34ebb1;
  background-color: #dcf7e7;
  border-radius: 25px;
  text-align: center;
`;

export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100vw;
  }
`;

export const TimeDiv = styled.div`
  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const InfoDiv = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
    width: 40%;
  }
`;
