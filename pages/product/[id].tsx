import React from 'react'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
import { GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo') //obtengo info
  const { data }: TAPIAvoResponse = await response.json() //la transformo en json y hago destructuring de data

  const paths = data.map((avo) => ({
    params: {
      id: avo.id,
    },
  }))

  return {
    paths,
    //incremental static generation
    // da un 404 por cada path que no corresponda a los paths
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
  const product: TProduct = await response.json() //la transformo en json y hago destructuring de data

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
