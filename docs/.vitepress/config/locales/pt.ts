import { defineConfig } from 'vitepress'

export default defineConfig({
	lang: 'en-US',
	description: 'ldap-passwords oferece hashing e verificação de senhas usando algoritmos de senha do LDAP.',
	themeConfig: {
		nav: [
			{ text: 'Guia', link: '/pt/guide/' },
		],
		search: {
			provider: 'local',
			options: {
				locales: {
					pt: {
						translations: {
							button: {
								buttonText: 'Pesquisar',
								buttonAriaLabel: 'Pesquisar',
							},
							modal: {
								backButtonTitle: 'Fechar Pesquisa',
								displayDetails: 'Mostra Lista Detalhada',
								resetButtonTitle: 'Resetar Pesquisa',
								noResultsText: 'Nenhum resultado para',
								footer: {
									navigateText: 'Para Navega',
									navigateUpKeyAriaLabel: 'Seta para Cima',
									navigateDownKeyAriaLabel: 'Seta para Baixo',
									selectText: 'Para Selecionar',
									selectKeyAriaLabel: 'Enter',
									closeText: 'Para Sair',
									closeKeyAriaLabel: 'esc',
								},
							},
						},
					},
				},
			},
		},
		sidebar: [
			{
				text: 'Guia',
				items: [
					{ text: 'Começando', link: '/pt/guide/' },
				],
			},
			{
				text: 'SHA512',
				items: [
					{ text: 'sha512Crypt', link: '/pt/guide/sha512crypt' },
					{ text: 'verifySha512', link: '/pt/guide/verifysha512' },
					{ text: 'Sha512 Gerador Online', link: '/pt/online/sha512crypt' },
					{ text: 'Sha512 Validador Online', link: '/pt/online/verifysha512' },
				],
			},
			{
				text: 'MD5',
				items: [
					{ text: 'md5', link: '/pt/guide/md5' },
					{ text: 'verifyMD5', link: '/pt/guide/verifymd5' },
					{ text: 'MD5 Gerador Online', link: '/pt/online/md5' },
					{ text: 'MD5 Validador Online', link: '/pt/online/verifymd5' },
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
