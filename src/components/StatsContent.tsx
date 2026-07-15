'use client';
import { useEffect, useState } from 'react';

export function StatsContent() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(setStats)
      .catch(console.error);
  }, []);

  if (!stats) return (
    <div className='flex items-center justify-center min-h-screen bg-background text-primary'>
      <div className='animate-pulse'>Cargando estadísticas...</div>
    </div>
  );

  return (
    <div className='min-h-screen bg-background text-primary p-4 md:p-8 font-sans'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8 border-b border-border pb-4'>Panel de Control Privado</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='bg-card p-6 rounded-xl border border-border shadow-sm'>
            <p className='text-sm text-muted-foreground uppercase tracking-wider font-semibold'>Vistas Totales</p>
            <p className='text-4xl font-black mt-2'>{stats.totalViews}</p>
          </div>
          <div className='bg-card p-6 rounded-xl border border-border shadow-sm'>
            <p className='text-sm text-muted-foreground uppercase tracking-wider font-semibold'>Visitantes Únicos</p>
            <p className='text-4xl font-black mt-2'>{stats.uniqueIps}</p>
          </div>
          <div className='bg-card p-6 rounded-xl border border-border shadow-sm'>
            <p className='text-sm text-muted-foreground uppercase tracking-wider font-semibold'>Sesiones Activas</p>
            <p className='text-4xl font-black mt-2'>{stats.sessions?.length || 0}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-card p-6 rounded-xl border border-border shadow-sm'>
            <h2 className='text-xl font-bold mb-4'>Países</h2>
            <div className='space-y-3'>
              {Object.entries(stats.countries || {}).map(([country, count]: any) => (
                <div key={country} className='flex justify-between items-center p-2 hover:bg-muted/50 rounded-lg transition-colors'>
                  <span className='font-medium'>{country}</span>
                  <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold'>{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-card p-6 rounded-xl border border-border shadow-sm'>
            <h2 className='text-xl font-bold mb-4'>Sesiones Recientes</h2>
            <div className='space-y-4'>
              {stats.sessions?.map((session: any) => (
                <div key={session.id} className='border-l-4 border-primary bg-muted/30 p-4 rounded-r-lg'>
                  <div className='flex justify-between text-xs text-muted-foreground mb-2'>
                    <span>ID: {session.id.slice(0, 8)}</span>
                    <span className='font-bold text-primary uppercase'>{session.country}</span>
                  </div>
                  <div className='flex justify-between items-end'>
                    <div>
                      <p className='text-sm font-medium'>{session.userAgent?.includes('Mobile') ? '📱 Móvil' : '💻 Desktop'}</p>
                      <p className='text-xs text-muted-foreground mt-1'>Permanencia: {Math.round((session.lastHeartbeat - session.startTime) / 1000)}s</p>
                    </div>
                    <div className='text-right'>
                       <p className='text-xs font-mono bg-background p-1 rounded border border-border'>Clicks: {JSON.parse(session.clicks || '[]').length}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-8 p-4 bg-muted/20 rounded-lg border border-dashed border-border'>
          <details>
            <summary className='cursor-pointer text-sm text-muted-foreground hover:text-primary transition-colors'>Ver JSON crudo (Debug)</summary>
            <pre className='mt-4 p-4 bg-black text-green-400 text-xs rounded-lg overflow-auto max-h-96'>
              {JSON.stringify(stats, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}
