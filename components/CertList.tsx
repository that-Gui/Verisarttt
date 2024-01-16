'use client';

import React, { useContext } from 'react';
import { CertificateContext } from '@/app/certdb';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

interface Certificate {
	id: number;
	photo: string;
	title: string;
	artist: string;
	year: number;
}

export default function CertList() {
	const context = useContext(CertificateContext);

	if (!context) {
		throw new Error('CertList must be used within a CertificateProvider');
	}

	const { certificates, removeCertificate } = context;

	return (
		<div className='pt-[16px]'>
			<div className='flex flex-wrap gap-[16px]'>
				{certificates.map((certificate: Certificate) => (
					<Card
						className='flex flex-col border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800 w-[235px]'
						key={certificate.id}
					>
						<div className='w-full'>
							<img
								alt='Artwork thumbnail'
								className='aspect-square object-cover'
								height={200}
								src={certificate.photo}
							/>
						</div>
						<CardContent className='flex flex-col justify-between p-4 space-y-2 flex-grow'>
							<CardTitle className='text-lg font-semibold'>
								{certificate.title}
							</CardTitle>
							<div className='text-sm text-gray-500 dark:text-gray-400'>
								{certificate.artist}, {certificate.year}
							</div>
						</CardContent>
						<div className='flex items-center justify-center w-full p-4'>
							<Button
								variant='outline'
								onClick={() => removeCertificate(certificate.id)}
							>
								Delete
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
