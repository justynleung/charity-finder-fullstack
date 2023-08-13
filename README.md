<h1>Charity Finder Full-stack Application</h1>
<a href="https://https://charity-finder-frontend.vercel.app/">Click Me!</a>
<h2>Frontend</h2>
<ul>
   <li>NodeJS</li>
   <li>ReactJS</li>
   <li>Typescript</li>
   <li>TailwindCSS</li>
   <li>Vite</li>
</ul>
<h2>Backend</h2>
<ul>
   <li>NodeJS</li>
   <li>ExpressJS</li>
   <li>Typescript</li>
   <li>MongoDB & Mongoose</li>
</ul>

<h2>Functionalities</h2>
<p>A List of charities is fetched from Every Org's API. From there, users can search for charities, then add to or delete from their favorite list, which is attached to MongoDB. Instead of adding one at a time, a multiple selector will add all of their selection to the Database. A warning message will be shown if any of the charities exist in the database. For better UX, dark mode is implemented and there is animation for each card (charity) components upon selection.</p>

<h2>Technologies</h2>
<p>The application is built with Vite. Both frontend and backend is deployed on vercel. CORS is allowed on backend codebase. Typescript is used throughout the project with precise definition. TailwindCSS provided easy modification with inline styling.</p>

<h2>Challenges</h2>
<p>There is several functionalities implemented in the application. Thus, it has a slightly complex state management. Redux is not used because state is not nested and lifting state usually solves the problem (and I have actually practiced Redux store in another project).</p>
