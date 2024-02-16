"use server";
import { createClient } from "@/lib/supabase/supabaseServer";
import { registerValidator } from "@/validations/authSchema";
import vine, { errors } from "@vinejs/vine";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export async function registerAction(prevState: any, formdata: FormData) {
  const supabase = createClient(cookies());
  try {
    const data = {
      name: formdata.get("name"),
      username: formdata.get("username"),
      email: formdata.get("email"),
      password: formdata.get("password"),
      password_confirmation: formdata.get("password_confirmation"),
    };
    const payload = await registerValidator.validate(data);

    // *Check user name if exist
    const { data: userData, error } = await supabase
      .from("users")
      .select("id")
      .eq("username", payload.username);

    if (userData && userData.length > 0) {
      return {
        status: 400,
        errors: {
          username: "Username is already taken.please use another username",
        },
      };
    }

    // * Now signup the user
    const { error: signupErr } = await supabase.auth.signUp({
      email: payload.email,
      password: payload.password,
      options: {
        data: {
          username: payload.username,
          name: payload.name,
        },
      },
    });

    // * Check if error exits
    if (signupErr) {
      console.log("The error is", error);
      return { status: 400, errors: { email: signupErr.message } };
    }

    await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return { status: 400, errors: error.messages };
    }
  }

  return redirect("/");
}
