import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastname, citizenId, email, password, address, phone } = body;

    // check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists already exists",
        },
        { status: 409 }
      );
    }

    // check if citizenId already exists
    const existingUserByCitizenId = await prisma.user.findUnique({
      where: { citizenId: citizenId },
    });
    if (existingUserByCitizenId) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this citizen ID already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        lastname,
        citizenId,
        email,
        password: hashedPassword,
        address,
        phone,
      },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
