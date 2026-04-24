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
        ENTRA[Microsoft Entra ID]
    end

    subgraph Authentication_Policy
        AUTH[SSO / OAuth2 / OIDC]
        MFA[MFA]
        CA[Conditional Access]
    end

    subgraph Authorization
        RBAC[Role-Based Access Control]
        APPROLE[Application Roles]
        DVROLE[Dataverse Security Roles]
    end

    subgraph Data_Layer
        DV[Dataverse]
        RLS[Row/Record-Level Security]
        FLS[Field-Level Security]
    end

    subgraph Governance
        DLP[DLP Policies]
        ENV[Environment Strategy]
        ALM[ALM Pipelines]
    end

    subgraph Audit_Compliance
        AUDIT[Audit Logs]
        TRACE[Traceability]
        MON[Monitoring & Logging]
    end

    %% Identity → Authentication
    ENTRA --> AUTH
    AUTH --> MFA
    MFA --> CA

    %% Authentication → Authorization
    CA --> RBAC

    %% Authorization → Application
    RBAC --> APPROLE
    APPROLE --> DVROLE

    %% Authorization → Data
    DVROLE --> DV
    DV --> RLS
    DV --> FLS

    %% Data → Audit
    DV --> AUDIT
    AUDIT --> TRACE
    DV --> MON

    %% Data → Governance
    DV --> DLP
    DLP --> ENV
    ENV --> ALM
```
