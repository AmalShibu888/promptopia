import '@styles/globals.css'
import Nav from "@components/Nav"
import Provider from '@components/Provider'
import { Suspense } from "react"
export const metadata = {
    title : 'promptopia',
    description : "share Ai prompts"
}


const RootLayout = ({ children }) => (
  <html lang='en'>
    
    <body>
      <Provider>
        <Suspense>
        <main className='app'>
            <Nav />
          {children}
        </main>
        </Suspense>
        </Provider>
    </body>
    
  </html>
)

export default RootLayout