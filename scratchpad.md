# Current Task: Debugging HomeSmartFeature Build Error

## Task Description
Fixing a build error in the HomeSmartFeature component that's preventing the app from compiling.

Initial error:
```
Error: Unexpected token `LandingProductFeature`. Expected jsx identifier
```

Second error:
```
Error: Parsing error: ',' expected.
```

## Debugging Progress
[X] 1. Initial Component Issues
    - Fixed import syntax (named vs default)
    - Added 'use client' directive
    - Created minimal test component

[X] 2. String Literal Issues
    - Found curly quotes and em dashes in text content
    - Replaced with standard quotes and hyphens
    - Fixed nested quote escaping
    - Fixed grammatical error ('a informed' -> 'an informed')

[ ] 3. JSX Entity Issues
    - Need to escape apostrophes in JSX content with &apos;
    - Only needed for JSX content, not string literals
    - Affects text in <p> tags and similar JSX elements

## Current Status
- ✅ Build successful!
- Fixed all string and character issues:
  - Replaced special Unicode characters with standard ASCII
  - Properly escaped apostrophes in JSX with &apos;
  - Used correct quote nesting in string literals
  - Fixed grammatical errors

## Lessons
- When copying text content, be careful of special Unicode characters that may cause syntax errors
- Use standard ASCII characters instead of typographic quotes and dashes
- For nested quotes, use double quotes for the outer string and single quotes for inner quotes
- Always validate string content for proper escaping and character usage

## Next Steps
1. Test the component in the browser
2. Document string formatting guidelines:
   - Use &apos; for apostrophes in JSX content
   - Use standard quotes in string literals
   - Avoid special Unicode characters
3. Consider adding ESLint rules to enforce these guidelines
4. Share these learnings with the teamscount messaging are consistent
