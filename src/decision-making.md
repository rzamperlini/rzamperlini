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

