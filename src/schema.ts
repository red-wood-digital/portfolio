import { z } from "zod";

const phoneNumberRegex = new RegExp(/^\+?[0-9\s-()]+$/);

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be min 2 characters")
    .max(50, "Name must be max 50 characters"),
  email: z.string().trim().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .trim()
    .regex(phoneNumberRegex, "Invalid phone number"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be min 10 characters")
    .max(300, "Message must be max 300 characters"),
});

export type ContactFromValues = z.infer<typeof contactFormSchema>;
