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
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'SHA512',
				items: [
					{ text: 'sha512Crypt', link: '/guide/sha512crypt' },
					{ text: 'verifySha512', link: '/guide/verifysha512' },
					{ text: 'Sha512 Online Generator', link: '/online/sha512crypt' },
					{ text: 'Sha512 Online Validator', link: '/online/verifysha512' },
				],
			},
			{
				text: 'SSHA',
				items: [
					{ text: 'ssha', link: '/guide/ssha' },
					{ text: 'verifySSHA', link: '/guide/verifyssha' },
					{ text: 'SSHA Online Generator', link: '/online/ssha' },
					{ text: 'SSHA Online Validator', link: '/online/verifyssha' },
				],
			},
			{
				text: 'MD5',
				items: [
					{ text: 'md5', link: '/guide/md5' },
					{ text: 'verifyMD5', link: '/guide/verifymd5' },
					{ text: 'MD5 Online Generator', link: '/online/md5' },
					{ text: 'MD5 Online Validator', link: '/online/verifymd5' },
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
