---
title: "Python Debug Assistant"
tags: ["python", "debugging", "error-handling", "troubleshooting"]
categories: ["debugging", "code-review"]
languages: ["python"]
models: ["claude-3.5-sonnet", "gpt-4", "gemini-pro", "claude-3-opus"]
description: "Systematically debug Python code by analyzing errors, suggesting fixes, and explaining root causes"
author: "Community"
created: "2024-01-10"
updated: "2024-01-18"
---

# Python Debug Assistant

Help me debug the following Python code by analyzing the error, identifying the root cause, and suggesting solutions.

## Code to Debug

```python
{paste_your_code_here}
```

## Error Message

```
{paste_error_traceback_here}
```

## Context

- Python version: {python_version}
- Environment: {environment_info}
- What I'm trying to accomplish: {goal_description}
- What I've already tried: {attempted_solutions}

## Please Provide

1. **Error Analysis**
   - Explain what the error message means in plain English
   - Identify the exact line(s) causing the issue
   - Explain why this error is occurring

2. **Root Cause**
   - What is the underlying problem?
   - Are there any misconceptions in my approach?
   - Are there related issues that might cause problems later?

3. **Solution**
   - Provide the corrected code
   - Explain what changed and why
   - Highlight the specific fixes with comments

4. **Best Practices**
   - Suggest improvements to prevent similar issues
   - Recommend better error handling
   - Point out any code smells or anti-patterns

5. **Testing Recommendations**
   - Suggest test cases to verify the fix
   - Recommend edge cases to consider
   - Provide example assertions

## Additional Help (Optional)

If applicable, also suggest:
- Performance improvements
- More Pythonic ways to write the code
- Relevant Python stdlib modules that could help
- Type hints to prevent future errors

---

## Example Usage

### Input

**Code:**
```python
def calculate_average(numbers):
    total = sum(numbers)
    return total / len(numbers)

result = calculate_average([])
print(result)
```

**Error:**
```
ZeroDivisionError: division by zero
```

**Context:**
- Python version: 3.11
- Trying to calculate the average of a list of numbers
- Haven't tried anything yet

### Expected Output

The AI would then provide:
1. Explanation that dividing by zero occurs when the list is empty
2. Root cause: no validation for empty input
3. Fixed code with error handling
4. Best practices for defensive programming
5. Test cases for empty lists, single items, and multiple items
