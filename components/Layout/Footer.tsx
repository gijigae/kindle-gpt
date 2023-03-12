import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[30px] sm:h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="flex italic text-xs sm:text-sm mx-auto">
        Created by
        <a
          className="hover:opacity-50 ml-1"
          href="https://twitter.com/gijigae"
          target="_blank"
          rel="noreferrer"
        >
          Choimirai School
        </a>
        .
      </div>
    </div>
  );
};
