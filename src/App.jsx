import { useState } from 'react'
import logo from './logo.svg'
import goslogo from './goslogo.svg'
import rusflag from './rusflag.svg'
import cardsvg from './card.svg'
import calendarLogo from './calendar.svg'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
	const state = [
		{
			name: 'Р**** К***** О*******',
			passport: '19** ***519',
			birthDate: '30.08.2002',
			expires: '12.11.2022',
			number: '1000 1978 2764 8905',
		},
		{
			name: 'Р**** К***** О*******',
			passport: '19** ***313',
			birthDate: '20.03.2000',
			expires: '08.11.2022',
			number: '1000 1978 5834 6954',
		},
	]

	const nameElement1 = (
		<div className='card'>
			<div className='header'>
				<img src={goslogo} />
				<div className='lang'>
					<img src={rusflag} />
					<span>RUS</span>
				</div>
			</div>

			<div class='card-inner'>
				<h4 class='title-h4 white status-title main-title'>
					Сертификат COVID-19
				</h4>
				<div class='verified'>
					<span>Действителен </span>
				</div>
				<h4 style={{ marginTop: '12px' }}>
					<span class='num-symbol'>№</span>
					<span class='unrz'>{state[0].number}</span>
				</h4>
			</div>

			<div class='calendar'>
				<div class='calendarcont'>
					<img src={calendarLogo} />
					<div class='text first bold'>Действует до: </div>
					<div class='text bold'>{state[0].expires}</div>
				</div>
			</div>
			<div style={{ marginTop: '24px' }}>
				<div class='mb-4 fioWrap bold '>
					<div class='small-text mb-4 mr-4 attr-title hide'>
						ФИО:{' '}
					</div>
					<div class='bold correctFontSize'>{state[0].name}</div>
				</div>
				<div class='mb-4 fioWrap'>
					<div class='mb-4 mr-4 bold'>Дата рождения: </div>
					<div style={{ marginLeft: '2px' }} class='text bold'>
						{state[0].birthDate}
					</div>
				</div>
				<div class='mb-4 fioWrap'>
					<div class='small-text mb-4 mr-4 attr-title bold'>
						Паспорт:
					</div>
					<div style={{ marginLeft: '2px' }} class='text bold'>
						{state[0].passport}
					</div>
				</div>
			</div>
			<div class='mt-24'>
				<a href='https://www.gosuslugi.ru/' class='button close'>
					Закрыть
				</a>{' '}
				<a
					download=''
					rel='noopener'
					target='_blank'
					class='button download hide'></a>
			</div>
		</div>
	)

	return (
		<div className='App'>
			<Routes>
				<Route path='/1' element={nameElement1} />
			</Routes>
		</div>
	)
}

export default App
