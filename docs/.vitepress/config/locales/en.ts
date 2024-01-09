import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'en-US',
	description: 'ldap-passwords offers secure password hashing and verification using LDAP password algorithms.',
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide/' },
		],
		sidebar: [
			{
				text: 'Guide',
				items: [
					{ text: 'What is Ldap-passwords?', link: '/guide/what-is' },
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'SHA512',
				items: [
					{ text: 'sha512Crypt', link: '/guide/sha512crypt' },
					{ text: 'verifySha512', link: '/guide/verifysha512' },
				],
			},
			{
				text: 'MD5',
				items: [
					{ text: 'md5Crypt', link: '/guide/md5crypt' },
					{ text: 'verifyMD5', link: '/guide/verifymd5' },
				],
			},
		],
		editLink: {
			pattern: 'https://github.com/dethdkn/ldap-passwords/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
		docFooter: {
			prev: 'Previous page',
			next: 'Next page',
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: '© 2024 Gabriel \'DethDKN\' Rosa',
		},
	},
})
