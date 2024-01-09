import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'en-US',
	description: 'ldap-passwords oferece hashing e verificação de senhas usando algoritmos de senha do LDAP.',
	themeConfig: {
		nav: [
			{ text: 'Guia', link: '/pt/guide/' },
		],
		sidebar: [
			{
				text: 'Guia',
				items: [
					{ text: 'Oque é Ldap-passwords?', link: '/pt/guide/what-is' },
					{ text: 'Começando', link: '/pt/guide/' },
				],
			},
			{
				text: 'SHA512',
				items: [
					{ text: 'sha512Crypt', link: '/pt/guide/sha512crypt' },
					{ text: 'verifySha512', link: '/pt/guide/verifysha512' },
				],
			},
			{
				text: 'MD5',
				items: [
					{ text: 'md5Crypt', link: '/pt/guide/md5crypt' },
					{ text: 'verifyMD5', link: '/pt/guide/verifymd5' },
				],
			},
		],
		editLink: {
			pattern: 'https://github.com/dethdkn/ldap-passwords/edit/main/docs/:path',
			text: 'Edite esta página no GitHub',
		},
		docFooter: {
			prev: 'Página anterior',
			next: 'próxima página',
		},
		footer: {
			message: 'Lançado sob a licença MIT.',
			copyright: '© 2024 Gabriel \'DethDKN\' Rosa',
		},
	},
})
