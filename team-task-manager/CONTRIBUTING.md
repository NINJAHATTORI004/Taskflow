# Contributing to Team Task Manager

We love your input! We want to make contributing to Team Task Manager as easy and transparent as possible.

## Development Process

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Write or update tests if applicable
5. Ensure code quality
6. Create a Pull Request

## Getting Started

### Prerequisites
- Node.js v14+
- MongoDB
- Git

### Setting Up Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/team-task-manager.git
cd team-task-manager

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client-vite
npm install
```

### Running Tests

```bash
# Backend tests (when tests are added)
cd server
npm test

# Frontend tests (when tests are added)
cd ../client-vite
npm test
```

## Code Style

### JavaScript/React
- Use 2-space indentation
- Use meaningful variable and function names
- Add comments for complex logic
- Follow ES6+ standards

### Commit Messages
- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, etc.)
- Keep messages under 50 characters
- Add detailed description in body if needed

Examples:
- ✅ `Add error handling for task updates`
- ✅ `Fix token expiration handling`
- ✅ `Update API error messages`
- ❌ `fixed bug`
- ❌ `changes`

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update version numbers following semantic versioning
3. Provide a clear description of what the PR does
4. Reference any related issues
5. Ensure all tests pass
6. Request review from maintainers

### PR Title Format
- `[FEATURE] Add new feature name`
- `[BUG FIX] Fix bug description`
- `[DOCS] Update documentation`
- `[CHORE] Dependency updates`

## Feature Suggestions

Great ideas are always welcome! Please:
1. Check existing issues to avoid duplicates
2. Describe the use case and benefits
3. Provide examples if possible
4. Be open to feedback

## Bug Reports

Found a bug? Please provide:
1. Clear description of the issue
2. Steps to reproduce
3. Expected vs actual behavior
4. Your environment (OS, Node version, etc.)
5. Screenshots if applicable

## Questions?

Feel free to open an issue for:
- Technical questions
- Architecture discussions
- Implementation approach

## License

By contributing, you agree that your contributions will be licensed under the same ISC License that covers the project.

Thank you for contributing! 🎉
