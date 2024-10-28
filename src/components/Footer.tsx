import { Separator } from '@/components/ui/separator';
import { Box, Container } from '@radix-ui/themes';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container className="px-4 pt-16">
      <Box className="flex w-full flex-col place-items-center text-center">
        <Box className="flex w-full min-w-[500px] max-w-[1400px] flex-col place-items-center justify-between py-8 font-poppins sm:flex-row">
          <Box className="mb-16">
            <Image
              alt="logo"
              className="min-h-[36px] min-w-[163px]"
              height={36}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
              width={163}
            />
          </Box>
          <Box className="flex flex-col gap-16 sm:flex-row">
            <Box className="flex flex-col gap-2 sm:place-items-start">
              <h2 className="text-lg/[30px] font-semibold">Products</h2>
              <p className="text-md">Cap Table Management</p>
              <p className="text-md">Planning & Forecasting</p>
              <p className="text-md">LP Automation</p>
            </Box>
            <Box className="flex flex-col gap-2 sm:place-items-start">
              <h2 className="text-lg/[30px] font-semibold">Solutions</h2>
              <p className="text-md">For Founders</p>
              <p className="text-md">For Limited Partners</p>
              <p className="text-md">For Law Firms</p>
            </Box>
            <Box className="flex flex-col gap-2 sm:place-items-start">
              <h2 className="text-lg/[30px] font-semibold">Resources</h2>
              <p className="text-md">Migrate from Carta</p>
              <p className="text-md">Migrate from Pulley</p>
              <p className="text-md">Migrate from Shareworks</p>
              <p className="text-md">409A Valuations</p>
              <p className="text-md">Privacy Policy</p>
              <p className="text-md">Blog</p>
            </Box>
            <Box className="flex flex-col place-items-center gap-2 sm:place-items-start">
              <h2 className="text-lg/[30px] font-semibold">Company</h2>
              <p className="text-md">Our Team</p>
              <p className="text-md">Security</p>
              <Box className="my-8 flex place-items-center gap-8 sm:my-2 sm:place-items-start">
                <Image
                  alt="logo"
                  height={20}
                  src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
                  width={20}
                />
                <Image
                  alt="logo"
                  height={20}
                  src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
                  width={20}
                />
                <Image
                  alt="logo"
                  height={20}
                  src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
                  width={20}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Separator className="min-w-[500px] max-w-[1400px]" />
        <Box className="flex w-full min-w-[500px] max-w-[1400px] flex-col items-center justify-between gap-16 py-16 sm:flex-row">
          <p className="text-md font-medium text-[#76777a]">
            © Remade by Steven Chen · <a href="">Terms of Use</a>
          </p>
          <Box className="flex items-center gap-16">
            <Image
              alt="logo"
              height={42}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9ba8553e48cc93eade1_logo-google-cloud.png"
              width={150}
            />
            <Image
              alt="logo"
              height={58}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
              width={58}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
