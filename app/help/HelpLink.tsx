import Link from "next/link";

export default function HelpLink() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto" 
      href="https://www.westpac.com.au/personal-banking/online-banking/making-the-most/red-web-chat/">Contact Us</Link>{" "}

      <Link className="block w-full rounded bg-accent px-12 py-3 text-sm font-medium text-secondary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto" 
      href="https://www.westpac.com.au/about-westpac/westpac-group/company-overview/">About Us😎</Link>{" "}
   </div>
  );
}
