### First prompt
Write me a prompt to create an app that runs inside Kubernetes and gives users the ability to share AI coding assistant prompts.  


### Response prompt
```
# Prompt: Build a Kubernetes-Native AI Prompt Sharing Platform

Create a cloud-native application that allows users to share, discover, and collaborate on AI coding assistant prompts. The application should be designed to run in Kubernetes with the following requirements:

## Core Functionality

- User authentication and authorization (support OAuth providers like GitHub, Google)
- Create, edit, and delete prompts with syntax highlighting
- Browse and search prompts by tags, categories, programming languages, and popularity
- Upvote/downvote system for community curation
- Comment and discussion threads on prompts
- Fork/remix functionality to build on existing prompts
- Version history for prompt iterations
- Collections/playlists to organize related prompts
- User profiles with contribution history

## Technical Architecture

- **Frontend**: Use the Python module NiceGUI
- **Backend API**: RESTful API using Python and FastAPI
- **Database**: PostgreSQL for relational data (users, prompts, metadata)
- **Cache Layer**: Redis for session management and frequently accessed data
- **Search**: Elasticsearch or OpenSearch for full-text prompt search
- **Storage**: Object storage (S3-compatible) for any attachments or exports

## Kubernetes Components

- Deployment manifests for all services (frontend, backend, database, cache, search)
- ConfigMaps for environment-specific configuration
- Secrets for sensitive data (API keys, database credentials)
- Services for internal and external networking
- Ingress controller configuration with TLS/SSL
- Horizontal Pod Autoscaler (HPA) for auto-scaling based on load
- Persistent Volume Claims for stateful services
- Health checks (liveness and readiness probes)
- Resource limits and requests for all pods

## DevOps & Observability

- Dockerfile for containerizing each service
- Helm charts for easy deployment and configuration management
- CI/CD pipeline configuration (GitHub Actions or GitLab CI)
- Logging with structured logs (JSON format)
- Monitoring with Prometheus metrics endpoints
- Distributed tracing support (OpenTelemetry)
- Grafana dashboards for visualization

## Security Requirements

- RBAC policies within Kubernetes
- Network policies to restrict pod-to-pod communication
- Use of non-root containers
- Security scanning for container images
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Secure secret management (consider using Sealed Secrets or External Secrets Operator)

## Nice-to-Have Features

- API for programmatic access
- Export prompts in various formats (JSON, Markdown)
- Import prompts from files or URLs
- Browser extension for quick prompt saving
- AI-powered prompt suggestions and improvements
- Analytics dashboard for prompt creators
- Notification system for comments and updates
- Multi-language support (i18n)

## Deliverables

1. Complete source code with clear project structure
2. Comprehensive README with setup instructions
3. Kubernetes manifests in a `/k8s` directory
4. Helm chart in a `/helm` directory
5. Docker Compose file for local development
6. Database migration scripts
7. API documentation (OpenAPI/Swagger)
8. Example prompts for seeding the database

## Development Approach

- Use environment variables for all configuration
- Follow 12-factor app principles
- Implement proper error handling and logging
- Write unit and integration tests
- Use TypeScript or type hints for type safety
- Follow REST API best practices
- Implement pagination for list endpoints
- Use database migrations for schema management

---

The application should be production-ready, scalable, and follow Kubernetes best practices for cloud-native applications.
```

### Second prompt

Create a prompt that will build a website that allows users to submit prompts to a GitHub repo to share AI coding assistant prompts.  The repo should build a static site that list all available prompts in a searchable way.  Users can submit prompts to the repo and upon merge to main the site should be rebuilt.  When rebuilding the site, all prompts should be indexed for searching using an embeddable search engine.  

When users supply prompts, they should be able to embed metadata for the search index to use.  The metadata should include things like tags, categories, programming languages, target AI model(s), and other relevant information.  When viewing a prompt, the metadata should be displayed in a sidebar and a link back to the original file in the repo should be provided.

Every search should render a prompt card with a title for the prompt text, a truncated preview of the prompt text with syntax highlighting, a relevance score, metadata, and a link to the original file.  Metadata should be shown in pillboxes and the card should only display the first 3 items of metadata and then show a dropdown to show all metadata.  When a prompt is clicked, the page should navigate to the original file in the repo.  When a metadata pillbox is clicked, the user's search query should be updated to include the selected metadata and the search should be rerun.