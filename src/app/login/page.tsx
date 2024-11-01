import { LoginForm, Logo } from '@/index';
import Link from 'next/link';

export default function Login() {
	return (
		<section className="py-10 sm:bg-light-grey min-h-screen">
			<div className="pb-6 sm:pb-12">
				<Logo />
			</div>
			<section className="grid gap-10 rounded-xl sm:shadow-sm p-10 bg-white max-w-[476px] mx-auto">
				<div className="grid gap-2">
					<h1 className="text-2xl">Login</h1>
					<p>Add your details below to get back into the app</p>
				</div>
				<div>
					<div className="*:grid *:gap-6">
						<LoginForm />
					</div>
					<div className="*:text-center pt-6 sm:flex justify-center gap-1">
						<p>Don&#39;t have an account?</p>
						<p>
							<Link
								className="text-purple hover:underline hover:underline-offset-2"
								href="/signup"
							>
								Create account
							</Link>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
