import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import { getUserInfo } from './member/services/actions'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'

export const metadata: Metadata = {
  title: '핀테크 과정 포트폴리오',
  description: '설명...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()
  console.log('userInfo', userInfo)
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <CommonProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CommonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
