import randomColor from 'randomcolor';
import React from 'react';

function handleClearBtn() {
	document.getElementById('luminosity').value = '';
	document.getElementById('hue').value = '';
}

export default function ColorForm(props) {
	return (
		<div>
			<form
				className='color-form'
				onSubmit={(e) => {
					e.preventDefault();
					const luminosity = document.getElementById('luminosity').value;
					const hue = document.getElementById('hue').value;
					const selectedColor = randomColor({
						luminosity,
						hue,
					});
					props.onSetColor(selectedColor);
					props.onSetClicked(true);
				}}
			>
				<label htmlFor='luminosity'>Luminosity</label>
				<input
					type='text'
					name='luminosity'
					id='luminosity'
					required
					placeholder='light, dark, bright'
				/>
				<label htmlFor='hue'>Hue</label>
				<input
					type='text'
					name='hue'
					id='hue'
					required
					placeholder='red, green'
				/>
				<div className='color-btn-wrapper'>
					<button className='color-btn'>submit</button>
					<button
						type='button'
						className='color-btn clear-btn'
						onClick={() => {
							handleClearBtn();
						}}
					>
						clear
					</button>
				</div>
			</form>
		</div>
	);
}
