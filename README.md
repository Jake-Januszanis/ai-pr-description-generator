# AI PR Description Generator

An AI-powered GitHub Action that generates and updates pull-request descriptions based on the changes in a pull request.

AI PR Description Generator automates the creation of pull-request documentation while allowing developers to refine descriptions using their own instructions.

# Features

* Generates structured pull-request descriptions using the PR title, commits, and diff.
* Supports `/ai generate` and `/ai update` commands through pull-request comments.
* Allows developers to provide instructions when updating an existing description.
* Formats generated descriptions into consistent Markdown sections.
* Restricts AI command execution to authorized users.

# Example

*Demo coming soon.*

# How It Works

1. A developer comments `/ai generate` or `/ai update` on a pull request.
2. GitHub Actions passes the comment and pull-request information to the application.
3. The command parser identifies the requested operation and extracts any developer instructions.
4. The application builds the appropriate prompt based on the requested operation:
   - **`/ai generate`** creates a new description using the pull request title, commits, and diff.
   - **`/ai update`** uses the existing description along with developer-provided instructions to generate a revised description.
5. The generated description is formatted and sent to GitHub to update the pull request.

# Built With

* JavaScript (Node.js)
* GitHub Actions
* OpenAI API
* GitHub REST API
* Jest

# Design Decisions

### Separate Generate and Update Prompts

Generation and updates use separate prompts because they serve different purposes. Updates include the existing description and developer instructions so the model can refine the current content rather than generating a description from scratch.

### Developer-Controlled Updates

The `/ai update` command allows developers to provide specific instructions directly in the comment. This makes it possible to iteratively refine a generated description without manually editing the description and running another command.

### Restrict AI Command Execution

AI commands are restricted to authorized users to prevent arbitrary commenters from invoking the workflow, consuming API credits, or modifying pull-request descriptions.
