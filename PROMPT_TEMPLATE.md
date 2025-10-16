# Prompt Template

Copy this template to create a new prompt. Save it as `prompts/your-prompt-name.md`.

```markdown
---
title: "Your Prompt Title"
tags: ["tag1", "tag2", "tag3"]
categories: ["category1", "category2"]
languages: ["python", "javascript", "typescript"]
models: ["claude-3.5-sonnet", "gpt-4", "gemini-pro"]
description: "Brief one-sentence description of what this prompt does"
author: "Your Name or GitHub Handle"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
---

# Main Prompt Title

Brief introduction explaining what this prompt does, when to use it, and what problem it solves.

## Instructions

[Main prompt text goes here. Be clear and specific about what you want the AI to do.]

### Requirements

List specific requirements:
1. Requirement 1
2. Requirement 2
3. Requirement 3

### Context to Provide

Explain what information users should provide to the AI:
- Context item 1: {placeholder_description}
- Context item 2: {placeholder_description}
- Context item 3: {placeholder_description}

## Expected Output

Describe what the AI should produce. Include:
- Format of the output
- Structure or organization
- Level of detail
- Any specific sections or components

## Example Usage

### Example 1: [Scenario Name]

**Input:**
```
[Example input showing how to use the prompt with real values]
```

**Expected Output:**
```
[Example of what the AI should produce]
```

### Example 2: [Another Scenario]

[Provide 2-3 examples showing different use cases]

## Variables to Replace

If your prompt includes placeholders, list them here:

- `{variable_name}`: Description of what to replace this with
- `{another_variable}`: Description
- `{optional_variable}`: Description (optional)

## Tips for Best Results

- Tip 1: Explain how to get better results
- Tip 2: Common pitfalls to avoid
- Tip 3: Additional context that helps
- Tip 4: Model-specific advice if applicable

## Variations

### Variation 1: [Name]
[Describe how to modify the prompt for a different use case]

### Variation 2: [Name]
[Another variation of the prompt]

## Related Prompts

- [Link to related prompt 1]
- [Link to related prompt 2]

---

## Notes

[Any additional notes, limitations, or considerations]

## Version History

- YYYY-MM-DD: Initial version
- YYYY-MM-DD: Added examples and tips
```

## Metadata Field Reference

### Required Fields

- **title**: Clear, descriptive title (3-60 characters)
- **description**: Brief summary (50-150 characters)
- **tags**: Array of relevant tags (minimum 1, recommended 3-10)
- **categories**: Array of categories (minimum 1, maximum 3)

### Optional Fields

- **languages**: Programming languages (e.g., `["python", "javascript"]`)
- **models**: AI models this works well with (e.g., `["claude-3.5-sonnet", "gpt-4"]`)
- **author**: Your name or GitHub handle
- **created**: Creation date in YYYY-MM-DD format
- **updated**: Last update date in YYYY-MM-DD format

## Category Options

Choose from these standard categories:

- `code-generation`: Generating new code from scratch
- `debugging`: Finding and fixing bugs
- `code-review`: Reviewing code quality and best practices
- `refactoring`: Improving existing code structure
- `testing`: Writing tests and test cases
- `documentation`: Creating documentation
- `api-design`: Designing APIs and interfaces
- `database`: Database design and SQL queries
- `performance`: Performance optimization
- `security`: Security analysis and improvements
- `architecture`: System design and architecture
- `learning`: Educational prompts for learning concepts

## Tag Best Practices

**Good Tags:**
- Specific technologies: `react`, `fastapi`, `postgresql`
- Programming languages: `python`, `typescript`, `rust`
- Concepts: `async`, `authentication`, `caching`
- Patterns: `design-patterns`, `solid`, `mvc`
- Domains: `web-dev`, `data-science`, `devops`

**Avoid:**
- Overly generic tags: `code`, `programming`, `software`
- Redundant tags already in categories
- Misspellings or non-standard names
- Tags with spaces (use hyphens: `machine-learning`)

## Quick Checklist

Before submitting, verify:

- [ ] All required metadata fields are filled
- [ ] Title is clear and descriptive
- [ ] Description is concise and informative
- [ ] At least 3 tags are included
- [ ] At least 1 category is specified
- [ ] Prompt text is clear and well-structured
- [ ] At least one example is included
- [ ] Variables/placeholders are explained
- [ ] Markdown formatting is correct
- [ ] Code blocks have language identifiers
- [ ] No sensitive information is included
- [ ] Prompt has been tested with an AI model
- [ ] File name uses kebab-case: `my-prompt-name.md`

## Example File Names

Good:
- `react-component-generator.md`
- `python-debug-assistant.md`
- `api-endpoint-builder.md`
- `sql-query-optimizer.md`

Avoid:
- `React Component Generator.md` (spaces)
- `my_prompt.md` (underscores)
- `prompt1.md` (not descriptive)
- `MYPROMMPT.md` (all caps)

## Need Help?

- See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines
- Check existing prompts in the `prompts/` directory for examples
- Ask questions in [GitHub Discussions](https://github.com/yourusername/prompt-sharing/discussions)
