import { BtnPrimary, PhoneMockup } from '@/index';
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
		<div className="py-4 sm:py-6 lg:flex *:bg-white gap-6 *:rounded-xl">
			<div className="lg:w-2/5 hidden lg:grid place-content-center">
				<PhoneMockup />
			</div>
			<div className="lg:w-3/5">
				<div className="p-6 sm:p-10 sm:pb-6">
					<div className='pb-10'>
						<h2 className="text-2xl sm:text-3xl pb-2">{Heading}</h2>
						<p>{subHeading}</p>
					</div>
					{children}
				</div>
				<hr className="border border-clr" />
				<div className="p-4 sm:text-right">
					<BtnPrimary className="max-sm:w-full" name="Save" />
				</div>
			</div>
		</div>
	);
};

export default Layout;
