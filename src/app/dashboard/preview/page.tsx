import { BtnPrimary } from '@/components/Buttons';
import Link from 'next/link';

const Preview = () => {
	return (
		<div className="p-4 max-sm:max-w-96 mx-auto">
			<div className="flex gap-4 max-sm:*:w-full">
				<div className="pt-3.5">
					<Link href="/dashboard" className="btn-secondary px-7">
						Back to Editor
					</Link>
				</div>
				<div>
					<BtnPrimary className="max-sm:w-full" name="Share Link" />
				</div>
			</div>
			<div className="py-14">
				<div
					className="border-4 bg-profile-img border-purple object-cover bg-cover bg-left-top rounded-full mx-auto min-h-[104px] max-w-[104px]"
				></div>
				<div className="text-center">
          <h1 className='text-3xl pt-6 pb-2'>Ben Wright</h1>
          <p>ben@example.com</p>
        </div>
			</div>
			<div className=""></div>
		</div>
	);
};

export default Preview;
