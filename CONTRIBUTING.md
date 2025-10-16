# Contributing to Prompt Library

Thank you for your interest in contributing to the Prompt Library! This document provides guidelines and instructions for contributing prompts.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Prompt Guidelines](#prompt-guidelines)
- [Submission Process](#submission-process)
- [Review Process](#review-process)
- [Style Guide](#style-guide)

## Code of Conduct

This project follows a simple code of conduct:

- Be respectful and constructive
- Focus on helping others learn and improve
- Give credit where credit is due
- Accept constructive criticism gracefully
- Prioritize community benefit over self-promotion

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

1. **New Prompts**: Submit original prompts you've found effective
2. **Prompt Improvements**: Enhance existing prompts with better structure or examples
3. **Bug Fixes**: Fix typos, formatting issues, or broken links
4. **Documentation**: Improve README, guides, or templates
5. **Features**: Suggest or implement new site features

### Prerequisites

- A GitHub account
- Basic knowledge of Git and markdown
- Experience using AI coding assistants

## Prompt Guidelines

### Quality Standards

Your prompt should:

✅ **Be Clear and Specific**
- Use precise language
- Provide clear instructions
- Define expected outputs

✅ **Be Well-Structured**
- Use logical organization
- Include sections and subsections
- Use markdown formatting effectively

✅ **Include Examples**
- Show how to use the prompt
- Provide sample inputs and outputs
- Demonstrate edge cases

✅ **Be Tested**
- Test with at least one AI model
- Verify it produces expected results
- Note any model-specific behavior

✅ **Add Value**
- Solve a real problem
- Be reusable in different contexts
- Teach good practices

### What NOT to Submit

❌ **Don't Submit:**
- Prompts that produce harmful or unethical outputs
- Prompts copied from proprietary sources without permission
- Overly specific prompts that only work in one narrow case
- Prompts that violate AI terms of service
- Low-effort or untested prompts
- Prompts containing sensitive information

## Submission Process

### Step-by-Step Guide

#### 1. Fork the Repository

Click the "Fork" button on the [repository page](https://github.com/yourusername/prompt-sharing).

#### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/prompt-sharing.git
cd prompt-sharing
```

#### 3. Create a Branch

```bash
git checkout -b add-prompt-your-prompt-name
```

Use a descriptive branch name like `add-prompt-react-testing` or `improve-python-debug`.

#### 4. Create Your Prompt File

Create a new markdown file in the `prompts/` directory:

```bash
prompts/your-prompt-name.md
```

Use kebab-case for filenames: `react-component-generator.md`, not `React Component Generator.md`.

#### 5. Write Your Prompt

Use the template below:

```markdown
---
title: "Descriptive Title"
tags: ["tag1", "tag2", "tag3"]
categories: ["category1", "category2"]
languages: ["python", "javascript"]
models: ["claude-3.5-sonnet", "gpt-4"]
description: "One or two sentence description"
author: "Your Name or GitHub Handle"
created: "2024-01-15"
updated: "2024-01-15"
---

# Main Prompt Title

Clear introduction explaining what this prompt does and when to use it.

## Instructions

Step-by-step instructions or the main prompt text...

## Requirements

List any specific requirements...

## Example Usage

Show how to use this prompt with concrete examples...

## Expected Output

Describe what the AI should produce...

## Tips

Optional: Tips for getting the best results...

## Variables

If your prompt has placeholders, explain them here...
```

#### 6. Fill in Metadata

**Required Fields:**

```yaml
title: "Your Prompt Title"
description: "Brief description (50-150 characters)"
tags: ["tag1", "tag2"]  # At least 1 tag
categories: ["category"]  # At least 1 category
```

**Optional Fields:**

```yaml
languages: ["python", "typescript"]
models: ["claude-3.5-sonnet", "gpt-4"]
author: "Your Name"
created: "2024-01-15"
updated: "2024-01-15"
```

#### 7. Test Locally

```bash
# Install dependencies (first time only)
npm install

# Build the index
npm run index

# Start dev server
npm run dev
```

Open `http://localhost:5173` and verify your prompt appears and looks correct.

#### 8. Commit Your Changes

```bash
git add prompts/your-prompt-name.md
git commit -m "Add prompt: Your Prompt Title"
```

Use a clear commit message following this format:
- `Add prompt: Title` for new prompts
- `Update prompt: Title` for improvements
- `Fix: Issue description` for bug fixes

#### 9. Push to Your Fork

```bash
git push origin add-prompt-your-prompt-name
```

#### 10. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template:

```markdown
## Description
Brief description of your prompt

## Type of Contribution
- [ ] New prompt
- [ ] Improvement to existing prompt
- [ ] Bug fix
- [ ] Documentation

## Checklist
- [ ] I have tested this prompt with at least one AI model
- [ ] I have included all required metadata
- [ ] I have provided examples
- [ ] I have run `npm run index` successfully
- [ ] My prompt follows the style guide
- [ ] I have the right to submit this prompt

## Testing
Describe how you tested this prompt and with which models
```

## Review Process

### What to Expect

1. **Initial Review** (1-3 days)
   - A maintainer will review your PR
   - They may ask questions or request changes
   - Be responsive to feedback

2. **Revision** (if needed)
   - Make requested changes
   - Push updates to your branch
   - The PR will automatically update

3. **Approval**
   - Once approved, your PR will be merged
   - The site will automatically rebuild
   - Your prompt will appear within minutes

### Review Criteria

Reviewers check for:

- ✅ Follows template structure
- ✅ Contains all required metadata
- ✅ Is well-written and clear
- ✅ Includes examples
- ✅ Is tested and works
- ✅ Adds value to the library
- ✅ Doesn't duplicate existing prompts
- ✅ Follows style guide

## Style Guide

### Writing Style

**DO:**
- Use clear, concise language
- Write in second person ("you should...")
- Use active voice
- Break complex instructions into steps
- Use bullet points and lists
- Include code examples in fenced code blocks

**DON'T:**
- Use jargon without explanation
- Write overly long paragraphs
- Use ambiguous pronouns
- Assume too much knowledge
- Use offensive or unprofessional language

### Markdown Formatting

**Headers:**
```markdown
# Main Title (H1) - Only once at the top
## Section (H2)
### Subsection (H3)
```

**Code Blocks:**
```markdown
```python
def example():
    return "Use language identifiers"
\`\`\`
```

**Lists:**
```markdown
- Use hyphens for unordered lists
  - Indent nested items with 2 spaces
1. Use numbers for ordered lists
2. Numbers should be sequential
```

**Emphasis:**
```markdown
**Bold** for important terms
*Italic* for emphasis
`code` for inline code or technical terms
```

**Links:**
```markdown
[Link text](https://example.com)
```

### Metadata Guidelines

**Tags:**
- Use lowercase
- Use hyphens for multi-word tags: `machine-learning`
- Be specific but not too narrow
- Include 3-10 tags
- Include relevant language and technology names

**Categories:**
- Choose 1-3 categories
- Use from the standard list (see README)
- Create new categories sparingly

**Languages:**
- Use official language names
- Lowercase: `python`, `javascript`, `rust`
- Include language variants when relevant: `typescript`, `jsx`

**Models:**
- Use official model names
- Include version numbers: `claude-3.5-sonnet`, not just `claude`
- List models you've tested with

## Examples of Good Prompts

Check out these examples in the repository:

- `react-component-generator.md` - Well-structured with clear variables
- `python-debug-assistant.md` - Comprehensive with examples
- `code-review-checklist.md` - Thorough checklist format

## Getting Help

If you need help:

1. **Check Existing Prompts**: Look at examples in the `prompts/` directory
2. **Read Documentation**: Check README.md and this guide
3. **Ask Questions**: Open a [GitHub Discussion](https://github.com/yourusername/prompt-sharing/discussions)
4. **Report Issues**: For bugs, open an [Issue](https://github.com/yourusername/prompt-sharing/issues)

## Recognition

Contributors are recognized in several ways:

- Your name appears as the author on your prompts
- Your GitHub profile is linked in the prompt metadata
- Regular contributors may be invited to become maintainers
- Top prompts are featured on the homepage

## License

By contributing, you agree that your contributions will be licensed under:

- **Code**: MIT License
- **Prompts**: CC BY 4.0 (Creative Commons Attribution)

This means others can use your prompts with attribution.

---

Thank you for contributing to the Prompt Library! Your prompts help the community write better code with AI assistance. 🎉
