ALTER TABLE "todo" DROP CONSTRAINT "todo_id_unique";--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();