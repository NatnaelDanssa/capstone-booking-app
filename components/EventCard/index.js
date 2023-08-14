import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EventCard({ id, title, date, type, description }) {
  return (
    <>
      <StyledLink href={`/events/${id}`}>
        <StyleTitle>{title}</StyleTitle>
        <StyleDate>{date}</StyleDate>
        <StyleType>{type}</StyleType>
        <StyleDescription>{description}</StyleDescription>
      </StyledLink>
    </>
  );
}
const StyledLink = styled(Link)`
  background-color: teal;
  padding: 1rem;
  color: white;
  width: fit-content;
  border: 2px solid black;
  border-radius: 2rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #95091b;
    color: white;
  }
`;

const StyleTitle = styled.h3`
  background-color:
  color: black;
`;
const StyleDate = styled.p`
  width: 110px;
  height: 25px;
`;
const StyleType = styled.p`
  background-color: teal;
`;
const StyleDescription = styled.p`
  background-color: teal;
`;
