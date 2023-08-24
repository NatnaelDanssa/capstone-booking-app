import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $direction = "row" }) => $direction};
  gap: 1rem;
  align-items: center;
`;

export default Flex;
