'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Container } from '@radix-ui/themes';
import { Box } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const Home = () => {
  return (
    <Container className="overflow-x-hidden bg-[#faf4ee]">
      <Navbar />
      <Box className="h-24"></Box>
      <Section>
        <Box className="mx-[110px] flex max-w-[720px] flex-col place-items-center py-6 text-center">
          <h1 className="text-7xl/[72px]">
            Company ownership, from the future
          </h1>
          <p className="my-6 text-lg font-medium">
            A next generation platform for modern founders, powered by AI.
          </p>
          <Button className="flex-none">REQUEST A DEMO</Button>
          <video
            autoPlay
            className="w-full max-w-[900px] pt-4 outline-none"
            loop
            muted
          >
            <source
              src="https://storage.googleapis.com/mantle-website-assets/videos/SpinningCircles.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Section>
      <Section>
        <Box className="flex max-w-[528px] flex-col place-items-center text-center">
          <h1 className="text-5xl/[60px] font-medium">Manage like a pro</h1>
          <p className="my-6 text-lg">
            Take control of your ownership with a next-generation platform that
            lets you track, issue, and manage ownership. Be your own expert and
            scale back on your professional fees.
          </p>
        </Box>
        <Card className="bg-[#f7efe8]">
          <Box className="flex max-w-[528px] flex-col place-items-center px-4 py-16">
            <Box>
              <Image
                alt="logo"
                className="h-32 w-32"
                height={343}
                src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e05_temp_AI.png"
                width={343}
              />
            </Box>
            <Lottie
              className="w-full"
              path="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e0c_typewritertext.json"
              play
            />
            <h2 className="my-6 text-xl/[32px] font-medium">
              Get it done with your AI Co-pilot
            </h2>
            <p className="text-lg">
              Breeze through essential tasks, pull critical information, and
              visualize your ownership data instantly.
            </p>
          </Box>
        </Card>
        <Card className="bg-[#f7efe8]">
          <Box className="flex w-1/2 max-w-[528px] flex-col place-items-center px-12 py-16">
            <Image
              alt="logo"
              className="h-9 w-9"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e07_img_icon_workflow.svg"
              width={343}
            />
            <h2 className="text-xl/[32px] font-medium">
              Supercharge your workflow
            </h2>
            <p className="my-6 text-lg">
              Transform tasks such as issuing equity and stakeholder
              communications into remarkably simple, automated workflows. Get
              back to focusing on building your business in minutes, not hours.
            </p>
          </Box>
          <Box className="w-1/2">
            <Lottie
              path="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e0b_ANIM_asset_workflow.json"
              play
            />
          </Box>
        </Card>
        <Card className="bg-[#f7efe8]">
          <Box className="w-1/2">
            <Lottie
              path="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e0a_ANIM_asset_decision.json"
              play
            />
          </Box>
          <Box className="flex w-1/2 max-w-[528px] flex-col place-items-center px-12 py-16">
            <Image
              alt="logo"
              className="h-9 w-9"
              height={343}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/64b05c5307d994750a3d2e06_img_icon_decisions.svg"
              width={343}
            />
            <h2 className="text-xl/[32px] font-medium">
              Make decisions, not mistakes
            </h2>
            <p className="my-6 text-lg">
              Handle everything from modeling hiring plans to assessing
              jargon-heavy term sheets without touching a spreadsheet.
              In-context advice is there when you need it, giving you clear
              insight to make decisions.
            </p>
          </Box>
        </Card>
      </Section>
      <Section>
        <Box className="max-w-[400px]">
          <h1 className="text-5xl/[60px] font-medium">Up and to the right</h1>
          <p className="my-6 text-lg">
            Support at every stage, from your garage to a thriving public
            company. Seamless assistance throughout your journey.
          </p>
        </Box>
        <Lottie
          path="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/65fde568b3d496beae3da68a_timeline_animation_update.json"
          play
          speed={0.5}
        />
      </Section>
      <Box className="my-16 flex place-content-center bg-white py-16">
        <Box className="flex max-w-[1400px] place-content-center gap-8">
          <Image
            alt="logo"
            className="h-[140px] w-[187px]"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb40a4199812b5b99f45_fortune-black.png"
            width={800}
          />
          <Image
            alt="logo"
            className="h-[140px] w-[187px]"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb4019075ca39d2d7568_techcrunch-black.png"
            width={800}
          />
          <Image
            alt="logo"
            className="h-[140px] w-[187px]"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/654beb95a02e4305dab55568_axios-black.png"
            width={800}
          />
          <Image
            alt="logo"
            className="h-[140px] w-[187px]"
            height={600}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bde918911cddfb88c51cc_betakit-black-logo.png"
            width={800}
          />
        </Box>
      </Box>
      <Section>
        <Box className="max-w-[940px]">
          <h1 className="text-6xl/[72px] font-medium">
            Manage everything in one place with simple, straightforward tools
            augmented with AI
          </h1>
          <Separator className="my-16" />
          <Box className="flex flex-col gap-16">
            <Box className="flex justify-between gap-8">
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">Fundraising</h2>
                <p className="text-md my-4">
                  Model rounds, issue SAFEs, and track the whole process all in
                  one place.
                </p>
              </Box>
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">Cap Tables</h2>
                <p className="text-md my-4">
                  Effortlessly track and organize your cap table, providing a
                  transparent view of your company&apos;s ownership.
                </p>
              </Box>
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">
                  Planning and Forecasting
                </h2>
                <p className="text-md my-4">
                  Powerful tools to model your hiring needs with visualizations
                  that streamline your decision making.
                </p>
              </Box>
            </Box>
            <Box className="flex justify-between gap-8">
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">Issue Equity</h2>
                <p className="text-md my-4">
                  Create and manage multiple option plans and issue option
                  grants with predictive workflows.
                </p>
              </Box>
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">
                  Automated Signing
                </h2>
                <p className="text-md my-4">
                  Setup approvals and templates in a single click. Automatic
                  reminders for outstanding actions to keep everything moving.
                </p>
              </Box>
              <Box className="w-1/3">
                <h2 className="text-lg/[30px] font-medium">Data Rooms</h2>
                <p className="text-md my-4">
                  No more scattered documents in inboxes and siloed information
                  systems. All your documents in one place, found instantly when
                  you need them.
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section className="mb-24">
        <Card color="#0e0f11">
          <Box className="flex flex-col place-items-center px-32 py-16">
            <h1 className="text-5xl/[60px] font-medium text-white">
              Get started for free
            </h1>
            <p className="my-10 text-lg text-white">
              Level up your equity management for $0 —no credit card required.
              Flat-rate paid plans start at $100 per month for unlimited
              stakeholders.
            </p>
            <Box>
              <Button className="outline outline-1 outline-white">
                SEE A DEMO
              </Button>
              <Button className="bg-white" variant="secondary">
                GET STARTED
              </Button>
            </Box>
          </Box>
        </Card>
      </Section>
      <Separator />
      <Footer />
    </Container>
  );
};

export default Home;
