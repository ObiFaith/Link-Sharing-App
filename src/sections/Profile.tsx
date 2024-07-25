import { ImageIcon } from 'lucide-react';
import { ProfileForm } from '@/index';

const Profile = () => {
	return (
		<div className='grid gap-6'>
			<div className="items-center rounded-lg sm:flex p-5 mx-6 sm:mx-10 gap-4 bg-light-grey">
				<p className="sm:w-2/5">Profile picture</p>
				<div className="max-sm:space-y-6 sm:w-3/5 sm:flex gap-6 items-center">
					<div className="bg-purple-light sm:w-7/12 inline-block px-9 max-sm:mt-4 py-14 rounded-lg">
						<div>
							<ImageIcon
								className="text-purple mx-auto"
								size={40}
							/>
						</div>
						<p className="text-purple text-center font-semibold pt-2">
							+ Upload Image
						</p>
					</div>
					<p className="text-xs sm:w-5/12">
						Image must be below 1024x1024px. Use PNG or JPG format.
					</p>
				</div>
			</div>
			<ProfileForm />
		</div>
	);
};

export default Profile;
