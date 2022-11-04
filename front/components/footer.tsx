import Link, { LinkProps } from "next/link";
import { Section } from "./section";
import { Logo } from "./svg";

export function Footer() {
  return (
    <footer className="bg-primary-800 px-4 py-8 text-white">
      <Section theme="dark">
        <div className="p-4">
          <div className="h-9 w-52">
            <Logo />
          </div>
        </div>
        <div className="mt-6 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          <p className="text-sm">
            Pickbeam est une agence de développement web qui accompagne les
            entreprises à se démarquer de la concurrence sur le web.
          </p>

          <FooterLinkList
            title="SERVICES"
            LinkComponents={[
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
            ]}
          />
          <FooterLinkList
            title="VOTRE BESOIN"
            LinkComponents={[
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
            ]}
          />
          <FooterLinkList
            title="RESSOURCES"
            LinkComponents={[
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
            ]}
          />
          <FooterLinkList
            title="CONTACT"
            LinkComponents={[
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
              () => <FooterLink href="">Sites Jamstack</FooterLink>,
            ]}
          />
        </div>
      </Section>
    </footer>
  );
}

export interface FooterLinkListProps {
  title: string;
  LinkComponents: Array<React.FC>;
}

export function FooterLinkList({ title, LinkComponents }: FooterLinkListProps) {
  return (
    <div>
      <p className="mb-2 font-bold uppercase">{title}</p>
      <ul>
        {LinkComponents.map((LC, i) => (
          <li key={i} className="my-2">
            <LC />
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface FooterLinkProps extends LinkProps {
  children: React.ReactNode;
}

export function FooterLink({ children, ...props }: FooterLinkProps) {
  return (
    <Link className="text-sm font-light hover:underline" {...props}>
      {children}
    </Link>
  );
}
