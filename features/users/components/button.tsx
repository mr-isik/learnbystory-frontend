import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
};

const UserButton: React.FC<Props> = ({ slug }) => {
  const user = {
    name: "John Doe",
    email: "user@gmail.com",

    // Replace this with the actual user image
    image: "https://randomuser.me/api",
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback className="bg-primary/10">
              {user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2" align="end">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1 p-2">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>

          <div className="flex flex-col">
            <Link href={`/dashboard/${slug}/settings`}>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings size={16} />
                Settings
              </Button>
            </Link>

            <Link href="/api/auth/signout">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-red-600 hover:text-red-600 hover:bg-red-100"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserButton;
