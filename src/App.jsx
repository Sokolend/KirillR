import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
	const state = [
		{
			name: 'Иванов Иван Иванович',
			passport: '19 19 191919',
			birthDate: '18.01.2000',
			expires: '03.11.2022',
			number: '1000 1978 1475 6203',
		},
		{
			name: 'Сергеев Сергей Сергеевич',
			passport: '19 19 191919',
			birthDate: '18.01.2000',
			expires: '03.11.2022',
			number: '1000 1978 1475 6203',
		},
	]

	const nameElement1 = (
		<>
			<h2>{state[0].name}</h2>
		</>
	)
	const nameElement2 = (
		<>
			<h2>{state[1].name}</h2>
		</>
	)

	return (
		<div className='App'>
			<Routes>
				<Route path='/1' element={nameElement1} />
				<Route path='/2' element={nameElement2} />
			</Routes>
		</div>
	)
}

export default App
