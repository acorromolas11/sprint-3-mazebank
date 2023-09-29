import Layout from "@/Componentes/Layout"

export const metadata = {
  title:"Inicio",
  icons: {
    icon:[
      "/favicon.ico?v1"
    ],
    apple:[
      "/apple-touch-icon.png?v4"
    ],
    shortcut:[
      "/apple-touch-icon.png?v4"
    ],
    manifest: "/site.webmanifest"
  }
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