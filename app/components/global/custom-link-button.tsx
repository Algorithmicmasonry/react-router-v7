import { Button } from "~/components/ui/button";
import { Key } from "lucide-react";

import { Link } from "react-router";
type CustomLinkButton = {
  href: string;
  title: string;
};
export function CustomLinkButton({ href, title }: CustomLinkButton) {
  return (
    <div>
      <Link to="/login">
        <Button className="bg-white text-black  border-red-500 h-12 px-6 text-base space-x-2 rounded-full hover:text-white">
          Login
          <Key />{" "}
        </Button>
      </Link>
    </div>
  );
}
