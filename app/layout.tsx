import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Team Chat App',
	description: 'A Next based Team Chat App',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={openSans.className}>
					<div className="bg-[#313338]">{children}</div>
				</body>
			</html>
		</ClerkProvider>
	)
}
