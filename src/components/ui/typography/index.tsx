import React from "react";
import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={clsx("font-poppins text-4xl font-bold leading-tight text-primary", className)}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={clsx("font-poppins text-3xl font-semibold leading-snug text-primary", className)}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={clsx("font-poppins text-2xl font-semibold text-primary", className)}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={clsx("font-poppins text-xl font-semibold text-primary", className)}>
    {children}
  </h4>
);

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx("font-poppins text-base font-normal leading-relaxed text-text1", className)}>
    {children}
  </p>
);

export const Body2: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={clsx("font-poppins text-base font-light leading-relaxed text-text1", className)}>
    {children}
  </p>
);

export const Small: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={clsx("font-poppins text-sm font-normal text-text1", className)}>
    {children}
  </span>
);
