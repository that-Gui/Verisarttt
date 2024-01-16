'use client';

import React, { createContext, useState } from 'react';

interface Certificate {
	id: number;
	photo: string;
	title: string;
	artist: string;
	year: number;
}

interface CertificateContextData {
	certificates: Certificate[];
	addCertificate: (certificate: Certificate) => void;
	removeCertificate: (id: number) => void;
}

export const CertificateContext = createContext<
	CertificateContextData | undefined
>(undefined);

export const CertificateProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [certificates, setCertificates] = useState<Certificate[]>([
		{
			id: 1230,
			photo:
				'https://images-workbench.99static.com/WDNz2pSAXSuK6UpX2w8n0Sii0to=/99designs-contests-attachments/132/132916/attachment_132916784',
			title: 'laptop',
			artist: 'john doe',
			year: 2021,
		},
		{
			id: 2349,
			photo:
				'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
			title: 'ggg',
			artist: 'steve smith',
			year: 1999,
		},
	]);

	const addCertificate = (certificate: Certificate) => {
		setCertificates((prevCertificates) => [...prevCertificates, certificate]);
	};

	const removeCertificate = (id: number) => {
		setCertificates((prevCertificates) =>
			prevCertificates.filter((certificate) => certificate.id !== id)
		);
	};

	return (
		<CertificateContext.Provider
			value={{
				certificates,
				addCertificate,
				removeCertificate: (id: number) => removeCertificate(id),
			}}
		>
			{children}
		</CertificateContext.Provider>
	);
};
