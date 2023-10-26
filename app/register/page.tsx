"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio").max(100),
  lastname: z.string().min(1, "El apellido es obligatorio").max(100),
  citizenId: z.string().min(1, "La cédula es obligatoria").max(100),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Correo electrónico inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  address: z.string().min(1, "La dirección es obligatoria").max(100),
  phone: z.string().min(1, "El teléfono es obligatorio").max(15),
});

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      lastname: "",
      citizenId: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        lastname: values.lastname,
        citizenId: values.citizenId,
        email: values.email,
        password: values.password,
        address: values.address,
        phone: values.phone,
      }),
    });
    if (response.ok) {
      router.push("/");
    } else {
      console.error("Registration failed");
    }
  };

  return (
    <main>
      <h2> USER REGISTRATION FORM</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input {...form.register("name")} placeholder="Name" />
        <input {...form.register("lastname")} placeholder="Last Name" />
        <input {...form.register("citizenId")} placeholder="Citizen ID" />
        <input {...form.register("email")} placeholder="Email" />
        <input {...form.register("password")} placeholder="Password" />
        <input {...form.register("address")} placeholder="Address" />
        <input {...form.register("phone")} placeholder="Phone" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default SignUpForm;
