'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { siteConfig } from '@/content.config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: siteConfig.booking.embedConfig.theme as 'light' | 'dark',
        styles: {
          branding: {
            brandColor: siteConfig.booking.embedConfig.brandColor,
          },
        },
        hideEventTypeDetails: siteConfig.booking.embedConfig.hideEventTypeDetails,
      });
    })();
  }, []);

  const calLink = `${siteConfig.booking.calUsername}/${siteConfig.booking.defaultEventType}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] h-[95vh] md:h-[90vh] flex flex-col p-0 gap-0">
        {/* Header */}
        <DialogHeader className="p-4 md:p-6 border-b border-emerald-100 bg-linear-to-r from-emerald-50 to-white shrink-0">
          <DialogTitle className="text-xl md:text-2xl font-bold text-emerald-900">
            Book Your Session
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-slate-600 mt-1">
            Select a time that works best for you
          </DialogDescription>
        </DialogHeader>

        {/* Cal.com Embed */}
        <div className="flex-1 overflow-auto min-h-0">
          <Cal
            calLink={calLink}
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
            config={{
              theme: siteConfig.booking.embedConfig.theme as 'light' | 'dark',
            }}
          />
        </div>

        {/* Footer */}
        <div className="p-3 md:p-4 border-t border-emerald-100 bg-emerald-50 text-center text-xs md:text-sm text-slate-600 shrink-0">
          <p>
            Questions? Call us at{' '}
            <a
              href={`tel:${siteConfig.metadata.phone.replace(/\D/g, '')}`}
              className="text-emerald-700 hover:text-emerald-600 font-medium"
            >
              {siteConfig.metadata.phone}
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
