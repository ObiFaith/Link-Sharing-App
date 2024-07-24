'use client';
import { ErrorMessage, Field } from 'formik';
import Icon from './Icon';

interface InputFieldType {
	type: string;
	label?: string;
	iconName?: string;
	inputName: string;
	placeholder: string;
}

const InputWithIcon = ({
	type,
	label,
	iconName,
	inputName,
	placeholder,
}: InputFieldType) => {
	return (
		<div>
			{label && (
				<label className={`text-xs text-dark-grey pb-1 ${!iconName ? 'sm:w-2/5 sm:text-base' : ''}`}>{label}</label>
			)}
			<div className={`flex justify-between relative ${!iconName ? 'sm:w-3/5' : ''}`}>
				<div className="w-full">
					{iconName && (
						<Icon
							name={iconName}
							className="text-grey absolute top-[18px] sm:top-[22px] left-4"
						/>
					)}
					<Field
						type={type}
						name={inputName}
						placeholder={placeholder}
						className={`input ${iconName ? 'indent-7': ''}`}
					/>
				</div>
				<ErrorMessage
					className={`text-red-400 text-sm right-4 absolute ${iconName ? 'top-5' : 'top-3.5'}`}
					name={inputName}
					component="span"
				/>
			</div>
		</div>
	);
};

export default InputWithIcon;
