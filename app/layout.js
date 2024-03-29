import '@styles/globals.css'
import Nav from "@components/Nav"
import Provider from '@components/Provider'
export const metadata = {
    title : 'promptopia',
    description : "share Ai prompts"
}


const RootLayout = ({ children }) => (
  <html lang='en'>
    
    <body>
      <Provider>
        <main className='app'>
            <Nav />
          {children}
        </main>
        </Provider>
    </body>
    
  </html>
)

export default RootLayout