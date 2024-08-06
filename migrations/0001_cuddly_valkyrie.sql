CREATE TABLE `student_class` (
	`student_id` text NOT NULL,
	`class_id` text NOT NULL,
	PRIMARY KEY(`class_id`, `student_id`),
	FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON UPDATE no action ON DELETE cascade
);
