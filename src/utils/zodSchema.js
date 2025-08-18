import z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export const signInSchema = signUpSchema.omit({ name: true });

export const createCourseSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name is required and at least 5 characters" }),
  categoryId: z.string().min(5, { message: "Please select a category" }),
  tagline: z
    .string()
    .min(5, { message: "Tagline is required and at least 5 characters" }),
  description: z
    .string()
    .min(10, { message: "Description is required and at least 10 characters" }),
  thumbnail: z
    .any()
    .refine((file) => file?.name, { message: "Thumbnail is required" }),
});
export const updateCourseSchema = createCourseSchema.partial({
  thumbnail: true,
});
