import { Dialog, Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useScroll } from "./hooks/use-scroll";
import { DropChevron, Globe, Hamburger, Logo } from "./svg";
import { Button } from "./button";

export const NavSectionsRenderer = () => (
  <>
    <NavSection title="Services">
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
    </NavSection>
    <NavSection title="Votre Besoin">
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
    </NavSection>
    <NavSection title="Ressources">
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
      <NavItem
        title="Site Jamstack"
        description="De la landing page à un site corporate complexe"
        href="/"
        Image={Globe}
      />
    </NavSection>
  </>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollDirection, isTopPage } = useScroll();

  return (
    <header
      className={clsx(
        "fixed z-10 flex h-16 w-full flex-col justify-end bg-primary-800 text-white lg:h-24",
        "transition-all duration-300",
        { "top-0": scrollDirection === "up" },
        { "-top-16": scrollDirection === "down" },
        { "lg:top-0": isTopPage },
        { "lg:-top-8": !isTopPage }
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1278px] items-center justify-between">
        <Link href="/" aria-label="accueil">
          <Logo className="ml-4 h-10 w-52" />
        </Link>
        <NavDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          SectionsRenderer={NavSectionsRenderer}
        />
        <NavBar SectionsRenderer={NavSectionsRenderer} />

        <button
          onClick={() => setIsOpen(true)}
          className="mr-4 h-12 w-12 rounded-[4px] transition hover:bg-primary-400 lg:hidden"
          aria-label="menu"
        >
          <div className="m-auto h-10 w-10">
            <Hamburger />
          </div>
        </button>
      </div>
    </header>
  );
}

export interface NavDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  SectionsRenderer: () => React.ReactElement;
}

export function NavDialog({
  isOpen,
  setIsOpen,
  SectionsRenderer,
}: NavDialogProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="nav"
        static
        onClose={setIsOpen}
        className="fixed top-0 isolate z-10 min-h-full lg:hidden"
      >
        <Transition.Child
          enter="transition duration-200 ease-in-out"
          enterFrom="transform -translate-x-96"
          enterTo="transform translate-x-0"
          leave="transition duration-200 ease-in-out"
          leaveFrom="transform translate-x-0"
          leaveTo="transform -translate-x-96"
          as={Fragment}
        >
          <div className="fixed left-0 top-0 bottom-0 z-10 flex items-center justify-center">
            <Dialog.Panel className="h-full w-[300px] max-w-[300px] overflow-y-auto bg-primary-800 text-white">
              <Logo className="mx-auto w-52 py-6" />
              <SectionsRenderer />
              <ContactButton />
            </Dialog.Panel>
          </div>
        </Transition.Child>
        <Transition.Child
          enter=""
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=""
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <div
            className="fixed inset-0 h-full w-[10000px] bg-black/50"
            aria-hidden="true"
          />
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export interface NavBarProps {
  SectionsRenderer: () => React.ReactElement;
}

export function NavBar({ SectionsRenderer }: NavBarProps) {
  return (
    <div className="hidden h-full w-full items-center justify-between lg:flex">
      <div className="mx-auto">
        <div className="max-w-md">
          <SectionsRenderer />
        </div>
      </div>

      <ContactButton />
    </div>
  );
}

export function ContactButton() {
  return (
    <div className="flex justify-around p-4">
      <Button href="/" cta="Nous contacter" theme="dark" />
    </div>
  );
}

export interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ children, title }: NavSectionProps) {
  return (
    <div className="group py-2 px-4 lg:inline-block lg:px-0">
      <Disclosure refName={title}>
        <Disclosure.Button className="flex w-full justify-between px-4 py-2 lg:inline-block lg:w-auto lg:py-0">
          <span className="inline-block font-semibold lg:text-sm lg:font-normal lg:uppercase">
            {title}
          </span>
          <DropChevron className="h-6 w-6 transition duration-300 ui-open:-rotate-180 ui-not-open:rotate-0 lg:hidden" />
        </Disclosure.Button>
        <Disclosure.Panel
          static
          className="transform overflow-hidden px-4 transition-all duration-300 ui-open:max-h-96 ui-not-open:max-h-0
          lg:absolute lg:ml-4 lg:mt-4 lg:overflow-visible lg:rounded-lg lg:bg-white lg:px-4 lg:ui-not-open:max-h-96"
        >
          <div className="absolute -top-8 -left-0 hidden h-8 w-24 lg:group-hover:block  ">
            <div className="absolute -bottom-5 left-4 h-6 w-6 rotate-45 transform rounded bg-white"></div>
          </div>
          <ul className="transform transition-all lg:hidden lg:opacity-0 lg:group-hover:block lg:group-hover:opacity-100">
            {children}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
}

export interface NavItemProps {
  title: string;
  href: string;
  description: string;
  Image: React.FC;
}

export function NavItem({ Image, description, href, title }: NavItemProps) {
  return (
    <li className="flex py-4">
      <div className="flex w-6 flex-none text-primary-400">
        <Image />
      </div>
      <div className="pl-2">
        <Link
          href={href}
          className="text-sm font-semibold text-primary-100 hover:underline lg:text-primary-800"
        >
          {title}
        </Link>
        <p className="text-xs lg:text-primary-400">{description}</p>
      </div>
    </li>
  );
}
