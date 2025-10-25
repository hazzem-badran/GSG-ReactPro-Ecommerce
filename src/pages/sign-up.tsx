import AuthHeader from "@/components/auth/AuthHeader";
import SignupForm from "@/components/auth/signup-from";
import Container from "@/components/layout/Container";

const SignUp = () => {
  return (
    <div className="min-h-[60%]  flex flex-col lg:flex-row items-center bg-white pt-20 pb-28">
      <div className="hidden md:block md:w-1/2 lg:w-1/2 xl:w-[55%]">
        <img
          src="src/assets/images/sala.png"
          alt="sala"
          className="h-48 md:h-64 lg:h-screen w-full object-cover object-center"
        />
      </div>

      <Container className="flex-1 flex items-center justify-center py-6 md:py-10 px-4 lg:px-8">
        <div className="w-full max-w-md lg:max-w-lg space-y-2 md:space-y-6 lg:space-y-8">
          <AuthHeader
            title="Create an account"
            subtitle="Enter your details below"
          />

          <SignupForm />

          <div className="text-center text-sm sm:text-base">
            <span className="text-gray-600">Already have account? </span>
            <a
              href="/login"
              className="font-medium underline hover:text-gray-900 transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
