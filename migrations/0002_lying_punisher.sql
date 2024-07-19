CREATE TABLE `teacher` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`emailVerified` integer,
	`password` text NOT NULL,
	`image` text
);
