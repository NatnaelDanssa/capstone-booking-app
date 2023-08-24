import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function EventCard({ id, title, date, type, description }) {
  return (
    <>
      <StyledLink href={`/events/${id}`}>
        <StyleTitle>{title}</StyleTitle>
        <StyleContent>
          <StyleDate>{date}</StyleDate>
          <StyleType>{type}</StyleType>
        </StyleContent>
        <StyleDescription>{description}</StyleDescription>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  background-color: #7c0716;
  color: white;
  padding: 1.5rem;
  width: 300px;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

const StyleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const StyleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
`;

const StyleDate = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
`;

const StyleType = styled.p`
  font-size: 0.9rem;
  color: white;
  background-color: #333;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const StyleDescription = styled.p`
  font-size: 0.9rem;
  color: white;
  margin-top: 1rem;
`;
