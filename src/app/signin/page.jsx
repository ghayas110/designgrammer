"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { message } from "antd";
import Link from "next/link";
import Image from "next/image";
// import {baseUrl, api} from "../../../constant";
const SignIn= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center h-screen">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <Link className="mb-5.5 inline-block" href="/">
              <Image
                  className=" dark:block"
                  src={"/images/logos.png"}
                  alt="Logo"
                  width={376}
                  height={32}
                />
              </Link>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link className="mb-5.5 inline-block xl:hidden" href="/">
            <Image
                  className=" dark:block"
                  src={"/images/logos.png"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-black sm:text-title-xl2">
                Sign In to DesignGrammar
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-black">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-black">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-black dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value={loading ? "Signing In..." : "Sign In"}
                    disabled={loading}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-blue-500 p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
