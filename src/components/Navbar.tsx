import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Box } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

const Navbar = () => {
  return (
    <Box>
      <Box className="visible fixed top-0 z-50 max-h-20 min-h-20 w-full place-content-center bg-[#faf4ee] opacity-[.98] md:invisible">
        <Box className="flex h-20 w-full place-items-center justify-between p-4">
          <Box>
            <Image
              alt="logo"
              className="min-h-[36px] min-w-[163px]"
              height={36}
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
              width={163}
            />
          </Box>
          <Box>
            <Popover>
              <PopoverTrigger>
                <Lottie
                  className="h-8 w-8"
                  path="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/65f8410714f1fe9eb9541ce9_menu-close.json"
                />
              </PopoverTrigger>
              <PopoverContent className="bg-[#f6efe7]">
                <Accordion collapsible type="single">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-poppins text-lg/[30px] text-[#141517]">
                      Products
                    </AccordionTrigger>
                    <AccordionContent>
                      <Box className="text-poppins flex flex-col gap-8 py-6 text-lg/[30px] text-[#141517]">
                        <Box>
                          <h3 className="pb-4 text-sm font-medium text-[#707174]">
                            MANTLE EQUITY
                          </h3>
                          <Box className="flex flex-col gap-6">
                            <Box className="flex gap-4">
                              <svg
                                className="h-6 w-6 text-[#aa8540]"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                ></path>
                              </svg>
                              <Box className="flex flex-col">
                                <h4 className="w-48">Cap Table Management</h4>
                                <p className="text-sm text-[#707174]">
                                  Visualize your Cap Table and company ownership
                                </p>
                              </Box>
                            </Box>
                            <Box className="flex gap-4">
                              <svg
                                className="h-6 w-6 text-[#aa8540]"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.75 3V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M20.25 3H21.75M20.25 3V14.25C20.25 15.4926 19.2426 16.5 18 16.5H15.75M8.25 16.5H15.75M8.25 16.5L7.25 19.5M15.75 16.5L16.75 19.5M16.75 19.5L17.25 21M16.75 19.5H7.25M7.25 19.5L6.75 21M7.5 12L10.5 9L12.6476 11.1476C13.6542 9.70301 14.9704 8.49023 16.5 7.60539"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                ></path>
                              </svg>
                              <Box className="flex flex-col">
                                <h4>Planning & Forecasting</h4>
                                <p className="text-sm text-[#707174]">
                                  Model your pro forma and option plan in one
                                  click
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box>
                          <h3 className="pb-4 text-sm font-medium text-[#707174]">
                            MANTLE PORTAL
                          </h3>
                          <Box className="flex flex-col gap-6">
                            <Box className="flex gap-4">
                              <svg
                                className="h-6 w-6 text-[#aa8540]"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                ></path>
                              </svg>
                              <Box className="flex flex-col">
                                <h4 className="w-48">LP Automation</h4>
                                <p className="text-sm text-[#707174]">
                                  Streamline private investment management in
                                  one place
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-poppins text-lg/[30px] text-[#141517]">
                      Solutions
                    </AccordionTrigger>
                    <AccordionContent>
                      <Box className="text-poppins flex flex-col gap-8 py-6 text-lg/[30px] text-[#141517]">
                        <Box className="flex flex-col gap-6">
                          <Box className="flex gap-4">
                            <svg
                              className="h-6 w-6 text-[#aa8540]"
                              fill="none"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4 className="w-48">For Founders</h4>
                              <p className="text-sm text-[#707174]">
                                Next-level equity management tools built to
                                scale
                              </p>
                            </Box>
                          </Box>
                          <Box className="flex gap-4">
                            <svg
                              className="h-6 w-6 text-[#aa8540]"
                              fill="none"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4 className="w-48">For Limited Partners</h4>
                              <p className="text-sm text-[#707174]">
                                Simplify investment workflows within one portal
                              </p>
                            </Box>
                          </Box>
                          <Box className="flex gap-4">
                            <svg
                              className="h-6 w-6 text-[#aa8540]"
                              fill="none"
                              height="25"
                              viewBox="0 0 25 25"
                              width="25"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clip-rule="evenodd"
                                d="M12.5441 3.16675C12.9583 3.16675 13.2941 3.50253 13.2941 3.91675V4.6724C15.3624 4.70361 17.3998 4.86366 19.3986 5.14496C20.4249 5.28939 21.4409 5.46578 22.4457 5.67309C22.8513 5.75679 23.1123 6.15351 23.0286 6.55918C22.9449 6.96484 22.5482 7.22585 22.1425 7.14215C21.5288 7.01553 20.9108 6.9008 20.2886 6.79823L22.643 16.4349C22.8389 17.2368 22.4866 18.1935 21.5791 18.52C20.8645 18.777 20.0948 18.9167 19.2941 18.9167C18.4934 18.9167 17.7237 18.777 17.0091 18.52C16.1016 18.1935 15.7492 17.2368 15.9452 16.4349L18.3671 6.52192C16.7016 6.31727 15.009 6.19926 13.2941 6.17258V20.4385C14.5866 20.5135 15.8285 20.7813 16.9909 21.2138C17.3791 21.3583 17.5766 21.7901 17.4322 22.1783C17.2877 22.5665 16.8559 22.7641 16.4677 22.6196C15.247 22.1654 13.9255 21.9167 12.5441 21.9167C11.1627 21.9167 9.84115 22.1654 8.62052 22.6196C8.23232 22.7641 7.8005 22.5665 7.65602 22.1783C7.51155 21.7901 7.70912 21.3583 8.09733 21.2138C9.25964 20.7813 10.5016 20.5135 11.7941 20.4385V6.17258C10.0792 6.19926 8.38663 6.31727 6.72112 6.52192L9.14303 16.4349C9.33894 17.2368 8.98659 18.1935 8.07909 18.52C7.36448 18.777 6.59478 18.9167 5.79409 18.9167C4.99341 18.9167 4.22371 18.777 3.5091 18.52C2.6016 18.1935 2.24925 17.2368 2.44516 16.4349L4.79956 6.79823C4.1774 6.9008 3.55934 7.01553 2.94565 7.14215C2.53998 7.22585 2.14327 6.96484 2.05957 6.55918C1.97587 6.15351 2.23687 5.75679 2.64254 5.67309C3.6473 5.46578 4.66333 5.28939 5.68957 5.14496C7.68835 4.86366 9.72577 4.70361 11.7941 4.6724V3.91675C11.7941 3.50253 12.1299 3.16675 12.5441 3.16675ZM5.79409 9.04771L3.9023 16.7909C3.88096 16.8782 3.89309 16.9588 3.91967 17.0151C3.94404 17.0667 3.97713 17.0942 4.01681 17.1085C4.57088 17.3078 5.16894 17.4167 5.79409 17.4167C6.41925 17.4167 7.01731 17.3078 7.57137 17.1085C7.61106 17.0942 7.64415 17.0667 7.66852 17.0151C7.6951 16.9588 7.70723 16.8782 7.68589 16.7909L5.79409 9.04771ZM19.2941 9.04771L17.4023 16.7909C17.381 16.8782 17.3931 16.9588 17.4197 17.0151C17.444 17.0667 17.4771 17.0942 17.5168 17.1085C18.0709 17.3078 18.6689 17.4167 19.2941 17.4167C19.9192 17.4167 20.5173 17.3078 21.0714 17.1085C21.1111 17.0942 21.1441 17.0667 21.1685 17.0151C21.1951 16.9588 21.2072 16.8782 21.1859 16.7909L19.2941 9.04771Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4>For Law Firms</h4>
                              <p className="text-sm text-[#707174]">
                                Help clients issue equity, plan for the future,
                                and stay compliant
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-poppins text-lg/[30px] text-[#141517]">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <Box className="text-poppins flex flex-col gap-8 py-6 text-lg/[30px] text-[#141517]">
                        <Box>
                          <p>Migrate from Carta</p>
                        </Box>
                        <Box>
                          <p>Migrate from Pulley</p>
                        </Box>
                        <Box>
                          <p>Migrate from Shareworks</p>
                        </Box>
                        <Box>
                          <p>409A Valuations</p>
                        </Box>
                        <Box>
                          <p>Privacy Policy</p>
                        </Box>
                        <Box className="flex place-items-center">
                          <p>Blog&nbsp;</p>
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
                    </AccordionContent>
                  </AccordionItem>
                  <Box className="flex place-content-center place-items-center gap-1 p-4">
                    <Button className="w-full">GET STARTED</Button>
                    <Button className="w-full" variant="secondary">
                      LOG IN
                    </Button>
                  </Box>
                </Accordion>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Separator />
      </Box>
      <Box
        className="invisible fixed top-0 z-50 w-full bg-[#faf4ee] opacity-[.99] md:visible"
        maxHeight="96px"
        minHeight="96px"
      >
        <Box className="flex h-full w-full place-content-center">
          <NavigationMenu className="m-8 min-w-[500px] max-w-[1400px] justify-between">
            <NavigationMenuLink>
              <Image
                alt="logo"
                className="min-h-[36px] min-w-[163px]"
                height={36}
                src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
                width={163}
              />
            </NavigationMenuLink>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Box className="text-poppins flex w-[664px] gap-8 rounded-xl bg-[#1a1a1c] p-10 font-[550] text-white">
                    <Box className="flex w-1/2 flex-col">
                      <Box>
                        <h3 className="pb-4 text-sm font-medium text-[#a1a5ad]">
                          MANTLE EQUITY
                        </h3>
                        <Box className="flex flex-col gap-6">
                          <Box className="flex gap-4">
                            <svg
                              className="h-8 w-8 text-[#c69f59]"
                              fill="none"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4 className="w-48">Cap Table Management</h4>
                              <p className="text-sm text-[#a1a5ad]">
                                Visualize your Cap Table and company ownership
                              </p>
                            </Box>
                          </Box>
                          <Box className="flex gap-4">
                            <svg
                              className="h-8 w-8 text-[#c69f59]"
                              fill="none"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.75 3V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M20.25 3H21.75M20.25 3V14.25C20.25 15.4926 19.2426 16.5 18 16.5H15.75M8.25 16.5H15.75M8.25 16.5L7.25 19.5M15.75 16.5L16.75 19.5M16.75 19.5L17.25 21M16.75 19.5H7.25M7.25 19.5L6.75 21M7.5 12L10.5 9L12.6476 11.1476C13.6542 9.70301 14.9704 8.49023 16.5 7.60539"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4>Planning & Forecasting</h4>
                              <p className="text-sm text-[#a1a5ad]">
                                Model your pro forma and option plan in one
                                click
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="flex w-1/2 flex-col">
                      <Box>
                        <h3 className="pb-4 text-sm font-medium text-[#a1a5ad]">
                          MANTLE PORTAL
                        </h3>
                        <Box className="flex flex-col gap-6">
                          <Box className="flex gap-4">
                            <svg
                              className="h-8 w-8 text-[#c69f59]"
                              fill="none"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path>
                            </svg>
                            <Box className="flex flex-col">
                              <h4 className="w-48">LP Automation</h4>
                              <p className="text-sm text-[#a1a5ad]">
                                Streamline private investment management in one
                                place
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Box className="text-poppins flex flex-col gap-10 rounded-xl bg-[#1a1a1c] p-10 font-[550] text-white">
                    <Box className="flex flex-col gap-6">
                      <Box className="flex gap-4">
                        <svg
                          className="h-10 w-10 text-[#c69f59]"
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                        <Box className="flex flex-col">
                          <h4 className="w-48">For Founders</h4>
                          <p className="text-sm text-[#a1a5ad]">
                            Next-level equity management tools built to scale
                          </p>
                        </Box>
                      </Box>
                      <Box className="flex gap-4">
                        <svg
                          className="h-10 w-10 text-[#c69f59]"
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                        </svg>
                        <Box className="flex flex-col">
                          <h4 className="w-48">For Limited Partners</h4>
                          <p className="text-sm text-[#a1a5ad]">
                            Simplify investment workflows within one portal
                          </p>
                        </Box>
                      </Box>
                      <Box className="flex gap-4">
                        <svg
                          className="h-12 w-12 text-[#c69f59]"
                          fill="none"
                          height="25"
                          viewBox="0 0 25 25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M12.5441 3.16675C12.9583 3.16675 13.2941 3.50253 13.2941 3.91675V4.6724C15.3624 4.70361 17.3998 4.86366 19.3986 5.14496C20.4249 5.28939 21.4409 5.46578 22.4457 5.67309C22.8513 5.75679 23.1123 6.15351 23.0286 6.55918C22.9449 6.96484 22.5482 7.22585 22.1425 7.14215C21.5288 7.01553 20.9108 6.9008 20.2886 6.79823L22.643 16.4349C22.8389 17.2368 22.4866 18.1935 21.5791 18.52C20.8645 18.777 20.0948 18.9167 19.2941 18.9167C18.4934 18.9167 17.7237 18.777 17.0091 18.52C16.1016 18.1935 15.7492 17.2368 15.9452 16.4349L18.3671 6.52192C16.7016 6.31727 15.009 6.19926 13.2941 6.17258V20.4385C14.5866 20.5135 15.8285 20.7813 16.9909 21.2138C17.3791 21.3583 17.5766 21.7901 17.4322 22.1783C17.2877 22.5665 16.8559 22.7641 16.4677 22.6196C15.247 22.1654 13.9255 21.9167 12.5441 21.9167C11.1627 21.9167 9.84115 22.1654 8.62052 22.6196C8.23232 22.7641 7.8005 22.5665 7.65602 22.1783C7.51155 21.7901 7.70912 21.3583 8.09733 21.2138C9.25964 20.7813 10.5016 20.5135 11.7941 20.4385V6.17258C10.0792 6.19926 8.38663 6.31727 6.72112 6.52192L9.14303 16.4349C9.33894 17.2368 8.98659 18.1935 8.07909 18.52C7.36448 18.777 6.59478 18.9167 5.79409 18.9167C4.99341 18.9167 4.22371 18.777 3.5091 18.52C2.6016 18.1935 2.24925 17.2368 2.44516 16.4349L4.79956 6.79823C4.1774 6.9008 3.55934 7.01553 2.94565 7.14215C2.53998 7.22585 2.14327 6.96484 2.05957 6.55918C1.97587 6.15351 2.23687 5.75679 2.64254 5.67309C3.6473 5.46578 4.66333 5.28939 5.68957 5.14496C7.68835 4.86366 9.72577 4.70361 11.7941 4.6724V3.91675C11.7941 3.50253 12.1299 3.16675 12.5441 3.16675ZM5.79409 9.04771L3.9023 16.7909C3.88096 16.8782 3.89309 16.9588 3.91967 17.0151C3.94404 17.0667 3.97713 17.0942 4.01681 17.1085C4.57088 17.3078 5.16894 17.4167 5.79409 17.4167C6.41925 17.4167 7.01731 17.3078 7.57137 17.1085C7.61106 17.0942 7.64415 17.0667 7.66852 17.0151C7.6951 16.9588 7.70723 16.8782 7.68589 16.7909L5.79409 9.04771ZM19.2941 9.04771L17.4023 16.7909C17.381 16.8782 17.3931 16.9588 17.4197 17.0151C17.444 17.0667 17.4771 17.0942 17.5168 17.1085C18.0709 17.3078 18.6689 17.4167 19.2941 17.4167C19.9192 17.4167 20.5173 17.3078 21.0714 17.1085C21.1111 17.0942 21.1441 17.0667 21.1685 17.0151C21.1951 16.9588 21.2072 16.8782 21.1859 16.7909L19.2941 9.04771Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        <Box className="flex flex-col">
                          <h4>For Law Firms</h4>
                          <p className="text-sm text-[#a1a5ad]">
                            Help clients issue equity, plan for the future, and
                            stay compliant
                          </p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <Box className="text-poppins flex flex-col gap-10 rounded-xl bg-[#1a1a1c] p-10 font-[550] text-white">
                    <NavigationMenuLink>
                      <a className="text-nowrap" href="">
                        Migrate from Carta
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-nowrap" href="">
                        Migrate from Pulley
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-nowrap" href="">
                        Migrate from Shareworks
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-nowrap" href="">
                        409A Valuations
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-nowrap" href="">
                        Privacy Policy
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a
                        className="flex place-items-center text-nowrap"
                        href=""
                      >
                        Blog&nbsp;&nbsp;
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
                      </a>
                    </NavigationMenuLink>
                  </Box>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex gap-2">
                <Button variant="secondary">LOGIN</Button>
                <Button variant="default">GET STARTED</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Box>
        <Separator />
      </Box>
    </Box>
  );
};

export default Navbar;
