import { z } from "zod";

const emailSchema = z.string()
.min(1, "email is required*")
.email("Invalid email format");

const userNameSchema =  z.string()
.min(1, "username is required*")
.regex(/^[A-Za-z ]{2,20}$/i, "username cannot contain special chars or numbers");

const passwordSchema = z.string()
.min(1, "enter your password*")
.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{}\|;:'",.<>?])(.{8,})$/, "pw didnt match");

export const signupSchema = z.object({
    name:userNameSchema,
    email:emailSchema,
    password:passwordSchema
});

export const loginSchema = z.object({
    email:emailSchema,
    password:passwordSchema
});
