import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />

				<meta charSet="UTF-8" />
				<meta name="author" content="Save Team" />
				<meta
					name="description"
					content="Landing page do aplicativo save"
				/>
				<meta name="keywords" content="save, suap, ifrn, estudos" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
