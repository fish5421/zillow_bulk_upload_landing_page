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

## Progress

[X] Fixed unused imports
  - Removed HomeTaskPrioritization and HomeSocialBand from landing/page.tsx
  - Removed ContactForm from HomeContact.tsx

[X] Fixed unescaped HTML entities
  - Added proper HTML entity escaping in HomeSmartFeature.tsx

[X] Fixed Next.js Link usage
  - Replaced <a> with Next.js Link in Header.tsx

[X] Fixed TypeScript type issues
  - Made withCtaTracking HOC more flexible with generic type parameters
  - Added ESLint disable comment for props used in HOC
  - Fixed Meta Pixel type definitions to handle undefined parameters

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

## Additional Lessons

1. When working with HOCs and TypeScript:
   - Make HOCs flexible with generic type parameters
   - Consider using ESLint disable comments when props are intentionally destructured for HOC use
   - Be explicit about element types when dealing with event handlers

2. Meta Pixel API type considerations:
   - Allow for undefined parameters in type definitions
   - Structure types to match the API's actual behavior (arrays of arguments)
   - Use union types to handle multiple valid parameter types

3. Next.js best practices:
   - Always use Next.js Link component for internal navigation
   - Avoid using raw <a> tags for routes handled by Next.js

## Next Steps
1. Test the component in the browser
2. Document string formatting guidelines:
   - Use &apos; for apostrophes in JSX content
   - Use standard quotes in string literals
   - Avoid special Unicode characters
3. Consider adding ESLint rules to enforce these guidelines
4. Share these learnings with the teamscount messaging are consistent

[ ] Test the build to ensure all type errors are resolved
[ ] Review any remaining ESLint warnings or errors
[ ] Consider adding documentation about type handling for future reference

## Subdirectory Move Plan
[X] 1. Understand the current routing structure.
[ ] 2. Identify the files related to the landing page.
[X] 3. Modify the routing configuration to serve the landing page from the root.
    [X] 3.1 Move the contents of `/app/landing` to `/app`.
    [X] 3.2 Update any necessary imports or references.
[X] 4. Test the changes.
[X] 5. Update the scratchpad with lessons learned.

# Serve the Landing Page from Its Own Root

## Task
Change the landing page to serve from its own root.

## Plan
[X] 1. Understand the current routing structure.
[X] 2. Identify the files related to the landing page.
[X] 3. Modify the routing configuration to serve the landing page from the root.
[X] 4. Test the changes.
[X] 5. Update the scratchpad with lessons learned.

## Lessons
