import { IconSunset2, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import { useState } from "react";

const technologies = [
  {
    name: "Create React App",
    logo: "react.svg",
    link: "https://create-react-app.dev/",
  },
  {
    name: "Tailwind",
    logo: "tailwind.svg",
    link: "https://tailwindcss.com/",
  },
];

const links = [
  {
    name: "GitHub",
    link: "http://github.com/yasminlovesit",
    icon: <IconBrandGithub />,
  },
  {
    name: "LinkedIn",
    link: "http://linkedin.com/in/yasmin-mohamad-b99224171/",
    icon: <IconBrandLinkedin />,
  },
];

function App() {
  const [dark, setDark] = useState(false);

  return (
    <main
      className={`min-h-screen ${
        dark ? "bg-slate-900 text-white" : "bg-white"
      }`}
    >
      <div className="max-w-xl mx-auto py-8 px-4">
        <div className="flex justify-end cursor-pointer">
          <IconSunset2 onClick={() => setDark((prev) => !prev)} />
        </div>
        <div className="text-center">
          <h1
            className={`${
              dark ? "text-fuchsia-400" : "text-pink-400"
            } text-2xl mt-[40px]`}
          >
            Yasmin M
          </h1>
          <h3>Frontend Engineer</h3>
          <span className="italic text-gray-500">Kuala Lumpur, Malaysia</span>
        </div>
        <div className="grid grid-cols-12 gap-y-2 md:gap-y-12 mt-8 pt-7">
          <div className="col-span-12 md:col-span-2">
            <div className={`${dark ? "text-cyan-200" : "text-indigo-600"}`}>
              Links
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 flex gap-4 flex-wrap text-sm">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-blue-400 text-white hover:bg-blue-700 flex items-center gap-x-1 duration-200 py-1 px-4"
              >
                {item.icon}
                <div>{item.name}</div>
              </a>
            ))}
          </div>
          <div className="col-span-12 md:col-span-2 mt-4 md:mt-0">
            <div className={`${dark ? "text-cyan-200" : "text-indigo-600"}`}>
              About
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            I'm a self-taught aspiring software developer majoring in Public
            Relations with absolutely no Computer Science/Information Technology
            background. To reach me, feel free to drop me an email or message me
            on Discord.
            <div>
              <br />
              Check out my resume{" "}
              <a
                href="abc.com"
                target="_blank"
                className="cursor-pointer decoration-solid text-blue-400"
              >
                here.
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 mt-4 md:mt-0">
            <div className={`${dark ? "text-cyan-200" : "text-indigo-600"}`}>
              Work
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            Miserable for the past year working in the field of
            sales/marketing/client servicing.
          </div>
          <div className="col-span-12 md:col-span-2 mt-4 md:mt-0">
            <div className={`${dark ? "text-cyan-200" : "text-indigo-600"}`}>
              Contact
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div>+6011 2320 7606</div>
            <br />
            yasminnfjk@gmail.com
          </div>
        </div>
        <footer className="text-center mt-12">
          <div className="text-xs mb-2">This site was built with:</div>
          <div className="flex justify-center gap-4">
            {technologies.map((item, index) => (
              <a
                href={item.link}
                className="flex flex-col items-center"
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.logo}
                  className="h-12 w-12 grayscale duration-200 hover:grayscale-0"
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
