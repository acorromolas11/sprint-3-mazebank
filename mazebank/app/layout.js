export const metadata = {
  title:"Maze Bank",
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
        <body>{children}</body>
    </html>
  )
}
