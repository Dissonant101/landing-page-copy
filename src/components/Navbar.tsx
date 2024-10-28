import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Box } from '@radix-ui/themes';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Box
      className="fixed top-0 z-50 w-full bg-[#faf4ee] opacity-[.98]"
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
                <Box className="text-poppins flex w-auto rounded-xl bg-[#141517] p-10 font-[550] text-white opacity-95">
                  <Box></Box>
                  <Box></Box>
                </Box>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Box className="text-poppins flex w-auto flex-col gap-10 rounded-xl bg-[#141517] p-10 font-[550] text-white opacity-95">
                  <NavigationMenuLink>
                    <a className="text-nowrap" href="">
                      For Founders
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a className="text-nowrap" href="">
                      For Limited Partners
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a className="text-nowrap" href="">
                      For Law Firms
                    </a>
                  </NavigationMenuLink>
                </Box>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Box className="text-poppins flex w-auto flex-col gap-10 rounded-xl bg-[#141517] p-10 font-[550] text-white opacity-95">
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
                    <a className="text-nowrap" href="">
                      Blog
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
  );
};

export default Navbar;
