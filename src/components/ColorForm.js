import randomColor from 'randomcolor';
import React from 'react';
import styled from 'styled-components';

const ColorParamsForm = styled.form`
	display: flex;
	position: absolute;
	top: 14rem;
	left: 5rem;
	flex-direction: column;
	gap: 10px;
`;

const Label = styled.label`
	align-self: flex-start;
	font-size: 1.2rem;
	font-weight: 600;
`;

const ParamsInput = styled.input`
	width: 200px;
	background: #fff;
	font: inherit;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
	border: 0;
	outline: 0;
	padding: 10px 6px;
	&::placeholder {
		opacity: 0.6;
	}
	&:focus::placeholder {
		color: transparent;
	}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	gap: 20px;
`;

const StyledButton = styled.button`
	margin-top: 0.5rem;
	width: 5.5rem;
	color: #fff;
	border: none;
	text-transform: uppercase;
	background: #6a7dfa;
	padding: 8px;
	display: inline-block;
	cursor: pointer;
	outline: none;
	font-weight: bold;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledSubmitButton = styled(StyledButton)`
	background: #6a7dfa;
`;

const StyledCancelButton = styled(StyledButton)`
	background: #e95252;
	margin-left: auto;
`;

function handleClearBtn() {
	document.getElementById('luminosity').value = '';
	document.getElementById('hue').value = '';
	document.getElementById('size').value = '';
}

export default function ColorForm({
	onSetColor,
	onSetClicked,
	onSetSize,
	onSetAlertMode,
	onSetAlertText,
}) {
	return (
		<div>
			<ColorParamsForm
				onSubmit={(e) => {
					e.preventDefault();
					const luminosity = document.getElementById('luminosity').value;
					const hue = document.getElementById('hue').value;
					const size = document.getElementById('size').value;
					const width = size.split('x')[0];
					const height = size.split('x')[1];
					if (width > 1200) {
						onSetAlertMode('inline-block');
						onSetAlertText('Please provide a width smaller than 1200px');
						setTimeout(() => {
							onSetAlertMode('none');
						}, 2500);
						return;
					} else if (height > 420) {
						onSetAlertMode('inline-block');
						onSetAlertText('Please provide a height smaller than 420px');
						setTimeout(() => {
							onSetAlertMode('none');
						}, 2500);
						return;
					} else {
						const selectedColor = randomColor({
							luminosity,
							hue,
						});
						onSetColor(selectedColor);
						onSetSize(size);
						onSetClicked(true);
					}
				}}
			>
				<Label htmlFor='luminosity'>Luminosity</Label>
				<ParamsInput
					type='text'
					name='luminosity'
					id='luminosity'
					required
					placeholder='light, dark, bright'
				/>
				<Label htmlFor='hue'>Hue</Label>
				<ParamsInput
					type='text'
					name='hue'
					id='hue'
					required
					placeholder='red, green, etc...'
				/>
				<Label htmlFor='hue'>Size (WWxHH)</Label>
				<ParamsInput type='text' name='size' id='size' placeholder='500x300' />
				<ButtonsWrapper>
					<StyledSubmitButton>submit</StyledSubmitButton>
					<StyledCancelButton
						type='button'
						className='color-btn clear-btn'
						onClick={() => {
							handleClearBtn();
						}}
					>
						clear
					</StyledCancelButton>
				</ButtonsWrapper>
			</ColorParamsForm>
		</div>
	);
}
