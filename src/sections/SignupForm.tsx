'use client';

import { BtnPrimary, InputWithIcon } from '@/index';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required("Can't be empty"),
		password: Yup.string()
			.min(8, '8+ characters')
			.required('Please check again'),
		confirmPassword: Yup.string()
			.min(8, '8+ characters')
			.required('Please check again'),
	});
	return (
		<>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={LoginSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputWithIcon
							type="text"
							iconName="Mail"
							inputName="email"
							label="Email address"
							placeholder="e.g. alex@email.com"
						/>
						<InputWithIcon
							type="password"
							iconName="LockKeyhole"
							inputName="password"
							label="Create password"
							placeholder="At least 8 characters"
						/>
						<InputWithIcon
							type="password"
							iconName="LockKeyhole"
							inputName="confirmPassword"
							label="Confirm password"
							placeholder="At least 8 characters"
						/>
						<BtnPrimary
							name="Login"
							className="w-full"
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default SignupForm;
