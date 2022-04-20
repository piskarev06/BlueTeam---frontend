import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { baseTheme } from './styles/themes/baseTheme/baseTheme'

const App = () => {
	return (
		<ThemeProvider theme={baseTheme}>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
