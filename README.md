# Key Word Kingdom

## Overview

This is a full-stack project created with Next.js that allows users to play a word guessing game. Progress and stats are saved to the server and made visible to users on their profile.

## Game Basics

**Objective**: Guess the secret Key Word before time runs out.

**Gameplay**:

- A Key Word is chosen from a list of words.
- Players are presented with a set of unique characters from the Key Word.
- The length of the Key Word is shown as underscores.
- Players use the provided characters to guess words.
- Correct letter placements from guesses are revealed on the Key Word display.

**Scoring**:

- Points are awarded for each valid word guessed
- The timer is also extended for vlaid guesses
- Correctly guessing all Key Words completes the level

**Difficulty**:

- As difficulty increases the Key Words become longer and the timer gets shorter
- Users can start a round with custom difficulty settings in Custom Mode
- Users can disable the timer in Custom Mode
- Users can also play Conquest Mode where the difficulty increases per level completed

## Project Details

**Tech Used**:

- Next.js - Full-stack React framework
- TailwindCSS - Utility class based style library
- Postgres & Prisma - SQL Database and ORM
- Shadcn UI - React component library

**Getting Started**:

- Play the game live on my [Personal Portfolio (NYI)](https://www.joshuarbarnhart.com)

- To run locally:
  1. Clone the repo to the desired location:
  ```
  git clone https://github.com/jrbarnhart/key-word-kingdom.git
  ```
  2. Install dependencies:
  ```
  npm i
  ```
  3. Create a .env file in the project's root directory with the following contents:
  ```
    DATABASE_CONNECTION_STRING: "your:database/string"
    SESSION_SECRET: "yourSessionSecret"
  ```
  4. Start the dev server:
  ```
    npm run dev
  ```
  5. Navigate to the url displayed in the console to access the app.

## License

This project is licensed under the [MIT License](LICENSE).
