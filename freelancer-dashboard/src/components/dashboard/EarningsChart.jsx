import { Card, CardHeader, CardBody, Text } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

// Vite-compatible dynamic import
const Chart = lazy(() => import('react-apexcharts'));

const options = {
  chart: { 
    type: 'area', 
    toolbar: { show: false } 
  },
  colors: ['#3182CE'],
  xaxis: { 
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] 
  },
};

const series = [{ 
  name: 'Earnings', 
  data: [3000, 4200, 5100, 4800, 6200, 7500, 8000
    
  ] 
}];

export default function EarningsChart() {
  return (
    <Card variant="outline">
      <CardHeader>
        <Text fontSize="lg" fontWeight="bold">Earnings Overview</Text>
      </CardHeader>
      <CardBody>
        {/* Add Suspense wrapper for lazy loading */}
        <Suspense fallback={<Text>Loading chart...</Text>}>
          <Chart 
            options={options} 
            series={series} 
            type="area" 
            height={300} 
          />
        </Suspense>
      </CardBody>
    </Card>
  );
}