import PublicNavbar from '@/components/modules/shared/PublicNavbar';
import React from 'react';

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <PublicNavbar />
            {children}
        </div>
    );
}
