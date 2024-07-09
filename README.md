# Feedback Feature App

## Introduction

The Feedback Feature App serves as a central hub for users to connect with stakeholders. It offers a range of options, allowing users to effortlessly reach out for different purposes. Users can utilize this feature to inquire about queries, report any encountered bugs, propose new features, or share their valuable feedback.

## Features

### Opened FAB
- **Configurable options per page** (show all, some, or no FAB features).

#### Report an Issue
- **Logged In User**: Title, "Choose a section" (Dropdown, pre-selected), "Describe the issue in detail" (Text Box, Mandatory), Submit button.
- **Logged Out User**: Same as above, plus email field (Mandatory).

#### Share Feedback
- **Logged In User**: Text Box (Mandatory), Send anonymously checkbox, Submit button.
- **Logged Out User**: Text Box (Mandatory), Email field (Mandatory), Submit button.

#### Give Suggestion
- **Logged In User**: Title, Dropdown, Text Box (Mandatory), Submit button.
- **Logged Out User**: Same as above, plus email field (Mandatory).

#### Contact Us
- **Logged In User**: Title, Name (Mandatory), "What would you like to ask?" (Text Box, Mandatory), Submit button.
- **Logged Out User**: Same as above, plus Email and Mobile Number fields (Mandatory), Submit button (disabled until mandatory fields are filled).

### Text Box Field
- Vertical scroll bar, maximum letter limit (1000).
- File attachment (max 2 images, each 50*50px).

### Check Box
- For "Share Feedback" option: send feedback anonymously checkbox.

### User Login States
- **Logged In User**: Email stored and associated with submission.
- **Non-Logged In User**: Optional email field, invalid email error message.

### Thanks Message
- Pop-up message above the FAB button post-submission.

### Rate Us Card
- Appears after completion or prompt for rating.
- Star selection activates submit button.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashankaz/feedback-feature-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd feedback-feature-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
