import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Container } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import Image from 'next/image';

const Home = () => {
  return (
    <Container className="overflow-x-hidden bg-[#faf4ee]">
      <Navbar />
      <Section>
        <h1>Company ownership, from the future</h1>
        <p>A next generation platform for modern founders, powered by AI.</p>
        <Button>REQUEST A DEMO</Button>
        <video autoPlay className="my-8 w-full max-w-[900px]" loop muted>
          <source
            src="https://storage.googleapis.com/mantle-website-assets/videos/SpinningCircles.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Section>
      <Section>
        <h1>Manage like a pro</h1>
        <p>
          Take control of your ownership with a next-generation platform that
          lets you track, issue, and manage ownership. Be your own expert and
          scale back on your professional fees.
        </p>
        <Card>
          <Box className="flex flex-col place-items-center px-4 py-16">
            <Box>
              <Image
                alt="logo"
                height={343}
                src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
                width={343}
              />
            </Box>
            <Box>PLACEHOLDER</Box>
            <h2>Get it done with your AI Co-pilot</h2>
            <p>
              Breeze through essential tasks, pull critical information, and
              visualize your ownership data instantly.
            </p>
          </Box>
        </Card>
        <Card>
          <Box className="flex w-1/2 flex-col place-items-center px-4 py-16">
            <Image
              alt="logo"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e07_img_icon_workflow.svg"
              width={343}
            />
            <h2>Supercharge your workflow</h2>
            <p>
              Transform tasks such as issuing equity and stakeholder
              communications into remarkably simple, automated workflows. Get
              back to focusing on building your business in minutes, not hours.
            </p>
          </Box>
          <Box className="w-1/2">
            <Image
              alt="logo"
              className="h-full w-full"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
              width={343}
            />
          </Box>
        </Card>
        <Card>
          <Box className="w-1/2">
            <Image
              alt="logo"
              className="h-full w-full"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
              width={343}
            />
          </Box>
          <Box className="flex w-1/2 flex-col place-items-center px-4 py-16">
            <Image
              alt="logo"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e06_img_icon_decisions.svg"
              width={343}
            />
            <h2>Make decisions, not mistakes</h2>
            <p>
              Handle everything from modeling hiring plans to assessing
              jargon-heavy term sheets without touching a spreadsheet.
              In-context advice is there when you need it, giving you clear
              insight to make decisions.
            </p>
          </Box>
        </Card>
      </Section>
      <Section>
        <h1>Up and to the right</h1>
        <p>
          Support at every stage, from your garage to a thriving public company.
          Seamless assistance throughout your journey.
        </p>
      </Section>
      <Box className="flex place-content-center bg-white">
        <Box className="flex max-w-[1400px] place-content-center gap-8">
          <Image
            alt="logo"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb40a4199812b5b99f45_fortune-black.png"
            width={800}
          />
          <Image
            alt="logo"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb4019075ca39d2d7568_techcrunch-black.png"
            width={800}
          />
          <Image
            alt="logo"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb95a02e4305dab55568_axios-black.png"
            width={800}
          />
          <Image
            alt="logo"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bde918911cddfb88c51cc_betakit-black-logo.png"
            width={800}
          />
        </Box>
      </Box>
      <Section>
        <h1>
          Manage everything in one place with simple, straightforward tools
          augmented with AI
        </h1>
      </Section>
      <Section className="mb-24">
        <Button>SEE A DEMO</Button>
        <Button>GET STARTED</Button>
      </Section>
      <Separator />
      <Footer />
    </Container>
  );
};

export default Home;
