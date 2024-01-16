import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CertificateProvider } from './certdb';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Verisarttt',
	description: 'Verisart technical',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<CertificateProvider>
			<html lang='en'>
				<body className='flex flex-col min-h-screen'>
					<header className='w-[1024px] mx-auto'>
						<Navbar />
					</header>
					<main className='flex-1 w-[1024px] mx-auto'>{children}</main>
					<footer className='bg-primary w-[1024px] flex justify-center mx-auto rounded'>
						<h5 className='min-h-[40px] pt-[8px]'>
							Verisart / thatGui colab 2024
						</h5>
					</footer>
				</body>
			</html>
		</CertificateProvider>
	);
}
