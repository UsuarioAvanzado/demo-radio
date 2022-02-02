import type { NextPage } from "next"
import type { GetStaticPaths, GetStaticProps } from "next"
import type { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { Layout } from "@components";
import { getCountries, getStations } from "@helpers";
import type { Country, Station } from "@helpers";


interface Path {
  params: {
    code: string,
  }
}

interface Params extends ParsedUrlQuery {
  code: string
}

interface Props {
  stations: string
}


export const getStaticPaths: GetStaticPaths = async () => {
  const response: Country[] = await getCountries()
  const paths: Path[] = []

  for(let country in response){
    const path: Path = {
      params: {
        code: response[country].name
      }
    }
    paths.push(path)
  }
  return {
    paths,
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ( context: GetStaticPropsContext ) => {
  const params = context.params as Params
  const stations: string = await getStations(params.code).then(( response ) => {
    return JSON.stringify(response)
  })
  return {
    props: {
      stations
    }
  }
}


const CountryPage: NextPage<Props> = (props) =>{
  const [ stations ] = useState<Station[]>(JSON.parse(props.stations))
  return <Layout stations={stations}/>
}


export default CountryPage
