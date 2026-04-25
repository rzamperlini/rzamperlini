# Architecture Decision Making

Every architecture decision involves trade-offs.

I evaluate:

- Business constraints
- Technical limitations
- Long-term impact
- Risks and scalability
- Operational sustainability

I document key decisions and ensure alignment across stakeholders before implementation.

## Decision framing example

```mermaid
flowchart TD
    N[Business Need] --> C[Constraints]
    C --> O[Options]
    O --> R[Risk Evaluation]
    R --> D[Decision]
    D --> A[Architecture Decision Record (ADR)]
    A --> I[Implementation Guidance]
```

# Architecture Decision Record (ADR) - Example
Use Azure Functions as Integration Adapter for Legacy Systems

## Status
Accepted

## Context
Legacy systems expose SOAP services and SQL procedures.
Modern applications require REST-based integration and scalability.

## Decision
Introduce Azure Functions as a serverless adapter layer between REST APIs and legacy systems.

## Options Considered
1. Direct API to legacy systems
2. Enterprise Service Bus (ESB)
3. Azure Functions (selected)

## Rationale
Azure Functions provides:
- Low operational overhead
- Native integration with Azure services
- Flexible protocol transformation

## Consequences

### Positive
- Loose coupling between systems
- Improved scalability
- Easier modernization path

### Negative
- Requires monitoring and retry handling
- Adds an additional layer

## Impacted Components
- Power Automate
- Azure Functions
- Legacy Systems

## Compliance & Security Considerations
- Enforced via Microsoft Entra ID
- API secured with OAuth2 tokens

## Date
2026-04-25

## Author
Rodrigo Zamperlini
