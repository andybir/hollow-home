import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import globalStylesUrl from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]

export const meta = () => {
  const description = 'The homepage for the hollow early learning center'
  const keywords = 'the hollow, daycare, child care'
  const title = 'the hollow'
  return { description, keywords, title }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          src='https://kit.fontawesome.com/25f620e40e.js'
          crossorigin='anonymous'
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          {/* the hollow */}
        </Link>
      </nav>
      <div className='container'>{children}</div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}
