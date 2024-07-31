import React from 'react'
import {useNavigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
  return (
    <>
      <section>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
      <div class="rounded-3xl m-4 p-4 absolute inset-0">
        <img
          class=" h-full w-full rounded-md object-cover object-top"
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1742&amp;q=80"
        alt=""
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div class="relative">
        <div class="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
          <h3 class="text-4xl font-bold text-white">
            Now you dont have to rely on your designer to create a new page
          </h3>
          <ul class="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <li class="flex items-center space-x-3">
              <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg
                  class="h-3.5 w-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="text-lg font-medium text-white">
                {" "}
                Commercial License{" "}
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg
                  class="h-3.5 w-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="text-lg font-medium text-white">
                {" "}
                Unlimited Exports{" "}
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg
                  class="h-3.5 w-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="text-lg font-medium text-white">
                {" "}
                120+ Coded Blocks{" "}
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                <svg
                  class="h-3.5 w-3.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="text-lg font-medium text-white">
                {" "}
                Design Files Included{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign up
        </h2>
        <p class="mt-2 text-base text-gray-600">
          Already have an account?{" "}
          <a
            href="#"
            title=""
            onClick={() => navigate("/login")}
            class="font-medium text-black transition-all duration-200 hover:underline"
          >
            Sign In
          </a>
        </p>
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
            <div>
              <label for="name" class="text-base font-medium text-gray-900">
                {" "}
                Full Name{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                />
              </div>
            </div>
            <div>
              <label for="email" class="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  id="password"
                />
              </div>
            </div>
            <div>
              <button
               onClick={() => navigate("/profile")}
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create Account{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div class="mt-3 space-y-3">
          <button
            type="button"
            class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign up with Google
          </button>
          <button
            type="button"
            class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-[#2563EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </span>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Register
