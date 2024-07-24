import { Icon, Logo, Tabs } from '@/index';
import Link from 'next/link';

const Header = ({
	active,
	setActive,
}: {
	active: number;
	setActive: (value: number) => void;
}) => {
	return (
		<div className="flex justify-between items-center rounded-xl bg-white px-6 py-4">
			<Logo className="md:block hidden" />
			<Tabs
				active={active}
				setActive={setActive}
				config={[
					{ name: 'Link', iconName: 'Link' },
					{
						name: 'Profile Details',
						iconName: 'CircleUserRound',
					},
				]}
			/>
			<div>
				<Link href="/dashboard/preview">
					<span className="btn-secondary px-7 max-sm:hidden">
						Preview
					</span>
					<div className="btn-secondary px-4 sm:hidden">
						<Icon name="Eye" size={20} className="sm:hidden" />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
