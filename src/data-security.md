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

    subgraph Identity_Provider
        ENTRA[Microsoft Entra ID]
        USERS[Users / Groups / Service Principals]
    end

    subgraph Authentication
        SSO[Single Sign-On]
        OIDC[OpenID Connect]
        MFA[MFA]
        CA[Conditional Access]
        IDTOKEN[ID Token]
    end

    subgraph Authorization
        OAUTH[OAuth 2.0]
        SCOPES[Scopes / API Permissions]
        ACCESSTOKEN[Access Token]
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

    USERS --> ENTRA

    %% Authentication
    ENTRA --> SSO
    SSO --> OIDC
    OIDC --> CA
    CA --> MFA
    MFA --> IDTOKEN

    %% Authorization
    IDTOKEN --> OAUTH
    OAUTH --> SCOPES
    SCOPES --> ACCESSTOKEN
    ACCESSTOKEN --> RBAC
    RBAC --> APPROLE
    APPROLE --> DVROLE

    %% Data access
    DVROLE --> DV
    DV --> RLS
    DV --> FLS

    %% Audit
    DV --> AUDIT
    AUDIT --> TRACE
    DV --> MON

    %% Governance
    DV --> DLP
    DLP --> ENV
    ENV --> ALM
```

## Traceability - Example
A single unique identifier per transaction (Correlation ID)
- generated once
- propagated throughout the system
- logged at every stage

```mermaid
flowchart LR

    APP[Power Apps]
    DV[Dataverse]
    FLOW[Power Automate]
    API[Azure Function / Logic App]
    LEG[Legacy System]

    LOG[(Central Logs)]
    TRACE[(Traceability Store)]

    APP --> DV
    DV --> FLOW
    FLOW --> API
    API --> LEG

    APP --> LOG
    DV --> LOG
    FLOW --> LOG
    API --> LOG

    APP --> TRACE
    FLOW --> TRACE
    API --> TRACE
```
