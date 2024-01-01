"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/utils";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { BsMenuAppFill } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { components, navLinks } from "@/constants";



export function SecondNavbar() {
  return (
    <NavigationMenu className="text-blue-200 items-center flex flex-row ml-10 mt-4 ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className="flex lg:flex-1 ">
            <Link href="#" className="-m-1.5 p-1.5 ">
              <img className="h-[150px] w-auto " src="/girlll.png" alt="" />
            </Link>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent flex hover:text-pink-700">
            Main <BsFillMenuButtonFill size={15}  className="ml-1 "/>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#010e43] text-blue-200">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]  ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  <p className="text-blue-700">{component.description}</p>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent flex hover:text-pink-700">
            Project <BsMenuAppFill size={15}  className="ml-1 " />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#010e43] text-blue-200">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navLinks.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                    <p className="text-blue-700">
                        
                  {component.description}
                    </p>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
