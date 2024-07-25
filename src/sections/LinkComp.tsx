import { BtnPrimary, BtnSecondary, InputWithIcon } from '@/index';
import Image from 'next/image';
import phone from '@/../public/phone.svg';
import { Form, Formik } from 'formik';
import { Menu } from 'lucide-react';

const LinkComp = () => {
	return (
		<>
			<div className="pb-5 px-6 sm:px-10">
				<BtnSecondary name="+ Add new link" />
			</div>
			{/* <div className="px-5 sm:px-14 mx-6 sm:mx-10  lg:px-24 py-11 rounded-lg bg-light-grey grid-cols-1 grid justify-items-center">
				<div>
					<Image src={phone} alt="User with a phone" />
				</div>
				<h2 className="text-2xl sm:text-3xl py-6 sm:pt-10 text-center">
					Let&#39;s get you started
				</h2>
				<p className="text-center">
					Use the “Add new link” button to get started. Once you have
					more than one link, you can reorder and edit them. We&#39;re
					here to help you share your profiles with everyone!
				</p>
			</div> */}
			<Formik
				initialValues={{ link: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<div className="mx-6 sm:mx-10 grid gap-3 rounded-lg bg-light-grey p-5">
							<div className=""></div>
							<div className="flex justify-between items-center">
								<div className="flex gap-2 items-center">
									<Menu size={14} strokeWidth={2} />
									<p className="font-bold">Link #1</p>
								</div>
								<p>Remove</p>
							</div>
							<InputWithIcon
								type="text"
								label="Link"
								inputName="Link"
								iconName="LinkIcon"
								placeholder="e.g. https://www.github.com/johnappleseed"
							/>
						</div>
						<hr className="border border-clr" />
						<div className="p-4 sm:text-right bg-white">
							<BtnPrimary disabled={isSubmitting} className="max-sm:w-full" name="Save" />
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default LinkComp;
