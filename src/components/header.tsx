import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { AnimateInView } from "./ui/animate-in-view";
import { SparklesText } from "./ui/sparkle";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg">
      <AnimateInView>
        <div className="hidden lg:block">
          <div className=" flex h-16 items-center container mx-auto">
            <div className="mr-4  hidden md:flex">
              <Link
                className="flex items-center justify-center space-x-2 text-xl font-semibold py-6 text-center"
                aria-label="Trang chủ"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  className="size-6 fill-foreground"
                >
                  <path d="M 29.03125 0 C 28.957031 -0.00390625 28.886719 0.015625 28.8125 0.03125 L 0.8125 5.3125 C 0.339844 5.402344 0 5.832031 0 6.3125 L 0 43.59375 C 0 44.074219 0.339844 44.503906 0.8125 44.59375 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.300781 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.453125 0.078125 29.25 0.0078125 29.03125 0 Z M 32 8.09375 L 32 19.90625 C 34.304688 19.535156 36.121094 17.882813 36.75 15.6875 C 38.671875 16.488281 40.277344 17.847656 41.40625 19.59375 C 39.394531 20.5625 38 22.621094 38 25 C 38 27.363281 39.386719 29.398438 41.375 30.375 C 40.242188 32.097656 38.632813 33.425781 36.71875 34.21875 C 36.0625 32.070313 34.273438 30.460938 32 30.09375 L 32 41.90625 C 34.789063 41.457031 36.851563 39.148438 36.96875 36.25 C 39.664063 35.269531 41.890625 33.433594 43.34375 30.96875 C 43.554688 30.992188 43.78125 31 44 31 C 47.308594 31 50 28.308594 50 25 C 50 21.691406 47.308594 19 44 19 C 43.804688 19 43.597656 19.011719 43.40625 19.03125 C 41.953125 16.519531 39.703125 14.648438 36.96875 13.65625 C 36.808594 10.800781 34.757813 8.539063 32 8.09375 Z M 14.59375 15.40625 C 15.59375 15.40625 16.394531 15.492188 17.09375 15.59375 C 17.792969 15.695313 18.492188 15.894531 19.09375 16.09375 L 19.09375 20 C 18.792969 19.800781 18.492188 19.605469 18.09375 19.40625 C 17.695313 19.207031 17.398438 19.101563 17 19 C 16.601563 18.898438 16.207031 18.8125 15.90625 18.8125 C 15.507813 18.710938 15.210938 18.6875 14.8125 18.6875 C 14.3125 18.6875 13.898438 18.710938 13.5 18.8125 C 13.101563 18.914063 12.800781 18.988281 12.5 19.1875 C 12.199219 19.386719 12.007813 19.613281 11.90625 19.8125 C 11.804688 20.011719 11.6875 20.292969 11.6875 20.59375 C 11.6875 20.894531 11.804688 21.207031 11.90625 21.40625 C 12.105469 21.605469 12.292969 21.894531 12.59375 22.09375 C 12.894531 22.292969 13.289063 22.488281 13.6875 22.6875 C 14.085938 22.886719 14.59375 23.113281 15.09375 23.3125 C 15.792969 23.613281 16.492188 23.914063 17.09375 24.3125 C 17.695313 24.613281 18.195313 25 18.59375 25.5 C 18.992188 25.898438 19.292969 26.398438 19.59375 27 C 19.792969 27.601563 19.90625 28.207031 19.90625 28.90625 C 19.804688 30.007813 19.613281 30.800781 19.3125 31.5 C 18.914063 32.199219 18.386719 32.789063 17.6875 33.1875 C 16.988281 33.585938 16.304688 33.894531 15.40625 34.09375 C 14.507813 34.292969 13.59375 34.40625 12.59375 34.40625 C 11.59375 34.40625 10.585938 34.292969 9.6875 34.09375 C 8.789063 33.992188 8.007813 33.707031 7.40625 33.40625 L 7.40625 29.3125 C 8.105469 29.914063 8.914063 30.386719 9.8125 30.6875 C 10.710938 30.988281 11.507813 31.1875 12.40625 31.1875 C 12.90625 31.1875 13.414063 31.195313 13.8125 31.09375 C 14.210938 30.992188 14.511719 30.886719 14.8125 30.6875 C 15.113281 30.488281 15.304688 30.292969 15.40625 30.09375 C 15.507813 29.894531 15.59375 29.605469 15.59375 29.40625 C 15.59375 29.007813 15.511719 28.707031 15.3125 28.40625 C 15.113281 28.105469 14.800781 27.894531 14.5 27.59375 C 14.101563 27.394531 13.6875 27.105469 13.1875 26.90625 C 12.6875 26.707031 12.195313 26.488281 11.59375 26.1875 C 10.195313 25.585938 9.105469 24.898438 8.40625 24 C 7.707031 23.101563 7.3125 22.105469 7.3125 20.90625 C 7.3125 19.90625 7.507813 19.105469 7.90625 18.40625 C 8.304688 17.707031 8.800781 17.1875 9.5 16.6875 C 10.199219 16.289063 10.914063 15.886719 11.8125 15.6875 C 12.710938 15.488281 13.59375 15.40625 14.59375 15.40625 Z" />
                </svg>

                {/* <img className="w-20" src="/assets/logo-main.png" alt="" /> */}

                <SparklesText>
                  <span className="font-bold text-3xl">ShangDev</span>
                </SparklesText>

                <div className="flex flex-col">
                  <span className="text-primary font-sans"></span>
                </div>
              </Link>
            </div>

            <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <div style={{ position: "relative" }}>
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                    dir="ltr"
                  >
                    <li>
                      <Link
                        to="/"
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group bg-transparent"
                        data-radix-collection-item
                      >
                        About
                        <span className="ml-2 rounded-md bg-emerald-200 border border-emerald-400 text-emerald-700 dark:bg-emerald-300/10 dark:text-emerald-500 px-1.5 py-0.5 text-xs leading-none  no-underline group-hover:no-underline">
                          me
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent"
                        to="/blog"
                        data-radix-collection-item
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-transparent"
                        to="/resume/resume-vi"
                        data-radix-collection-item
                      >
                        Resume
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center" />
              </nav>
            </nav>

            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
              <Link
                target="__blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80 text-foreground/60 mr-3 text-sm font-medium"
                aria-label="Youtube"
                to="/"
              >
                <svg
                  viewBox="0 0 256 180"
                  width={256}
                  height={180}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="h-6 w-6 "
                >
                  <path
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                    fill="red"
                  />
                  <path
                    fill="#FFF"
                    d="m102.421 128.06 66.328-38.418-66.328-38.418z"
                  />
                </svg>
              </Link>
              <Link
                target="__blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm font-medium"
                aria-label="Facebook"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  fill="url(#a)"
                  height={40}
                  width={40}
                  className="h-6 w-6 "
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.078%"
                      y2="0%"
                      id="a"
                    >
                      <stop offset="0%" stopColor="#0062E0" fill="none" />
                      <stop offset="100%" stopColor="#19AFFF" fill="none" />
                    </linearGradient>
                  </defs>
                  <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
                  <path
                    fill="#FFF"
                    d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  />
                </svg>
              </Link>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                >
                  <path
                    d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                >
                  <path
                    d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex justify-between  items-center w-full rounded-md px-4 py-2">
            <Link
              className="flex items-center gap-1.5"
              aria-label="Trang chủ"
              to="/"
            >
              <svg
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={24}
                  height={24}
                  rx={4}
                  fill="url(#paint0_linear_392_3)"
                />
                <path
                  d="M3.66 17V8.09H5.915C6.69233 8.09 7.29733 8.189 7.73 8.387C8.16267 8.57767 8.467 8.882 8.643 9.3C8.819 9.71067 8.907 10.246 8.907 10.906V14.14C8.907 14.8073 8.819 15.3537 8.643 15.779C8.467 16.197 8.16267 16.505 7.73 16.703C7.30467 16.901 6.707 17 5.937 17H3.66ZM5.629 15.636H5.937C6.23767 15.636 6.454 15.592 6.586 15.504C6.718 15.416 6.79867 15.284 6.828 15.108C6.86467 14.932 6.883 14.712 6.883 14.448V10.565C6.883 10.301 6.861 10.0883 6.817 9.927C6.78033 9.76567 6.696 9.64833 6.564 9.575C6.432 9.50167 6.21933 9.465 5.926 9.465H5.629V15.636ZM10.8224 17V9.553H9.48038V8.09H14.1334V9.553H12.8024V17H10.8224ZM14.9618 17V12.886H14.4008V11.984H14.9618V8.09H17.2168C18.0015 8.09 18.6101 8.189 19.0428 8.387C19.4755 8.57767 19.7761 8.882 19.9448 9.3C20.1208 9.71067 20.2088 10.246 20.2088 10.906V14.14C20.2088 14.8073 20.1208 15.3537 19.9448 15.779C19.7688 16.197 19.4645 16.505 19.0318 16.703C18.6065 16.901 18.0125 17 17.2498 17H14.9618ZM16.8868 15.636H17.2828C17.5835 15.636 17.7998 15.592 17.9318 15.504C18.0638 15.416 18.1481 15.284 18.1848 15.108C18.2215 14.932 18.2398 14.712 18.2398 14.448V10.565C18.2398 10.301 18.2178 10.0883 18.1738 9.927C18.1371 9.76567 18.0491 9.64833 17.9098 9.575C17.7778 9.50167 17.5688 9.465 17.2828 9.465H16.8868V11.984H17.4258V12.886H16.8868V15.636Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_392_3"
                    x1="-3.50177e-07"
                    y1="0.5"
                    x2={23}
                    y2={24}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A654FF" />
                    <stop offset="0.293618" stopColor="#FA71DC" />
                    <stop offset="0.672815" stopColor="#FB8486" />
                    <stop offset="0.843785" stopColor="#E69585" />
                    <stop offset="0.943721" stopColor="#EECF82" />
                    <stop offset={1} stopColor="#FCEDB5" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                type="button"
              >
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="!w-5 !h-5"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </AnimateInView>
    </header>
  );
}

export default Header;
