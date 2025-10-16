---
title: "React Component Generator"
tags: ["react", "components", "typescript", "frontend"]
categories: ["code-generation", "web-development"]
languages: ["javascript", "typescript"]
models: ["claude-3.5-sonnet", "gpt-4", "gemini-pro"]
description: "Generate well-structured React components with TypeScript, props validation, and comprehensive documentation"
author: "Community"
created: "2024-01-15"
updated: "2024-01-20"
---

# React Component Generator Prompt

Create a React component with the following specifications:

## Instructions

Please create a **{component_type}** React component named **{ComponentName}** that:

1. Uses TypeScript with proper type definitions
2. Implements the following functionality: {functionality_description}
3. Accepts these props: {props_list}
4. Includes proper prop validation using TypeScript interfaces
5. Uses React hooks appropriately (useState, useEffect, etc.)
6. Follows React best practices and coding conventions
7. Includes JSDoc comments for the component and its props
8. Uses Tailwind CSS for styling (if applicable)
9. Is fully accessible (ARIA labels, keyboard navigation)
10. Includes error handling and loading states where appropriate

## Requirements

- Use functional components with hooks
- Implement proper TypeScript types
- Add comprehensive comments
- Follow the single responsibility principle
- Make the component reusable and composable
- Include default values for optional props
- Use meaningful variable and function names

## Example Usage

Please also provide an example of how to use this component, including:
- Import statement
- Sample implementation with different prop combinations
- Any necessary context or wrapper components

## Additional Considerations

- Performance optimization (memo, useMemo, useCallback if needed)
- Responsive design considerations
- Dark mode support (if applicable)
- Unit test structure (describe what should be tested)

---

## Variables to Replace

When using this prompt, replace the following placeholders:

- `{component_type}`: Type of component (e.g., "form", "modal", "card", "button")
- `{ComponentName}`: The name of your component (e.g., "UserProfileCard")
- `{functionality_description}`: What the component should do
- `{props_list}`: List of props the component should accept

## Example Usage

```
Create a **modal** React component named **ConfirmationDialog** that:
- Shows a confirmation message with custom title and description
- Has two action buttons (confirm and cancel)
- Accepts these props: isOpen, title, description, onConfirm, onCancel, confirmText, cancelText
```
