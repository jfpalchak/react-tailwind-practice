/// <reference types="vite/client" />

interface Link {
  text: string;
  href: string;
}

type HeroIconType = React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
  title?: string | undefined;
  titleId?: string | undefined;
} & React.RefAttributes<SVGSVGElement>>;