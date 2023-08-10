import styled from "styled-components";

export default function EventCard({ title, date, type, description }) {
  return (
    <>
      <StyledArticle>
        <StyleTitle>{title}</StyleTitle>
        <p>{date}</p>
        <p>{type}</p>
        <p>{description}</p>
      </StyledArticle>
    </>
  );
}
const StyledArticle = styled.article`
  background-color: teal;
  padding: 1rem;
  color: white;
  width: fit-content;
  border: 2px solid black;
  border-radius: 2rem;
`;

const StyleTitle = styled.h3`
  background-color:
  color: black;
`;
