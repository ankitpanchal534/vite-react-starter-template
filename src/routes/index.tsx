import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-foreground">
        Welcome to Our App
      </h1>
      This template is buit with Vite + React, Tailwind css, ShadCN Components,
      Tanstack router ,
    </div>
  );
}
