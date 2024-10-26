import { Separator } from '@/components/ui/separator';
import { Box, Container } from '@radix-ui/themes';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box className="px-32">
      <Box className="flex justify-between py-8">
        <Box>
          <Image
            alt="logo"
            className="min-h-[36px] min-w-[163px]"
            height={36}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
            width={163}
          />
        </Box>
        <Box className="flex gap-16">
          <Box className="flex flex-col gap-2">
            <h1>Products</h1>
            <p>Cap Table Management</p>
            <p>Planning & Forecasting</p>
            <p>LP Automation</p>
          </Box>
          <Box className="flex flex-col gap-2">
            <h1>Solutions</h1>
            <p>For Founders</p>
            <p>For Limited Partners</p>
            <p>For Law Firms</p>
          </Box>
          <Box className="flex flex-col gap-2">
            <h1>Resources</h1>
            <p>Migrate from Carta</p>
            <p>Migrate from Pulley</p>
            <p>Migrate from Shareworks</p>
            <p>409A Valuations</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </Box>
          <Box className="flex flex-col gap-2">
            <h1>Company</h1>
            <p>Our Team</p>
            <p>Security</p>
            <Box className="flex items-center gap-1">
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
      <Separator />
      <Box className="flex justify-between py-16">
        <p>
          © 2024 Ten Key Labs Incorporated DBA Mantle · <a>Terms of Use</a>
        </p>
        <Box className="flex items-center gap-4">
          <Image
            alt="logo"
            className="min-h-[42px] min-w-[150px]"
            height={42}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9ba8553e48cc93eade1_logo-google-cloud.png"
            width={150}
          />
          <Image
            alt="logo"
            className="min-h-[58px] min-w-[58px]"
            height={58}
            src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/663bd9cb48e225d03ac625a5_logo-AICPA-SOC.png"
            width={58}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
