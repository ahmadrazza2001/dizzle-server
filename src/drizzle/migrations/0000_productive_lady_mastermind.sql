CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(20) NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "user_username_unique" UNIQUE("username")
);
