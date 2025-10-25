'use client';

import { useEffect } from 'react';
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
    // Load Cal.com embed script
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  const calLink = `${siteConfig.booking.calUsername}/${siteConfig.booking.defaultEventType}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0">
        {/* Header */}
        <DialogHeader className="p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
          <DialogTitle className="text-2xl font-bold text-emerald-900">
            Book Your Session
          </DialogTitle>
          <DialogDescription className="text-slate-600 mt-1">
            Select a time that works best for you
          </DialogDescription>
        </DialogHeader>

        {/* Cal.com Embed */}
        <div className="flex-1 overflow-auto p-4">
          <div
            data-cal-link={calLink}
            data-cal-config='{"theme":"light"}'
            style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'auto' }}
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-emerald-100 bg-emerald-50 text-center text-sm text-slate-600">
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
