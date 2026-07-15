'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const sessionIdRef = useRef<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Verificamos si ya somos admin en el navegador
    const isAdmin = document.cookie.includes('portfolio_owner_auth');
    if (isAdmin) {
      console.log('Analytics: Owner detected, tracking disabled.');
      return;
    }

    if (!sessionIdRef.current) {
      sessionIdRef.current = Math.random().toString(36).substring(2, 15);
    }
    const sessionId = sessionIdRef.current;

    const trackVisit = async () => {
      console.log('Analytics: Tracking visit...');
      try {
        const res = await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'init', sessionId }),
        });
        const data = await res.json();
        console.log('Analytics: Track response', data);
      } catch (err) {
        console.error('Analytics Error:', err);
      }
    };

    trackVisit();

    const heartbeatInterval = setInterval(() => {
      fetch('/api/track/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      }).catch(() => {});
    }, 30000);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest('button, a, [data-track]');
      if (element) {
        const elementId = element.id || element.getAttribute('data-track');
        const text = element.textContent?.trim().slice(0, 50);
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'click', sessionId, data: { elementId, text } }),
        }).catch(() => {});
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      clearInterval(heartbeatInterval);
      window.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return <>{children}</>;
}
