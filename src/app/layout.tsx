"use client";
import { Montserrat } from "@next/font/google";
import styled from "styled-components";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Body className={montserrat.className}>{children}</Body>
    </html>
  );
}

const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
