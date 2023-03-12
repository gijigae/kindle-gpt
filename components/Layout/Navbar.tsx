import { IconBrandGithub, IconBrandTwitter, IconHome } from "@tabler/icons-react";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className="font-bold text-2xl flex items-center">
        <a
          className="ml-2 hover:opacity-50"
          href="https://kindle-gpt-gijigae.vercel.app/"
        >
          Kindle GPT
        </a>
      </div>
      <div className="flex space-x-4">
        <div className="mr-6">
          See an
          <a
            className="ml-1 underline hover:opacity-50 cursor-pointer"
            href="https://twitter.com/gijigae/status/1634834919221510145?s=20"
            target="_blank"
            rel="noreferrer"
          >
            example
          </a>
          .
        </div>
        <a
          className="flex items-center hover:opacity-50"
          href="https://twitter.com/gijigae"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandTwitter size={24} />
        </a>

        <a
          className="flex items-center hover:opacity-50"
          href="https://github.com/gijigae/kindle-gpt"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          className="flex items-center hover:opacity-50"
          href="https://www.choimirai.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconHome size={24} />
        </a>
      </div>
    </div>
  );
};
