import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function MenuCard({name}: {name: string}) {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300">
    {name}
  </DropdownMenuTrigger>
  <DropdownMenuContent className="p-2 m-1">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  );
}