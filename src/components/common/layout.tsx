import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export interface LayoutProps extends PropsWithChildren {
  footer: {
    about: string;
    contact: string;
    advertising: string;
  };
}

export default function Layout(props: LayoutProps) {
  const { footer, children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer content={footer} />
    </>
  );
}
