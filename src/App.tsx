import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { baseTheme } from './styles/themes/baseTheme/baseTheme'

import { Authorization } from './pages/AuthorizationPage/Authorization'

const App = () => {
	return (
		<ThemeProvider theme={baseTheme}>
			<Authorization />
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
