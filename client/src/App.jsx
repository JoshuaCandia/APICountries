/* eslint-disable import/no-absolute-path */
import './App.css'
// Import views
import Create from './views/create/Create'
import Detail from './views/detail/Detail'
import Home from './views/home/Home'
import Landing from './views/landing/Landing'

// Import Hooks
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Landing />} />
			<Route exact path='/home' element={<Home />} />
			<Route exact path='/detail/:id' element={<Detail />} />
			<Route exact path='/create' element={<Create />} />
		</Routes>
	)
}

export default App
