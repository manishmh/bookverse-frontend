import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href={"/login"}>
      <button className="px-4 md:px-6 border py-1.5 font-semibold text-muted-light border-[#939DB6] bg-[#0c0e11] hover:bg-transparent transition-colors duration-200">
        Login
      </button>
    </Link>
  );
};

export default LoginButton;
