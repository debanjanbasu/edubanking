import HelpLink from "./HelpLink";

export default function HelpCard() {
  return (
    <div>
      <section className="bg-gray-50 h-screen flex justify-center items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            🤓Need help with something❔
            <strong className="font-extrabold text-primary sm:block">
              Click the <q>Contact Us</q> button below
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed text-secondary">
            For more infomation about Westpac, click <q>About Us</q> 😊
          </p>
          <HelpLink />
        </div>
      </section>
    </div>
  );
}
