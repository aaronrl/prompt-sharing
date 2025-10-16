---
title: "REST API Endpoint Builder"
tags: ["api", "rest", "backend", "express", "fastapi"]
categories: ["backend", "api-design", "code-generation"]
languages: ["javascript", "typescript", "python"]
models: ["claude-3.5-sonnet", "gpt-4", "claude-3-opus"]
description: "Generate complete REST API endpoints with validation, error handling, authentication, and documentation"
author: "Community"
created: "2024-01-12"
updated: "2024-01-22"
---

# REST API Endpoint Builder

Create a complete REST API endpoint with the following specifications:

## Endpoint Details

- **HTTP Method**: {GET/POST/PUT/DELETE/PATCH}
- **Endpoint Path**: `/api/{resource}/{path}`
- **Framework**: {Express.js/FastAPI/Django/Flask}
- **Purpose**: {describe_what_this_endpoint_does}

## Requirements

### 1. Request Handling

```
Input parameters:
- Path parameters: {list_path_params}
- Query parameters: {list_query_params}
- Request body: {describe_body_structure}
- Headers: {list_required_headers}
```

### 2. Validation

- Validate all input parameters
- Check required fields
- Validate data types and formats
- Implement custom validation rules: {custom_rules}

### 3. Authentication & Authorization

- Authentication method: {JWT/API Key/OAuth/Session/None}
- Required permissions: {list_permissions}
- User role requirements: {list_roles}

### 4. Business Logic

The endpoint should:
1. {step_1}
2. {step_2}
3. {step_3}

### 5. Database Operations

- Database: {PostgreSQL/MongoDB/MySQL/SQLite}
- Models involved: {list_models}
- Operations: {CREATE/READ/UPDATE/DELETE}
- Transactions: {yes/no}

### 6. Response Format

Success response (200/201):
```json
{
  "describe": "expected response structure"
}
```

Error responses:
- 400: Bad Request (invalid input)
- 401: Unauthorized (missing/invalid auth)
- 403: Forbidden (insufficient permissions)
- 404: Not Found (resource doesn't exist)
- 409: Conflict (duplicate resource)
- 500: Internal Server Error

### 7. Additional Features

- [ ] Rate limiting
- [ ] Caching
- [ ] Pagination (for list endpoints)
- [ ] Filtering and sorting
- [ ] Logging
- [ ] Error tracking
- [ ] API documentation (OpenAPI/Swagger)
- [ ] Unit tests
- [ ] Integration tests

## Please Provide

1. **Complete endpoint implementation**
   - Route handler with proper structure
   - Input validation middleware/decorators
   - Error handling
   - Response formatting

2. **Documentation**
   - API documentation comments
   - OpenAPI/Swagger spec (if applicable)
   - Usage examples

3. **Tests**
   - Unit tests for the handler
   - Test cases for success scenarios
   - Test cases for error scenarios
   - Mock data setup

4. **Security Considerations**
   - Input sanitization
   - SQL injection prevention
   - XSS protection
   - Rate limiting implementation

---

## Example Usage

**Request:**
```
Create a POST endpoint at /api/users that:
- Accepts email, password, and name in the request body
- Validates email format and password strength
- Hashes the password
- Creates a new user in PostgreSQL
- Returns the created user (without password)
- Requires no authentication (public signup endpoint)
```

**Expected Output:**
The AI would generate:
1. Complete Express.js or FastAPI endpoint
2. Validation schema (Joi/Pydantic)
3. Password hashing logic
4. Database model and query
5. Error handling for duplicates
6. Response formatting
7. OpenAPI documentation
8. Unit and integration tests
