import { Logo, SignupForm } from '@/index';
import Link from 'next/link';

export default function Signup() {
	return (
		<main className="py-10 sm:bg-light-grey min-h-screen">
			<div className="pb-6 sm:pb-12">
				<Logo />
			</div>
			<section className="grid gap-10 rounded-xl sm:shadow-sm p-10 bg-white max-sm:max-w-96 sm:max-w-[476px] mx-auto">
				<div className="grid gap-2">
					<h1 className="text-2xl">Create account</h1>
					<p>Let&#39;s get you started sharing your links!</p>
				</div>
				<div>
					<div className="*:grid *:gap-6">
						<SignupForm />
					</div>
					<div className="*:text-center pt-6 sm:flex gap-1 justify-center">
						<p>Already have an account?</p>
						<p>
							<Link
								className="text-purple hover:underline hover:underline-offset-2"
								href="/"
							>
								Login
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
