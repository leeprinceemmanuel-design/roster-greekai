// apps/api/src/health.controller.ts
import { Controller, Get } from "@nestjs/common";

// GET /health tells us the API is running.
@Controller("health")
export class HealthController {
  @Get()
  check() {
    return { status: "ok", service: "roster-api" };
  }
}
