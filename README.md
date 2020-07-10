# Restaurant Explorer

Finds restaurants in a given city.

![Alt text](resources/demo-image.png 'Title')

### [Click Here To See A Demo](https://poftadeh.github.io/restaurant-explorer/)

## Technical Questions

1. I spent approximately 4.5 hours on the coding test. What I would do differently is to add more UI/UX features: animations, alerts, as well as increase the robustness of the testing suites. Though the project has a linter, I would also consider migrating this application in TypeScript to add further type safety. I've found this type of migration quite useful in past projects.

2. The nullish coalescing operator. This returns the left-hand side operand if it is not `null` or `undefined`. Example: `const foo = null ?? "default value";`

3. One way to track down performance issues is to use a profiler. There are profilers built in to the dev tools of both Chrome and Firefox browsers, as well as the React Developer Tools plugin. If the performance issue was introduced in an unknown commit, a `git bisect` operation can be conducted to discover its origin. I have had to use this method in production when working on a frontend touchscreen application for a medical imaging device.

4. The endpoint as utilized is delivering a large payload that mostly goes unused. I would look into how this could be improved to only fetch the data relevant to the application.

5. ```json
   {
     "firstName": "Pouya",
     "lastName": "Oftadeh",
     "title": "Full Stack Developer",
     "technicalSkills": ["React", "Redux", "TypeScript", "Node.js"],
     "isAnsweringAQuestion": true
   }
   ```
