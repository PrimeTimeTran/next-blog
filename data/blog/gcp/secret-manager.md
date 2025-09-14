---
draft: false
date: '2025-09-15'
title: 'System Design: Google Cloud Secret Manager'
summary: 'Learn what Google Cloud Secret Manager is, its benefits, and how to securely manage secrets for your applications in GCP.'
tags: ['system design', 'gcp', 'secret manager', 'security', 'devops']
---

# Introduction

Managing sensitive information like API keys, passwords, and certificates is a critical part of building secure cloud applications. Google Cloud Secret Manager is a fully managed service that helps you store, manage, and access secrets securely in Google Cloud Platform (GCP).

# What is Secret Manager?

Secret Manager provides a central place to store secrets and control access using IAM policies. It allows you to version secrets, audit access, and integrate with other GCP services, making secret management simple and secure.

# Benefits

- **Secure Storage:** Secrets are encrypted at rest and in transit using Google-managed keys or customer-managed encryption keys (CMEK).
- **Access Control:** Use IAM policies to control who can view, update, or manage secrets.
- **Versioning:** Manage multiple versions of a secret, enabling safe rotation and rollback.
- **Audit Logging:** Every access and change is logged in Cloud Audit Logs for monitoring and compliance.
- **Integration:** Easily inject secrets into Cloud Run, Compute Engine, GKE, and other GCP services.
- **Automated Rotation:** Supports automated secret rotation workflows for enhanced security.

# Common Use Cases

- Storing API keys and credentials for third-party services.
- Managing database passwords and connection strings.
- Securing cryptographic keys and certificates.
- Injecting secrets into containerized applications at deployment time.
- Rotating secrets without redeploying applications.

# Example: Storing and Accessing a Secret

## Storing a Secret

```sh
gcloud secrets create my-secret --replication-policy="automatic"
gcloud secrets versions add my-secret --data-file="my-secret.txt"
```

## Example cloudbuild.yaml Integration

With this setup, your Cloud Run service will have access to secrets as environment variables, and you can rotate secrets without redeploying your containers.

```yaml
steps:
  # build step...
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk:slim'
    id: Deploy
    entrypoint: gcloud
    args:
      - run
      - services
      - update
      - $_SERVICE_NAME
      - '--platform=managed'
      - >-
        --image=$_AR_HOSTNAME/$_AR_PROJECT_ID/$_AR_REPOSITORY/$REPO_NAME/$_SERVICE_NAME:$COMMIT_SHA
      - >-
        --labels=managed-by=gcp-cloud-build-deploy-cloud-run,commit-sha=$COMMIT_SHA,gcb-build-id=$BUILD_ID,gcb-trigger-id=$_TRIGGER_ID
      - '--region=$_DEPLOY_REGION'
      - '--quiet'
      - '--update-secrets=AUTH_SECRET_KEY=dev-AUTH_SECRET_KEY:latest' # Inject secret as runtime ENV var
      - '--update-secrets=OPENAI_API_KEY=dev-OPENAI_API_KEY:latest' # Inject secret as runtime ENV var
      - '--update-secrets=PINECONE_API_KEY=dev-PINECONE_API_KEY:latest' # Inject secret as runtime ENV var
      - '--update-secrets=POSTGRES_PASSWORD=dev-POSTGRES_PASSWORD:latest' # Inject secret as runtime ENV var
      - '--update-secrets=SENDGRID_API_KEY=dev-SENDGRID_API_KEY:latest' # Inject secret as runtime ENV var
images:
  # image definition...
options:
  # options...
tags:
  # tags...
```

## Secrets Page

<img src="/static/images/secret-manager.png" alt="preview" />

## Cloud Run Service with Environment Vars

<img src="/static/images/secret-manager.png" alt="preview" />

# Conclusion

Google Cloud Secret Manager provides a secure, scalable, and integrated solution for managing secrets in cloud applications. By centralizing secret storage and access, you can improve your security posture, simplify secret rotation, and ensure compliance with best practices and regulatory requirements.
