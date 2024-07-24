import { BtnSecondary } from '@/index';
import Image from 'next/image';
import phone from '@/../public/phone.svg';

const LinkComp = () => {
	return (
		<>
			<div className="pb-5">
				<BtnSecondary name="+ Add new link" />
			</div>
			<div className="px-5 sm:px-14 lg:px-24 py-11 bg-light-grey grid-cols-1 grid justify-items-center">
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
			</div>
		</>
	);
};

export default LinkComp;
