import styled from 'styled-components';

const StyledTile = styled.div<{ player: 'x' | 'o' | null }>`
& {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  background-color: ${({ player }) => 
    player === 'x' ? '#f0f0f0' : player === 'o' ? '#e0e0e0' : '#ffffff'};
  border: 1px solid #000;
}
  &:before {
    content: '${({ player }) => 
    player === 'x' ? 'x' : player === 'o' ? '0' : ''}'

  }
`;

export default StyledTile