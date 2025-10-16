---
title: "Comprehensive Code Review Assistant"
tags: ["code-review", "best-practices", "quality", "refactoring"]
categories: ["code-review", "quality-assurance"]
languages: ["javascript", "typescript", "python", "java", "go", "rust"]
models: ["claude-3.5-sonnet", "gpt-4", "claude-3-opus"]
description: "Perform thorough code reviews checking for bugs, security issues, performance, maintainability, and best practices"
author: "Community"
created: "2024-01-08"
updated: "2024-01-25"
---

# Comprehensive Code Review Assistant

Please review the following code thoroughly and provide detailed feedback.

## Code to Review

```{language}
{paste_code_here}
```

## Context

- **Language**: {programming_language}
- **Framework/Library**: {framework_name}
- **Purpose**: {what_this_code_does}
- **Target Environment**: {production/development/testing}
- **Performance Requirements**: {latency/throughput requirements}

## Review Checklist

Please evaluate the code against these criteria:

### 1. Correctness & Functionality
- Does the code do what it's supposed to do?
- Are there any logical errors or bugs?
- Are edge cases handled properly?
- Are there any potential runtime errors?

### 2. Code Quality & Readability
- Is the code easy to understand?
- Are variable and function names clear and descriptive?
- Is the code properly formatted and consistent?
- Are there appropriate comments explaining complex logic?
- Is the code DRY (Don't Repeat Yourself)?

### 3. Performance
- Are there any performance bottlenecks?
- Could any operations be optimized?
- Is memory usage efficient?
- Are there unnecessary computations?
- Are expensive operations cached when appropriate?

### 4. Security
- Are there any security vulnerabilities?
- Is input properly validated and sanitized?
- Are there SQL injection or XSS risks?
- Are secrets/credentials properly handled?
- Is authentication/authorization implemented correctly?

### 5. Error Handling
- Are errors caught and handled appropriately?
- Are error messages helpful and informative?
- Is there proper logging?
- Are resources cleaned up in error scenarios?
- Are error types appropriate?

### 6. Testing
- Is the code testable?
- Are there unit tests?
- Are edge cases covered in tests?
- Are mocks/stubs used appropriately?
- Is test coverage adequate?

### 7. Maintainability
- Is the code modular and well-organized?
- Is there appropriate separation of concerns?
- Are dependencies minimal and well-managed?
- Is the code extensible for future changes?
- Is there technical debt?

### 8. Best Practices
- Does the code follow language idioms?
- Are design patterns used appropriately?
- Is the code following SOLID principles?
- Are there any code smells or anti-patterns?
- Does it follow the project's style guide?

### 9. Documentation
- Is the code adequately documented?
- Are function/method signatures clear?
- Is there API documentation if needed?
- Are complex algorithms explained?
- Are assumptions documented?

### 10. Dependencies & Compatibility
- Are dependencies up to date?
- Are there any deprecated APIs being used?
- Is version compatibility considered?
- Are there any licensing issues?

## Please Provide

1. **Summary**
   - Overall assessment (Good/Needs Work/Major Issues)
   - Top 3 things done well
   - Top 3 things that need improvement

2. **Detailed Findings**
   - List issues by severity (Critical/High/Medium/Low)
   - Explain each issue clearly
   - Provide specific line numbers if applicable

3. **Suggested Improvements**
   - Provide refactored code snippets
   - Explain why each change improves the code
   - Prioritize recommendations

4. **Security & Performance Notes**
   - Highlight any security concerns
   - Note performance implications
   - Suggest optimizations with benchmarks if relevant

5. **Learning Opportunities**
   - Explain relevant concepts or patterns
   - Link to documentation or resources
   - Suggest alternative approaches

---

## Example Usage

**Input:**
```python
def get_user_data(user_id):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query)
    result = cursor.fetchone()
    return result
```

**Expected Output:**
The AI would identify:
1. **Critical**: SQL injection vulnerability
2. **High**: Resource leak (connection not closed)
3. **Medium**: No error handling
4. **Low**: No type hints

Then provide a refactored version with:
- Parameterized queries
- Context manager for connection
- Try-except blocks
- Type annotations
- Better return value handling
