import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import DBInput from "@/components/ReUse/DBInput";
import CommonTable from "@/components/Commons/Table/CommonTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Start Here</h2>
      <DBInput label="Input Field" className="red" />

      <CommonTable />
    </>
  );
}