import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { registerWithCreds } from "@/firebase/auth";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    const user = await registerWithCreds(email, password);

    if (!user) {
      setAuthError("Error during registration");
      return;
    }

    navigate("/");
  };

  return (
    <main className="flex justify-center">
      <div className="px-4 py-2 m-8 w-1/2 bg-ui-card-bg shadow-lg rounded-md">
        <h1 className="mb-2 font-roboto-condensed underline font-medium text-white text-2xl m-0 p-0">
          Register
        </h1>
        {authError && <h1>{authError}</h1>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full"
        >
          <label htmlFor="email" className="flex flex-col">
            <div className="font-roboto font-bold">Email:</div>
            <input
              {...register("email", { required: true, maxLength: 255 })}
              className="font-roboto text-lg p-1"
              type="email"
              id="email"
            />
            {errors.email?.type === "required" && (
              <div>Email field is required</div>
            )}
            {errors.email?.type === "maxLength" && <div>Invalid field</div>}
          </label>
          <label htmlFor="password" className="flex flex-col">
            <div className="font-roboto font-bold">Password:</div>
            <input
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 255,
              })}
              className="font-roboto text-lg p-1"
              type="password"
              id="password"
            />
            {errors.password?.type === "required" && (
              <div>Password field is required</div>
            )}
            {errors.password?.type === "minLength" && (
              <div>Password has to be at least 4 character long</div>
            )}
            {errors.password?.type === "maxLength" && <div>Invalid field</div>}
          </label>
          <div className="self-end">
            <button
              type="submit"
              className="text-white font-roboto font-bold p-2 rounded-md shadow-md bg-card-icon transition-all hover:shadow cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
        <p>
          Do you have an account?{" "}
          <Link to="/login" className="text-white underline">
            {" "}
            Login here{" "}
          </Link>
        </p>
      </div>
    </main>
  );
}
