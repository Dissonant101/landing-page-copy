import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Box, Container } from '@radix-ui/themes';

const Home = () => {
  return (
    <Container className="bg-[#faf4ee]">
      <Navbar />
      <Box className="h-[1600px]"></Box>
      <Footer />
    </Container>
  );
};

export default Home;
