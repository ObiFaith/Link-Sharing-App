'use client';
import { Header, LinkComp, Profile } from '@/index';
import { useState } from 'react';
import Layout from './dashboardLayout';

const Dashboard = () => {
	const [active, setActive] = useState<number>(1);

	return (
		<main className="bg-light-grey p-4 sm:p-6 transition-all">
			<Header active={active} setActive={setActive} />
			{active === 1 && (
				<Layout
					Heading="Customize your links"
					subHeading="Add/edit/remove links below and then share all your profiles with the world!"
				>
					<LinkComp />
				</Layout>
			)}
			{active === 2 && (
				<Layout
					Heading="Profile Settings"
					subHeading="Add your details to create a personal touch to your profile."
				>
					<Profile />
				</Layout>
			)}
		</main>
	);
};

export default Dashboard;
