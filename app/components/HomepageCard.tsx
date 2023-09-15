import Image from "next/image";

export default function HomepageCard() {
  return (
    <div className="group relative block h-64 sm:h-80 lg:h-96"
    style={{ position: "fixed", top: 80, left: 5, right: 5 }}
    >
    <a ref={null}>
        <span className="absolute inset-0 border-2 border-dashed border-primary"/>
            <div
            className="relative flex h-full transform items-end border-2 border-accent bg-gradient-to-r from-accent to-primary-100 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            style={{ position: "relative" }}
            >
            <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
            >
                <Image 
                    src="globe-icon.svg"
                    alt="globe-icon"
                    width={100}
                    height={100}
                />

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
