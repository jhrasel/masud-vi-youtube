import Head from "next/head";
import CommonTable from "@/components/Commons/Table/CommonTable";
import CommonModal from "@/components/Commons/Modal/CommonModal";
import {
  DBInput,
  DBInputError,
  DBInputFocus,
  DBInputValid,
} from "@/components/ReUse/DBInput";

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

      <DBInput label="Input Field" className="" />
      <DBInputError label="Input Field" className="" />
      <DBInputFocus label="Input Field" className="" />
      <DBInputValid label="Input Field" className="" />

      <CommonModal />

      <CommonTable />
      
    </>
  );
}
