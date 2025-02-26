import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          {/* <Navbar /> */}
          <main>
            <Outlet />
          </main>
          <Toaster />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  ),
});

// const Navbar = () => {
//   return (
//     <nav className="border-b flex justify-center items-center py-4 sticky top-0">
//       <div className=" flex h-10 items-center px-4 bg-white shadow-[0px_0px_10px_lightgray] max-w-lg w-full rounded-3xl">
//         <Link to="/" className="font-medium hover:bg-zinc-50">
//           Home
//         </Link>
//       </div>
//     </nav>
//   );
// };
