'use client';

import Image from 'next/image';
import { siteConfig } from '@/content.config';

interface BrandTextProps {
  className?: string;
}

export default function BrandText({ className }: BrandTextProps) {
  const { textImagePath, alt } = siteConfig.branding.logo;

  return (
    <Image
      src={textImagePath}
      alt={alt}
      width={150}
      height={40}
      className={className}
    />
  );
}
