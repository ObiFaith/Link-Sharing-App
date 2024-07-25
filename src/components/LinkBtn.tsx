import { Icon } from '@/index';

const LinkBtn = ({
	name,
	color,
	iconName,
}: {
	name: string;
	color: string;
	iconName: string;
}) => {
	return (
		<div className={`flex justify-between ${color}`}>
			<div className="flex gap-2">
				<Icon color='white' name={iconName} />
				<p className="text-white">{name}</p>
			</div>
			<div>
				<Icon color='white' name="ArrowRight" />
			</div>
		</div>
	);
};

export default LinkBtn;
