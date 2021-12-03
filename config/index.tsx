//variable to check to see if are in development mode

const dev: any = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://myproductionwebsite.com";
