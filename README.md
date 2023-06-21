#Jenni Code Assessment- Text editor

## Prerequisites

You will need NodeJS installed on your machine.

To install NodeJS on Mac:

`brew install nodejs`

To install NodeJS on Linux:

`brew install nodejs`

Add .env file with below details-

`# Port number`
`PORT=XXXX`

`# Node environment`
`NODE_ENV=development`

`# MongoDB URL`
`MONGODB_URL = XXXXXXXX`

## Installing

Clone the contents of the Git repository to your local:

To start the SERVER, go into the 'server' directory and run the following command:
`npm install`

To run the code,go to 'src' folder under 'server' use the following command:
`node index.js`

To start the UI, go into the 'client' directory and run the following command:
`npm install`
`npm start`

## TASK Specifications

**Requirements**

- The text editor should be as simple as possible.
  - It does not need rich text support.
  - You do not need to worry about synchronizing carets/selection/cursors from multiple users.
  - Persistence is optional - you do not need to save the text. You do not need to worry about databases.
  - It does not need any styling - it’s meant to be just functional.
  - You do not need to be concerned about “multiple documents”. All users who go on your app will be accessing the same single document.
- When the user types text in the editor, other users should, in real time, see those changes. You can test this by opening two windows and going on your web app to see if changes in one editor are reflected in the other.
- When multiple users type in the editor simultaneously, conflicts should be resolved such that both users have a “good user experience (UX)”. The details of what constitutes a good UX are up to you to define and justify. If in doubt, you may refer to Google Docs’ behavior as a reference.
- Include a brief README file so we know how to install, build and run your app.
  - (Optional) If you have extra time, please justify in the README why you chose to architect the app the way you did. Are there any tradeoffs you had to make? What would you do if you had more time and this was a real product?

**Tech Stack Requirements**

- The front end should be implemented using React
- The back end should be implemented in TypeScript or JavaScript (e.g., Node JS)
- You may use any publicly available tool, library, or framework to build your app. TypeScript is recommended.
- (Optional) Extra point if you can deploy your app on some free hosting platforms (e.g., Vercel). If you manage to deploy your app, please link to the demo in the README file.

## **Submission Requirements**

- Your submission should be a link to a public GitHub repository containing your work with all commits pushed.
- After submission, we may ask you follow-up questions about your work sample.

### What We Are Assessing

This work sample is meant to showcase your skills. Specifically, we are assessing:

- Engineering resourcefulness: the ability to quickly leverage tools to build a web app
- Ability to understand and justify code logic and design choices
- Implementation correctness
- Code quality and readability

## NEXT STEPS

In context of time , I have used a simplistic approach to provide a real time text editing for multiple users.
However for production environment or a real world scenarios concurrent edits can be handled with complex algorithms like Operational Transformation and Conflict-free Replicated Data Types. I have not worked in this domain much but after exploring some options seems like there are existing libraries like Y.js which handle complex synchronization logic and provide APIs to manipulate the shared data. So my next step would be to explore these libraries in detail and evaluate pros and cons of each to decide which can be incorporated to fulfill our requirements. With the help of this our existing conflict resolution logic can be improved to handle concurrent edits.
