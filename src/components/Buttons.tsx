type ButtonType = {
	name: string;
	className?: string;
	disabled?: boolean;
};

export const BtnPrimary = ({
	name,
	className = '',
	disabled = false,
}: ButtonType) => (
	<button
		type="submit"
		disabled={disabled}
		className={`bg-purple py-3 px-7 text-base font-semibold disabled:bg-purple/25 rounded-lg text-white active:bg-purple-hover hover:bg-purple-hover active:drop-shadow-xl ${className}`}
	>
		{name}
	</button>
);

export const BtnSecondary = ({
	name,
	className = '',
	disabled = false,
}: ButtonType) => (
	<button
		type="submit"
		disabled={disabled}
		className={`disabled:text-purple/25 btn-secondary px-7 ${className}`}
	>
		{name}
	</button>
);
