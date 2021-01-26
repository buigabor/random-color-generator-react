import styled from 'styled-components';

const StyledCanvas = styled.canvas`
	height: 100vh;
`;

export default function Canvas() {
	return <StyledCanvas id='viewport' />;
}
