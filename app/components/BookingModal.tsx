'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '@/content.config';

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

  useEffect(() => {
    // Handle escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const calLink = `${siteConfig.booking.calUsername}/${siteConfig.booking.defaultEventType}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900">
              Book Your Session
            </h2>
            <p className="text-slate-600 mt-1">
              Select a time that works best for you
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-emerald-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

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
      </div>
    </div>
  );
}
