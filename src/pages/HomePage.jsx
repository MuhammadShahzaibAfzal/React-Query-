const HomePage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900  capitalize text-slate-800"
              style={{ lineHeight: "1.5" }}
            >
              Powerful asynchronous state management, server state management
              tool
            </h1>
            <p className="mb-8 leading-relaxed"></p>
            <div className="flex justify-center">
              <a
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                href="https://tanstack.com/query/latest"
              >
                Read Docs
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*NvNjVbjTCT_qqloPnR098w.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
