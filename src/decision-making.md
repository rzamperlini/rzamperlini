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
flowchart LR

    subgraph Problem_Space
        PROB[Business Problem]
        REQ[Requirements & Constraints]
    end

    subgraph Analysis
        OPT[Options Analysis]
        TRADE[Trade-offs Evaluation]
    end

    subgraph Decision
        DEC[Architecture Decision]
    end

    subgraph Governance
        ADR[Architecture Decision Record (ADR)]
        REPO[ADR Repository / Decision Log]
    end

    subgraph Implementation
        ARCH[Solution Architecture]
        BUILD[Implementation]
    end

    subgraph Feedback
        MON[Monitoring & Feedback]
        REVIEW[Architecture Review]
    end

    %% Flow
    PROB --> REQ
    REQ --> OPT
    OPT --> TRADE
    TRADE --> DEC

    DEC --> ADR
    ADR --> REPO

    ADR --> ARCH
    ARCH --> BUILD

    BUILD --> MON
    MON --> REVIEW
    REVIEW --> ADR
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
