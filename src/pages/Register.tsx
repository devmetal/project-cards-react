export default function Register() {
  return (
    <main className="flex justify-center">
      <div className="px-4 py-2 m-8 w-1/3 bg-ui-card-bg shadow-lg rounded-md">
        <h1 className="mb-2 font-roboto-condensed underline font-medium text-white text-2xl m-0 p-0">
          Register
        </h1>
        <form className="flex flex-col space-y-4 w-full">
          <label htmlFor="email" className="flex flex-col">
            <div className="font-roboto font-bold">Email:</div>
            <input
              className="font-roboto text-lg p-1"
              type="email"
              id="email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            <div className="font-roboto font-bold">Password:</div>
            <input
              className="font-roboto text-lg p-1"
              type="password"
              id="password"
            />
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
      </div>
    </main>
  );
}
