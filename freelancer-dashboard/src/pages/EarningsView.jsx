import { Box } from '@chakra-ui/react';
import EarningsChart from '../components/dashboard/EarningsChart';

export default function EarningsView() {
  return (
    <Box p={6}>
      <EarningsChart />
    </Box>
  );
}