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
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form className='grid gap-3 sm:*:flex sm:*:items-center sm:*:gap-4'>
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
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ProfileForm;
