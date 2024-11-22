import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/ThemContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
function App() {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  console.log(theme);
  const lightTheme = () => {
    console.log("click");
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="h-screen flex justify-center items-center max-w-full w-full p-5">
        <div className="max-w-lg w-full bg-gray-100 shadow-md dark:bg-black dark:shadow-md p-5 rounded-md relative">
          <div className="flex justify-end items-center">
            <button
              onClick={() => {
                theme === "dark" ? lightTheme() : darkTheme();
              }}
              className="dark:text-white dark:bg-white bg-black text-white px-2 py-1 rounded-md border-none outline-none ring-1 flex items-center justify-center text-right duration-300 transition-all"
            >
              {/* Dark Mode Icon */}
              <span
                className={` dark:text-black ${
                  theme === "light" ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                <MdDarkMode size={22} />
              </span>

              {/* Light Mode Icon */}
              <span
                className={`dark:text-black ${
                  theme === "dark" ? "opacity-100" : "opacity-0"
                }  transition-opacity ml-2`}
              >
                <CiLight size={22} />
              </span>
            </button>
          </div>
          <div className="pt-4 flex justify-center items-center flex-col">
            <img
              src="https://images.pexels.com/photos/27908566/pexels-photo-27908566/free-photo-of-a-blurry-photo-of-a-flower-shop-with-a-man-on-a-bike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pixel images"
            />
            <p
              style={{
                wordSpacing: "-0.1px",
              }}
              className="dark:text-white text-stone-900 text-justify leading-5 capitalize pt-2 break-words tracking-tighter"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae neque cupiditate placeat eaque dignissimos
              voluptatibus eos accusamus veritatis adipisci assumenda quas quia
              quaerat ad, animi aliquam sit. Iure, maxime!
            </p>
            <button className="dark:text-black dark:bg-white text-white bg-violet-700 px-3 py-1 border-none outline-none rounded-md text-xl font-semibold text-center mt-3">
              View More
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
