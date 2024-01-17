import theme from 'vitepress/theme'

import './extend.css'

import { inject } from '@vercel/analytics'

inject()

export default {
	...theme,
}
