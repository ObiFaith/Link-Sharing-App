import Icon from './Icon';

const Tabs = ({
	config, active, setActive
}: {
	config: Array<{ name: string; iconName: string }>;
	active: number;
	setActive: (value: number) => void
}) => {
	return (
		<div className="flex relative items-center sm:gap-4">
			{config.map((tab, index) => (
				<div
					key={index}
					onClick={() => setActive(index + 1)}
					className={`flex items-center cursor-pointer gap-2 text-base px-7 py-3 font-semibold ${
						active === index + 1
							? 'text-purple bg-purple-light rounded-lg'
							: 'text-grey hover:text-purple'
					}`}
				>
					<Icon size={20} name={tab.iconName} />
					<p className='hidden md:block'>{tab.name}</p>
				</div>
			))}
		</div>
	);
};

export default Tabs;
