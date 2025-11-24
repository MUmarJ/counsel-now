'use client';

import Image from 'next/image';
import { siteConfig } from '@/content.config';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className }: BrandLogoProps) {
  const { imagePath, alt } = siteConfig.branding.logo;

  return (
    <Image
      src={imagePath}
      alt={alt}
      width={415}
      height={428}
      className={className}
      quality={100}
      unoptimized
    />
  );
}
