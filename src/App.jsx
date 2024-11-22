import { useCallback, useEffect, useRef, useState } from "react";
import Input from "./Utils/Input";

function App() {
  const [range, setRange] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const [copy, setCopy] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "1234567890";
    if (characterAllow) str += "!@#$%^&*_+";
    for (let i = 1; i <= range; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [range, numberAllow, characterAllow, setPassword]);

  const copyToClipBoard = useCallback(
    (e) => {
      passRef.current?.select();
      window.navigator.clipboard.writeText(password);
      setCopy(true);
    },
    [password]
  );

  useEffect(() => {
    passwordGenerator();
  }, [range, numberAllow, characterAllow]);
  return (
    <>
      <div className=" h-screen max-w-full w-full bg-gradient-to-bl from-violet-950 via-sky-500 to-pink-800 flex justify-center items-center px-5">
        <div className=" max-w-lg min-w-md w-full bg-stone-800 p-5 rounded-md shadow-md shadow-pink-600/45">
          <h1 className="text-center text-2xl bg-pink-700 text-transparent bg-clip-text font-semibold group/arrow transition-all duration-300 ease-linear cursor-pointer">
            Password Generator
            <span className=" bg-none text-white group-hover/arrow:pl-2 group-hover/arrow:transition-all group-hover/arrow:duration-300 group-hover/arrow:ease-linear">
              ➡️
            </span>
          </h1>
          <div className="flex gap-x-1 pt-3 ">
            <div className="flex-1">
              <Input ref={passRef} type="text" value={password} />
            </div>
            <button
              onDoubleClick={copyToClipBoard}
              onClick={() => setCopy(false)}
              className={`text-xl group/button transition-all duration-300 ease-in-out font-semibold px-2 py-[1px] ring-1 rounded-md  relative ${
                copy
                  ? "bg-pink-900 text-white"
                  : "bg-violet-500  text-stone-800"
              }`}
            >
              <span className={` `}>Copy</span>
              <span className=" absolute -top-7 -left-16 rounded-md min-w-36 text-sm text-nowrap bg-white w-full text-black hidden group-hover/button:block transition-all duration-300 ease-in-out">
                {copy ? (
                  <span className=" relative">
                    Click To unselect
                    <small
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                      className="absolute w-3 h-3 bg-white -bottom-3 left-1/2 -translate-x-1/2 rotate-180"
                    ></small>
                  </span>
                ) : (
                  <span className=" relative">
                    Double Click To Copy{" "}
                    <small
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                      className="absolute w-3 h-3 bg-white -bottom-3 left-1/2 -translate-x-1/2 rotate-180"
                    ></small>
                  </span>
                )}
              </span>
            </button>
          </div>
          <div className="flex gap-x-3 items-center justify-between  mt-3">
            {" "}
            <div className="flex justify-start items-center gap-x-2 ">
              <input
                className=" accent-pink-700"
                type="range"
                name="range"
                id="range"
                min={8}
                max={100}
                value={range}
                onChange={(e) => setRange(e.target.value)}
              />
              <label
                htmlFor="range"
                className="text-white font-semibold text-nowrap"
              >
                Length : {range}
              </label>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <Input
                onClick={() => setNumberAllow((prv) => !prv)}
                id="number"
                type="checkbox"
              />
              <label htmlFor="number" className="text-white font-semibold">
                Numbers
              </label>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <Input
                onClick={() => setCharacterAllow((prv) => !prv)}
                id="charAt"
                type="checkbox"
              />
              <label htmlFor="charAt" className="text-white font-semibold">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
