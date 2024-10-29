import { Separator } from '@/components/ui/separator';
import { Box, Container } from '@radix-ui/themes';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container className="px-4 pt-16">
      <Box className="flex w-full flex-col place-items-center text-center">
        <Box className="flex w-full min-w-[500px] max-w-[1400px] flex-col justify-between pb-8 font-poppins md:flex-row">
          <Box className="mb-16 flex place-content-center">
            <Image
              alt="logo"
              className="min-h-[36px] min-w-[163px]"
              height={36}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
              width={163}
            />
          </Box>
          <Box className="flex flex-col gap-16 md:flex-row">
            <Box className="flex flex-col gap-2 md:place-items-start md:text-left">
              <h2 className="text-lg/[30px] font-semibold">Products</h2>
              <p className="text-md">Cap Table Management</p>
              <p className="text-md">Planning & Forecasting</p>
              <p className="text-md">LP Automation</p>
            </Box>
            <Box className="flex flex-col gap-2 md:place-items-start md:text-left">
              <h2 className="text-lg/[30px] font-semibold">Solutions</h2>
              <p className="text-md">For Founders</p>
              <p className="text-md">For Limited Partners</p>
              <p className="text-md">For Law Firms</p>
            </Box>
            <Box className="flex flex-col gap-2 md:place-items-start md:text-left">
              <h2 className="text-lg/[30px] font-semibold">Resources</h2>
              <p className="text-md">Migrate from Carta</p>
              <p className="text-md">Migrate from Pulley</p>
              <p className="text-md">Migrate from Shareworks</p>
              <p className="text-md">409A Valuations</p>
              <p className="text-md">Privacy Policy</p>
              <Box className="flex place-content-center place-items-center gap-1">
                <p className="text-md">Blog&nbsp;</p>
                <svg
                  className="text-[#a1a5ad]"
                  fill="none"
                  height="16"
                  viewBox="0 0 20 20"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.25 5.5C3.83579 5.5 3.5 5.83579 3.5 6.25V14.75C3.5 15.1642 3.83579 15.5 4.25 15.5H12.75C13.1642 15.5 13.5 15.1642 13.5 14.75V10.75C13.5 10.3358 13.8358 10 14.25 10C14.6642 10 15 10.3358 15 10.75V14.75C15 15.9926 13.9926 17 12.75 17H4.25C3.00736 17 2 15.9926 2 14.75V6.25C2 5.00736 3.00736 4 4.25 4H9.25C9.66421 4 10 4.33579 10 4.75C10 5.16421 9.66421 5.5 9.25 5.5H4.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    clip-rule="evenodd"
                    d="M6.19385 12.7532C6.47175 13.0603 6.94603 13.0841 7.25319 12.8062L16.5 4.43999V7.25C16.5 7.66421 16.8358 8 17.25 8C17.6642 8 18 7.66421 18 7.25V2.75C18 2.33579 17.6642 2 17.25 2H12.75C12.3358 2 12 2.33579 12 2.75C12 3.16421 12.3358 3.5 12.75 3.5H15.3032L6.24682 11.6938C5.93966 11.9717 5.91595 12.446 6.19385 12.7532Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </Box>
            </Box>
            <Box className="flex flex-col place-items-center gap-2 md:place-items-start md:text-left">
              <h2 className="text-lg/[30px] font-semibold">Company</h2>
              <p className="text-md">Our Team</p>
              <p className="text-md">Security</p>
              <Box className="my-8 flex place-items-center gap-6 md:my-2 md:place-items-start">
                <svg
                  fill="none"
                  height="26"
                  viewBox="0 0 19 26"
                  width="19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.04918 21H0.311475V7.07242H4.04918V21ZM2.18033 5.46695C0.976787 5.46695 0 4.4667 0 3.23348C0 2.00025 0.976787 1 2.18033 1C3.38387 1 4.36066 2.00025 4.36066 3.23348C4.36066 4.4667 3.38511 5.46695 2.18033 5.46695ZM19 21H15.2623V13.9045C15.2623 9.64016 10.2787 9.96303 10.2787 13.9045V21H6.54098V7.07242H10.2787V9.30717C12.018 6.03292 19 5.79109 19 12.4421V21Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  height="26"
                  viewBox="0 0 18 26"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0438858 5L6.99348 14.2781L0 21.8217H1.57395L7.69674 15.2172L12.6438 21.8217H18L10.6594 12.0216L17.1689 5H15.5949L9.95613 11.0826L5.40011 5H0.0438858ZM2.3585 6.15761H4.81916L15.685 20.6639H13.2244L2.3585 6.15761Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  fill="none"
                  height="26"
                  viewBox="0 0 20 26"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M0 8.14608C0 6.61566 1.24066 5.375 2.77108 5.375H17.2289C18.7593 5.375 20 6.61566 20 8.14608V18.2666C20 19.797 18.7593 21.0377 17.2289 21.0377H2.77108C1.24066 21.0377 0 19.797 0 18.2666V8.14608ZM1.20482 8.14608V8.38002C1.20482 8.92392 1.48699 9.42889 1.95021 9.71395L9.17912 14.1625C9.68253 14.4723 10.3175 14.4723 10.8209 14.1625L18.0498 9.71394C18.513 9.42889 18.7952 8.92392 18.7952 8.38002V8.14608C18.7952 7.28106 18.0939 6.57982 17.2289 6.57982H2.77108C1.90606 6.57982 1.20482 7.28106 1.20482 8.14608ZM18.7952 10.666C18.7579 10.6915 18.7199 10.7162 18.6812 10.74L11.4523 15.1886C10.5617 15.7367 9.43833 15.7367 8.54768 15.1886L1.31877 10.74C1.28006 10.7162 1.24207 10.6915 1.20482 10.666V18.2666C1.20482 19.1316 1.90606 19.8328 2.77108 19.8328H17.2289C18.0939 19.8328 18.7952 19.1316 18.7952 18.2666V10.666Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Separator className="min-w-[500px] max-w-[1400px]" />
        <Box className="flex w-full min-w-[500px] max-w-[1400px] flex-col items-center justify-between gap-16 py-16 md:flex-row">
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
