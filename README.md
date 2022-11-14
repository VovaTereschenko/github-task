# Frontend engineer

This assignment is meant to evaluate the React proficiency of full-time engineers. Your code structure should follow design best practices and our evaluation will focus primarily on your ability to follow good design principles and less on correctness and completeness of algorithms. If you are successful, you will have the opportunity to explain design choices and provide justifications for the omitted parts at a face to face interview.

## Coding task

Your task is to write a simple React Application that renders list of react repositories in the table view of your choice or in the following manner:

        • <name> - 🌟 <stars> - 🍴 <forks>
        • react - 🌟 69012 - 🍴 12581
        • reselect - 🌟 7291 - 🍴 214
        • redux - 🌟 31705 - 🍴 6581
        • recompose - 🌟 5671 - 🍴 342
        ...

Repository name should be a link to the actual GitHub repo.

## Constraints

- Use TypeScript
- Use React Hooks
- Feel free to use any boilerplate configuration as `create-react-app`
- Do not leave any unused dependencies or scripts
- Do not mock API response in your repository

## API

Use the Github Graphql API v4 to fetch the list of repos.

- [Docs](https://developer.github.com/v4/)
- [Explorer](https://developer.github.com/v4/explorer/)
