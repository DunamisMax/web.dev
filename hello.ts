// Importing Deno's HTTP server from the standard library
import { serve } from "https://deno.land/std@0.214.0/http/server.ts";

// Define the port where the server will listen
const port = 8080;

// Create a regular handler function that responds with "Hello, World!"
const handler = (req: Request): Response => {
  const url = new URL(req.url);

  // Log the incoming request method and path for debugging
  console.log(`Received ${req.method} request for ${url.pathname}`);

  // Respond with a JSON message
  const response = {
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
    path: url.pathname,
  };

  // Return the response as JSON
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
};

// Start the server and listen on the specified port
console.log(`HTTP server running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
