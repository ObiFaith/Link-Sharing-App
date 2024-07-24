import { LinkIcon } from 'lucide-react';

const Logo = ({className}: {className?: string}) => {
	return (
		<div className='flex gap-2 justify-center items-center'>
			<div className="p-1.5 bg-purple rounded-xl">
				<LinkIcon strokeWidth={2} className="text-white rotate-45" />
			</div>
			<h1 className={`xl:text-3xl text-2xl font-black tracking-wide ${className}`}>devlinks</h1>
		</div>
	);
};

export default Logo;
