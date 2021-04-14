import { appWithTranslation } from 'next-i18next'

// CSS
import "typeface-fira-sans";
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(MyApp)

