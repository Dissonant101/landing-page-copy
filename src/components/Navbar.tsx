import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="max-h-[96px]">
      <div className="flex h-full w-full place-content-center">
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
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex gap-2">
              <Button variant="secondary">LOGIN</Button>
              <Button variant="default">GET STARTED</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
