'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import CertForm from './CertForm';

export default function CertAdd() {
	return (
		<>
			<Drawer>
				<DrawerTrigger>
					<Button>add Certificate</Button>
				</DrawerTrigger>
				<DrawerContent className='max-w-[1024px] mx-auto'>
					<DrawerHeader>
						<DrawerTitle>Create a new Certificate</DrawerTitle>
						<DrawerDescription>
							Please add the relevant certificate information below.
						</DrawerDescription>
					</DrawerHeader>
					<CertForm />
					<DrawerFooter>
						<DrawerClose>
							<Button variant='secondary'>Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
