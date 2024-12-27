ALTER TABLE "todo" DROP CONSTRAINT "todo_title_unique";--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "todo" ALTER COLUMN "id" DROP DEFAULT;