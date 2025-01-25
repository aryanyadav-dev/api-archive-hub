"use client";

    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import {
      Home,
      Search,
      Book,
      Code,
      Settings,
      HelpCircle,
    } from "lucide-react";
    import { Button } from "@/components/ui/button";

    const routes = [
      { path: "/", name: "Dashboard", icon: Home },
      { path: "/search", name: "Search APIs", icon: Search },
      { path: "/docs", name: "Documentation", icon: Book },
      { path: "/playground", name: "API Playground", icon: Code },
      { path: "/settings", name: "Settings", icon: Settings },
      { path: "/help", name: "Help & Support", icon: HelpCircle },
    ];

    const Sidebar = () => {
      const pathname = usePathname();

      return (
        <aside className="w-56 bg-teal-900/20 backdrop-blur-md p-6 space-y-6 border-r border-white/10 flex flex-col">
          {/* Header */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-teal-200 block mt-3"
          >
            API Hub
          </Link>

          {/* Separator */}
          <div className="border-t border-white/20 mt-2 -mx-4"></div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-white hover:text-teal-200 hover:bg-teal-900/30 ${
                      pathname === route.path ? "bg-teal-900/40 text-teal-200" : ""
                    }`}
                    asChild
                  >
                    <Link href={route.path} className="flex items-center">
                      <route.icon className="mr-2 h-4 w-4" />
                      {route.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      );
    };

    export default Sidebar;
