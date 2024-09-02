import styled from 'styled-components';

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' | null }>`
background:  ${({ variant }) => 
    variant === 'primary' ? '#eb6b56' : variant === 'secondary' ? '#b05f6d' : '#eb6b56'};
border:none;
padding: 20px;
color: #fff;
cursor:pointer;
`;

export default StyledButton