import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Auth',
	description: 'A Next based Team Chat App',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="h-screen w-screen flex items-center justify-center">
			{children}
		</main>
	)
}
