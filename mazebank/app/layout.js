import Layout from "../Componentes/Layout"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <Layout>
        {children}
      </Layout>
    </html>
  )
}
