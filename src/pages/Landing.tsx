import React, { ReactElement } from "react";
import styled from '@emotion/styled';
import NavLogo from '@/assets/images/logo.svg';
import ButtonLogo from '@/assets/images/logo_button.svg';
import TaglineLogo from '@/assets/images/logo_tagline.svg';
import LandingHero from '@/assets/images/landing_hero.svg';
import Triangle from '@/assets/images/purple_triangle.svg';
import DescriptionArt from '@/assets/images/desc_art.svg';
import Yolo1 from '@/assets/images/yolo1.png';
import YoloFooter from '@/assets/images/yolo_footer.png';
import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

const Page = styled.div`
  // background: red;
  max-width: 1400px;
  margin: auto;
  width: 100%;
`

const description =
  '“Wetime” ได้แนวคิดมาจากคำว่า We ที่หมายถึง พวกเรา และ Time ที่หมายถึง เวลา ที่นำมารวมกันแล้วคือ การเข้ามาใช้เวลาร่วมกัน การทำงานร่วมกันมันเป็นอะไรที่น่าสนุกนะ แต่บางครั้งการทำงานร่วมกันก็กินเวลาจนหาข้อสรุปไม่ได้ Wetime จึงมีไอเดียอยากให้การประชุมไม่น่าเบื่อและจำเจ เอาหลักการแบ่งเวลามาปรับใช้ให้ทุกคน Produdctive มากขึ้น และยิ่งเป็นยุค New Normal แบบนี้ ถ้าแบ่งเวลาไม่ดี ยิ่งน่าปวดหัว'
const description2 =
  'Wetime อยากช่วยให้ทุกคน Productive และทำงานง่าย ๆ เพราะแค่ทำงานที่บ้านก็เซ็งมากพอแล้ว อย่าให้การแบ่งเวลามาเป็นปัญหาของทุกคน พวกเราเองก็หวังว่าทุกคนจะทำงานได้อย่างราบรื่นจากเว็บไซด์ดี ๆ อย่าง Wetime ของเรานะ!'

export function Landing(): ReactElement {

  const history = useHistory();
  
  const Nav = (
    <Box height="64px" display="flex" padding="48px 64px" color="#555555">
      <Box>
        <img src={NavLogo} />
      </Box>
      <Box marginLeft="auto">
        <Typography>we time คืออะไร</Typography>
      </Box>
      <Box marginLeft="4rem">
        <Typography>วิธีการใช้</Typography>
      </Box>
      <Box marginLeft="4rem">
        <Typography>ความปลอดภัย</Typography>
      </Box>
      <Box marginLeft="4rem">
        <Typography>สนับสนุน</Typography>
      </Box>
    </Box>
  )

  const Hero = (
    <Box padding="24px 64px" height="460px" position="relative">
      <Box width="540px">
        <Typography
          fontSize="48px"
          fontWeight={500}
          color="primary"
          lineHeight="54px"
        >
          ใช้เวลาของคุณอย่างคุ้มค่า ไปกับ วีไทม์..
        </Typography>
      </Box>
      <Box width="400px" color="#555555" marginTop="16px" marginBottom="32px">
        <Typography fontSize="16px" fontWeight={300} lineHeight="24px">
          การทำงานร่วมกันมันเป็นอะไรที่น่าสนุกนะ
          แต่บางครั้งการทำงานร่วมกันก็กินเวลาจนหาข้อสรุปไม่ได้ Wetime
          จึงมีไอเดียอยากให้การประชุมไม่น่าเบื่อและจำเจ
        </Typography>
      </Box>
      <Button onClick={() => { history.push('/app') }} variant="contained">เริ่มใช้<img src={ButtonLogo} style={{margin: '0 8px'}} />บนบราวเซอร์คุณ</Button>
      <Box position="absolute" right="48px" bottom="0">
        <img src={LandingHero} style={{ width: '620px' }} />
      </Box>
    </Box>
  )

  const Description = (
    <Box display="flex" marginTop="200px" flexDirection="column">
      <Box width="325px" margin="auto">
        <img src={TaglineLogo} />
      </Box>
      <Box
        width="570px"
        margin="auto"
        marginTop="46px"
        color="#555555"
        textAlign="center"
      >
        <Typography fontWeight={300}>{description}</Typography>
      </Box>
    </Box>
  )

  const yolo1 = (
    <Box display="flex" maxWidth="100%">
      <img src={Yolo1} style={{width: '100%', margin: 'auto'}}/>
    </Box>
  )

  const yoloFooter = (
    <Box display="flex" maxWidth="100%">
      <img src={YoloFooter} style={{width: '100%', margin: 'auto'}}/>
    </Box>
  )

  const Description2 = (
    <Box position="absolute" left="0" width="100%">
      <Box>
        <img src={Triangle} style={{width: '100%'}}/>
      </Box>
      <Box style={{background: '#4A2EF4'}} marginTop="-40px">
        <Box width="100%" display="flex">
          <Box margin="auto">
            <Box margin="-50px -34px 0 0">
              <img src={DescriptionArt} />
            </Box>
          </Box>
        </Box>
        <Box width="100%" display="flex">
          <Box margin="64px auto 64px" width="580px" color="white">
            <Typography fontWeight={300}>{description2}</Typography>
          </Box>
        </Box>
      </Box>
      {yolo1}
      {yoloFooter}
    </Box>
  )

  return (
    <Box display="flex" position="relative">
      <Page>
        {Nav}
        {Hero}
        {Description}
        {Description2}
      </Page>
    </Box>
  )
}
