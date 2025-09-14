import { Metadata } from 'next';
import { Suspense } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SolarActivityCard from '@/components/dashboard/SolarActivityCard';
import GeomagneticCard from '@/components/dashboard/GeomagneticCard';
import SpaceWeatherAlerts from '@/components/dashboard/SpaceWeatherAlerts';
import ActivityChart from '@/components/dashboard/ActivityChart';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';

export const metadata: Metadata = {
    title: 'Space Weather Dashboard | Real-time Solar Activity Monitoring',
    description: 'Monitor real-time space weather conditions including solar flares, geomagnetic activity, and space weather alerts.',
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
            <div className="container mx-auto px-4 py-8">
                <DashboardHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    {/* Current Conditions */}
                    <div className="lg:col-span-2 space-y-6">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <SolarActivityCard />
                        </Suspense>

                        <Suspense fallback={<LoadingSkeleton />}>
                            <ActivityChart />
                        </Suspense>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Suspense fallback={<LoadingSkeleton />}>
                            <GeomagneticCard />
                        </Suspense>

                        <Suspense fallback={<LoadingSkeleton />}>
                            <SpaceWeatherAlerts />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}