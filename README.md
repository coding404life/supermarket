# Supermarket

This is a [Next.js](https://nextjs.org) project bootstrapped with latest [`create-next-app`](https://nextjs.org/docs/app/getting-started/installation).

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coding404life/supermarket.git
   cd supermarket
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```
## Docker Compose Setup

1. **Build and run the application using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Run tests:**
   ```bash
   yarn test
   ```
3. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**
   
5.  **Stop the application:**
   ```bash
   docker-compose down
   ```



## Technical Decisions Explanation

- **Next.js:** Chosen for its powerful features like server-side rendering, static site generation, and API routes, which are beneficial for building modern web applications.
- **React Query:** Used for data fetching and state management, providing a robust solution for handling server state.
- **MSW (Mock Service Worker):** Utilized for API mocking in tests, ensuring that tests are reliable and do not depend on external services.
- **Jest:** Selected as the testing framework for its comprehensive features and ease of integration with React and Next.js.
- **React Testing Library:** Used for testing React components, providing utilities to test the UI.

## Any Assumptions Made

- Product listing page assumed that the products will be changing based on new products and search will be fetched from API, as well as future pagination in the Product listing, so the page is CSR
- Product Details page assumed that this page should be SSR for each product to enhance SEO
- Assumed that product details page should have the meta data for each product
- The API endpoint `https://dummyjson.com/products` is assumed to be stable and reliable for fetching product data.

## Time Spent on the Task

- **Project Setup:** 2 hour
- **Implementing Features:** 3 hours
- **Writing Tests:** 1 hours
- **Documentation and Cleanup:** 1 hour

Total time spent: **7 hours**
