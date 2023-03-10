import { GetStaticProps, NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

// Por ahora estamos utilizando data mockeada, pero
// debemos reemplazar esto por información proveniente de la
// API
/* export const data: TyCsAPIResponse = {
  version: "3 de julio, 2022",
  tycs: [
    {
      id: 1,
      title: "General",
      description: `Tienda Libre es una compañía que ofrece servicios vinculados principalmente al comercio electrónico. 
                    Los servicios están diseñados para formar un ecosistema que permita a las personas vender, 
                    comprar, pagar, enviar productos y realizar otras actividades comerciales con tecnología aplicada.`,
    },
  ],
}; */

interface Props{
  data: TyCsAPIResponse
}

const TerminosYCondiciones: NextPage<Props> = ({data}:Props) => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>
      <h2>Terminos y Concidiones</h2>
      <p>Versión: {version}</p>
      {data.tycs.tycs.map(renderTyc)}
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/tycs`)
  const data : TyCsAPIResponse= await res.json()
  console.log(data)
  return {
      props: {
          data
      }
  }
}



export default TerminosYCondiciones;
