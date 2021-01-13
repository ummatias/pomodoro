import styled from 'styled-components';

export const ColorBase = styled.View`
    height: 25px;
    width: 25px;
    border-radius: 80px;
    background-color: ${ props => props.color };
`
