import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'

// export const getServerSideProps = async () => {
//   const response = await fetch('https://platzi-avo.vercel.app/api/avo') //obtengo info
//   const { data }: TAPIAvoResponse = await response.json() //la transformo en json y hago destructuring de data

//   return {
//     props: {
//       productList: data,
//     },
//   }
// }

export const getStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo') //obtengo info
  const { data }: TAPIAvoResponse = await response.json() //la transformo en json y hago destructuring de data

  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
