'use client';

import { BtnPrimary, InputWithIcon } from '@/index';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const ProfileForm = () => {
	const ProfileSchema = Yup.object().shape({
		firstName: Yup.string().required("Can't be empty"),
		lastName: Yup.string().required("Can't be empty"),
		email: Yup.string().email('Invalid email address'),
	});
	return (
		<>
			<Formik
				initialValues={{ firstName: '', lastName: '', email: '' }}
				validationSchema={ProfileSchema}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form className="">
						<div className="grid bg-light-grey p-5 rounded-lg max-sm:mb-6 gap-3 sm:*:flex sm:*:items-center sm:*:gap-4 mx-6 sm:mx-10 ">
							<InputWithIcon
								type="text"
								label="First name*"
								inputName="firstName"
								placeholder="e.g. John"
							/>
							<InputWithIcon
								type="text"
								label="Last name*"
								inputName="lastName"
								placeholder="e.g. Appleseed"
							/>
							<InputWithIcon
								type="text"
								inputName="email"
								label="Email"
								placeholder="e.g. email@example.com"
							/>
						</div>
						<hr className="border border-clr" />
						<div className="p-4 sm:text-right">
							<BtnPrimary
								disabled={isSubmitting}
								className="max-sm:w-full"
								name="Save"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ProfileForm;
