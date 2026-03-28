import { config } from "dotenv";
import { defineConfig } from "prisma/config";
import path from "path";

// 루트 .env 파일을 읽음
config({ path: path.resolve(__dirname, "../../.env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
