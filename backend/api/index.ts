import app from "../app";

export default app;

// Prepare for deployment
// Step 1 : Create /API directory and create index.js, import app.js and export default app
// Step 2 : Create vercel.json, add rewrite to push all traffic to index.js
// Step 3 : Add a /public directory and create .gitkeep
// Step 4 : package.json add "vercel build" to "scripts", to overwrite any default build commands 