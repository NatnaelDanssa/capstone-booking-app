import styled from "styled-components";

const StyledArticle = styled.article`
  background-color: teal;
  padding: 1rem;
  color: white;
  width: fit-content;
`;

export default function EventCard({ title, date, type, desc }) {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{type}</p>
      <p>{desc}</p>
    </StyledArticle>
  );
}
