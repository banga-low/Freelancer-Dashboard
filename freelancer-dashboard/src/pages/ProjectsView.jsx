import { Box } from '@chakra-ui/react';
import ProjectsTable from '../components/dashboard/ProjectsTable';

export default function ProjectsView() {
  return (
    <Box p={6}>
      <ProjectsTable />
    </Box>
  );
}