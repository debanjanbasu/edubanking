export default function HomepageCard() {
  return (
    <div className="group relative block h-64 sm:h-80 lg:h-96"
    style={{ position: "fixed", top: 80, left: 5, right: 5 }}
    >
    <a href="">
        <span className="absolute inset-0 border-2 border-dashed border-primary"/>
            <div
            className="relative flex h-full transform items-end border-2 border-accent bg-gradient-to-r from-accent to-primary-100 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            style={{ position: "relative" }}
            >
            <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Welcome to Project Westpac Edu Banking</h2>
            </div>

            <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
            >
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Welcome to Project Westpac Edu Banking</h3>
            </div>
        </div>
    </a>
    </div>
  )
}