import styled from 'styled-components';

const StyledBoard = styled.div`
  display: grid;
  height: 50vh;
  width: 25vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content:center;
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
`;

export default StyledBoard