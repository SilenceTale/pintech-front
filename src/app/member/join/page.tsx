import JoinContainer from './containers/JoinContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'
import { MainContentBox } from '@/app/global/components/ContentBox'

const JoinPage = () => {
  return (
    <MainContentBox max-width={750} min-width={650}>
      <MainTitle>회원가입</MainTitle>
      <JoinContainer />
    </MainContentBox>
  )
}

export default JoinPage
