import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

// StreamableHttp server
const handler = createMcpHandler(
  async (server) => {
    server.tool(
      "get_weather",
      "Get the current weather for a specified city",
      {
        city: z.string(),
      },
      async ({ city }) => ({
        content: [{ type: "text", text: `The weather in ${city} is sunny and bright` }],
      }),
    );
  },
  {
    capabilities: {
      tools: {
        get_weather: {
          description: "Get the current weather for a specified city",
        },
        get_time: {
          description: "Get the current time for a specified city",
        },
      },
    },
  },
  {
    basePath: "/api/mcp1",
    verboseLogs: true,
    maxDuration: 60,
  },
);

export { handler as GET, handler as POST, handler as DELETE };