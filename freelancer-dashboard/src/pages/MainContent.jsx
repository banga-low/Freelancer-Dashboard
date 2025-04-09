import { Box, Grid, GridItem, VStack } from '@chakra-ui/react';
import ProfileCard from '../components/dashboard/ProfileCard';
import EarningsChart from '../components/dashboard/EarningsChart';
import ProjectsTable from '../components/dashboard/ProjectsTable';
import FeedbackCard from '../components/dashboard/FeedbackCard';

export default function MainContent() {
  return (
    <Box p={{ base: 4, md: 6 }} w="full" overflowY="auto">
      <Grid
        templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
        gap={6}
      >
        {/* Left Column */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            <ProfileCard />
            <ProjectsTable />
          </VStack>
        </GridItem>

        {/* Right Column */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            <EarningsChart />
            <FeedbackCard />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
