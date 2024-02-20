import { Button } from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";



interface Props {
    children: React.ReactNode;
  }
  
  export const NavbarWrapper = ({ children }: Props) => {
  return (
<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
     
        <p className="font-bold text-inherit">SOM</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Query Optimizer By SOM Organizition
          </Link>
        </NavbarItem>
         
      </NavbarContent>
      <NavbarContent justify="end">
       
      </NavbarContent>
    </Navbar>

    {children}
</div>

  
  );
}
