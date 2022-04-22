import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { baseTheme } from './styles/themes/baseTheme/baseTheme'

import { RouterProvider } from './hocs/RouterProvider'

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={baseTheme}>
				<RouterProvider />
				<GlobalStyles />
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
