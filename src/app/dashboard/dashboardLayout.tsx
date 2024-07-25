import { PhoneMockup } from '@/index';
import React from 'react';

const Layout = ({
	children,
	Heading,
	subHeading,
}: {
	children: React.ReactNode;
	Heading: string;
	subHeading: string;
}) => {
	return (
		<div className="py-4 sm:py-6 items-start lg:flex *:bg-white gap-6 *:rounded-xl">
			<div className="lg:w-2/5 hidden lg:grid place-content-center py-10">
				<PhoneMockup />
			</div>
			<div className="lg:w-3/5">
				<div className="max-h-[48.75rem] sm:max-h-[51.75rem] overflow-y-scroll">
					<div className="p-6 sm:p-10 sm:pb-6">
						<h2 className="text-2xl sm:text-3xl pb-2">{Heading}</h2>
						<p className="pb-4">{subHeading}</p>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
