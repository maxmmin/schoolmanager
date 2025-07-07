## Test task for BRDO

### What's done 
- Schools creation
- Server-side schools filtering via Spring Data Specification API 
- Server-side schools pagination
- Schools deactivation
- React routing
- Docker configuration with NGINX as gateway, no direct API exposure required
- Database migrations via Flyway

### How to launch
- cp env.template .env
- docker compose up -d

<small>You can edit .env to change some env properties such as database credentials etc</small>