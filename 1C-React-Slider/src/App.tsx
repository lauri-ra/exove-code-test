import { useState } from 'react';
import './App.css';

function App() {
	// States for the selected value & current slider values
	const [value, setValue] = useState<number>(50);
	const [currentValue, setCurrentValue] = useState<number>(value);

	// This function fires the event when user has stopped moving the slider
	const handleSlider = (event: React.MouseEvent<HTMLInputElement>) => {
		setValue(Number(event.currentTarget.value));
	};

	// This function updates the current value for displaying it to the user
	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(Number(event.currentTarget.value));
	};

	return (
		<>
			<h1>React Slider</h1>
			<div className='card'>
				<div className='slider-value'>{currentValue}</div>
				<input
					className='slider'
					onMouseUp={(event) => handleSlider(event)}
					onChange={(event) => handleSliderChange(event)}
					type='range'
					min='0'
					max='100'
				></input>
				<div className='value'>
					value is set to <b>{value}</b>
				</div>
			</div>
		</>
	);
}

export default App;
