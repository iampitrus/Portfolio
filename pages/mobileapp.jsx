import Link from "next/link";

function MobileApp() {
  return (
    <section className="bg-darkBlue h-screen nav-margin">
      <div className="container-xy text-white flex justify-center">
        <div className="border-lightBlue rounded-2xl border-2 p-6 items-center flex flex-col">
          <h1 className="text-4xl text-center sm:text-left mb-8">Mobile App</h1>
          <p>This mobile app is not yet published</p>
          <Link href="/projects">
            <div className="rounded-2xl bg-lightBlue mt-6 py-2 px-6 cursor-pointer">
              Go back
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
