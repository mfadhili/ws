import React from 'react';

function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
        </section>
    );
}

export default DashboardLayout;