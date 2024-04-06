CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(150),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
