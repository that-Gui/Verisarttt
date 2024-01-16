import { Badge } from '@/components/ui/badge';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
	return (
		<div className='min-h-[40px] flex w-full justify-between p-[16px]'>
			<Badge variant='outline'>
				<Avatar>
					<AvatarImage src='https://avatars.githubusercontent.com/u/81101993?v=4' />
					<AvatarFallback>Gui</AvatarFallback>
				</Avatar>

				<p className='mx-[8px]'>thatGui</p>
			</Badge>

			<div className='flex justify-center gap-[8px] pr-[8px]'>
				<Avatar>
					<AvatarImage src='https://avatars.githubusercontent.com/u/81101993?v=4' />
					<AvatarFallback>Gui</AvatarFallback>
				</Avatar>

				<p className='pt-[8px]'>thatGui</p>
			</div>
		</div>
	);
}
