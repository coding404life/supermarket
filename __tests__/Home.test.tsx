import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import HomePage from "@/app/page";
import products from "@/__mocks__/products";

const server = setupServer(
  http.get("https://dummyjson.com/products", () => HttpResponse.json(products))
);

// Start MSW server before all tests
beforeAll(() => server.listen());
// Reset MSW handlers after each test
afterEach(() => server.resetHandlers());

// Close MSW server after all tests
afterAll(() => server.close());

describe("HomePage", () => {
  it("Should renders homepage with loading... if waiting for products", async () => {
    server.use(
      http.get("https://dummyjson.com/products", () => HttpResponse.json())
    );
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("Should renders homepage with products without crashing", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );

    expect(await screen.findByText("Product 1")).toBeInTheDocument();
    expect(await screen.findByText("Product 2")).toBeInTheDocument();
  });
});
