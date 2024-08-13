import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignupPage = () => {
    return (
        <main className="flex-center h-screen w-full">
            <SignUp />
        </main>
    );
};

export default SignupPage;
