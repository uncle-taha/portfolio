import Button from "../components/Button";

function Footer({ darkMode }) {
  return (
    <div>
      <section
        className={`py-10 sm:pt-16 lg:pt-24 rounded-t-[50px] ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-7xl px-4 mx-auto sm:px-6 md:px-18 lg:px-18">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left Side */}
            <div className="text-center md:text-left w-full md:w-auto">
              <p className="text-4xl font-semibold">_taha</p>
              <p className="text-lg leading-relaxed mt-7 ">
                Hands-on graphic design solutions that <br />
                connect with your target audience
              </p>
              <div className="flex justify-center md:justify-start mt-6">
                <Button label="Contact" classname="px-10 w-auto" />
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2  md:grid-cols-2 md:gap-30 mt-10 md:mt-0 w-full md:w-auto px-auto">
              {/* Menu */}
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold tracking-widest uppercase text-gray-400">
                  Menu
                </p>
                <ul className="mt-6 space-y-4">
                  {["Home", "About", "Services", "Portfolio"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex justify-center md:justify-start md:text-lg transition-all duration-200 hover:text-blue-600 "
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold tracking-widest uppercase text-gray-400">
                  Social
                </p>
                <ul className="mt-6 space-y-4">
                  {["GitHub", "LinkedIn", "Telegram", "Instagram"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex justify-center md:justify-start transition-all duration-200 hover:text-blue-600 md:text-lg"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <hr className="mt-10 mb-10 border-gray-200 dark:border-gray-700" />

          <div className="flex justify-between items-center">
            <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
              © <span>{new Date().getFullYear()}</span> Created by _taha
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
