import { UserButton } from '@clerk/nextjs'

function Home() {
	return (
		<div>
			<UserButton afterSignOutUrl="/sign-in" />
		</div>
	)
}

export default Home
