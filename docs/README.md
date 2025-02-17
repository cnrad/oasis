# 🔨 Contributing to Oasis

## Getting Started
Oasis is actively open to new contributions. If you would like to contribute, follow the instructions for the package(s) you are looking to set up in [docs/packages](./packages). We also highly recommend taking a look at our [issues](https://github.com/oasis-sh/oasis/issues) for anything interesting that may seem fitting for you to work on before deciding to add any new features.

We also have a [public roadmap](https://github.com/oasis-sh/oasis/projects/9), that can be viewable for everyone.

## Commit Messages
Oasis is following the [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) standard for commit messages.

1. Run `yarn` in the project root
2. Add the files you want to commit with `git add [files]`
3. Run `yarn commit` in the project root for a interactive prompt to appear and follow the instructions.

## Enviornment Variables
Follow the enviornment variable examples (located in **.env.example**) for `web` and `api`, to fill in your own .env file. <br/>
**Reminder:** Not all of the enviornment variables are required.

## Understanding Scripts
```bash
# Build all the Packages
$ yarn build:all

# Build a specific package
$ yarn build <package>

# Run the Web Application and UI Components
$ yarn dev

# Delete all compiled code (dist folders) globally
$ yarn clean
```

## Linting
```bash
# Run Prettier + Eslint Globally
$ yarn format

# Run Prettier
$ yarn prettify

# Run Eslint
$ yarn lint
```

## TypeORM Migrations
```bash
# Generate a Migration command via the TypeORM Cli
$ yarn workspace @oasis-sh/api typeorm:generate_migration <name>

# Run the Migration
$ yarn workspace @oasis-sh/api typeorm:run_migrations
```
