import dynamic from 'next/dynamic';

export const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
