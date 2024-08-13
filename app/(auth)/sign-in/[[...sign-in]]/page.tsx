import { SignIn } from "@clerk/nextjs";
import React from "react";

const SigninPage = () => {
    return (
        <main className="flex-center h-screen w-full">
            <SignIn />
        </main>
    );
};

export default SigninPage;
