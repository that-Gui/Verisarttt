import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

import CertList from '@/components/CertList';
import CertAdd from '@/components/CertAdd';

export default function Home() {
	return (
		<div className='mt-[16px] p-[16px]'>
			<div className='mt-[16px] flex w-full justify-between'>
				<h2 className='p-[8px] text-2xl'>thatGui Owned Certificates</h2>
				<CertAdd />
			</div>
			<div className='mt-[32px] min-w-[512px]'>
				<ResizablePanelGroup
					direction='horizontal'
					className='rounded-lg border'
				>
					<ResizablePanel defaultSize={35}>
						<img
							src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2a4ae1d-f0a6-4df1-90f2-d90ed54bbc19/dfrhrzz-a7cd1601-4811-40e8-a728-c1df7e1c2995.png/v1/fit/w_828,h_994/cool_cat_playful_hip_kitty_sunglasses_by_sytacdesign_dfrhrzz-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyYTRhZTFkLWYwYTYtNGRmMS05MGYyLWQ5MGVkNTRiYmMxOVwvZGZyaHJ6ei1hN2NkMTYwMS00ODExLTQwZTgtYTcyOC1jMWRmN2UxYzI5OTUucG5nIiwiaGVpZ2h0IjoiPD0yMzA0Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvYzJhNGFlMWQtZjBhNi00ZGYxLTkwZjItZDkwZWQ1NGJiYzE5XC9zeXRhY2Rlc2lnbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.3deNc0Y9YhlO_EYPhYzRl638O92lVi8nPA8Tm7NGovg'
							alt='sapce cat'
						/>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel defaultSize={35}>
						<ResizablePanelGroup direction='vertical'>
							<ResizablePanel defaultSize={20}>
								<img
									src='https://img.freepik.com/free-photo/portrait-person-with-collage-technique-color-blocking_23-2150165952.jpg?w=1060&t=st=1705356110~exp=1705356710~hmac=783ab87f2d04022d2fe07e7df48b24bf974b5c4dcf7214e4bd0dd0f1d543dc69'
									alt=''
								/>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel defaultSize={39}>
								<img
									src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb39d633-c2e1-407d-a815-dfb3ccedb455/da9gqra-96d3ed56-d417-4364-8409-456f0df44f9a.jpg/v1/fit/w_500,h_750,q_70,strp/cool_girl_by_dimary_da9gqra-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmIzOWQ2MzMtYzJlMS00MDdkLWE4MTUtZGZiM2NjZWRiNDU1XC9kYTlncXJhLTk2ZDNlZDU2LWQ0MTctNDM2NC04NDA5LTQ1NmYwZGY0NGY5YS5qcGciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.F7WZ2foJGJjhzS2CQFx2mVlguDlsESZyBaStuBLD6Fo'
									alt='anime girl'
								/>
							</ResizablePanel>
						</ResizablePanelGroup>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
			<div>
				<CertList />
			</div>
		</div>
	);
}
