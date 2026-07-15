import { notFound } from 'next/navigation';
import { isOwner } from '@/lib/analytics-auth';
import { StatsContent } from '@/components/StatsContent';

export default async function StatsPage() {
  const authorized = await isOwner();
  
  if (!authorized) {
    notFound(); // Esto lanza un 404 real de Next.js
  }

  return <StatsContent />;
}
