# Data & Security Architecture

## Secure by design

## Data architecture

- Transactional vs reference data
- Data lifecycle management
- Data ownership boundaries

## Security

- Role-based access control
- Data segmentation
- Least privilege principle

## Compliance and audit

- Audit trails
- Data traceability
- Regulatory alignment

```mermaid
flowchart TD
    subgraph Identity
        AAD[Azure AD]
    end

    subgraph Access Control
        RBAC[Role-Based Access]
        SEC[Security Roles]
    end

    subgraph Data Layer
        DV[Dataverse]
        AUDIT[Audit Logs]
    end

    subgraph Governance
        DLP[DLP Policies]
        ENV[Environment Strategy]
        ALM[ALM Pipelines]
    end

    subgraph Compliance
        TRACE[Traceability]
        LOG[Monitoring & Logging]
    end

    AAD --> RBAC
    RBAC --> SEC
    SEC --> DV

    DV --> AUDIT
    AUDIT --> TRACE

    DV --> DLP
    DLP --> ENV
    ENV --> ALM

    DV --> LOG
```
