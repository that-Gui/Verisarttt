'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CertificateContext } from '@/app/certdb';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	photo: z.string().min(2, {
		message: 'Please upload the image URL of your certificate.',
	}),
	title: z.string(),
	artist: z.string().min(2, {
		message: 'Artist name for the certificate.',
	}),
	year: z.string().min(4, {
		message: 'Year of conception for the certificate.',
	}),
	id: z.number(),
});

export default function CertForm() {
	const context = React.useContext(CertificateContext);

	if (!context) {
		throw new Error('CertList must be used within a CertificateProvider');
	}

	const { addCertificate } = context;

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			photo: '',
			title: '',
			artist: '',
			year: '',
			id: Math.floor(Math.random() * 1000),
		},
	});

	function convertYearToNumber(year: string): number {
		return parseInt(year, 10);
	}

	function onSubmit(values: z.infer<typeof formSchema>) {
		addCertificate({
			...values,
			year: convertYearToNumber(values.year),
		});
		form.reset();
	}

	return (
		<div className='p-[16px]'>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='photo'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Photo URL</FormLabel>
								<FormControl>
									<Input placeholder='enter img URL' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Certificate Title</FormLabel>
								<FormControl>
									<Input placeholder='enter title' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='artist'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Artist Name</FormLabel>
								<FormControl>
									<Input placeholder='thatGui' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='year'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Year of conception</FormLabel>
								<FormControl>
									<Input placeholder='year for certificate' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</div>
	);
}
