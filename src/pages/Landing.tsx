import styled from '@emotion/styled'
import { Box, Button, Typography, Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import Content1 from '@/assets/images/content/1.svg'
import Content2 from '@/assets/images/content/2.svg'
import Content3 from '@/assets/images/content/3.svg'
import Content4 from '@/assets/images/content/4.svg'
import Content5 from '@/assets/images/content/5.svg'
import Content6 from '@/assets/images/content/6.svg'
import DescriptionArt from '@/assets/images/desc_art.svg'
import Icon from '@/assets/images/icon.svg'
import LandingHero from '@/assets/images/landing_hero.svg'
import NavLogo from '@/assets/images/logo.svg'
import ButtonLogo from '@/assets/images/logo_button.svg'
import TaglineLogo from '@/assets/images/logo_tagline.svg'
import Triangle from '@/assets/images/purple_triangle.svg'
import Yolo1 from '@/assets/images/yolo1.png'
import YoloFooter from '@/assets/images/yolo_footer.png'

const Page = styled.div`
  // background: red;
  max-width: 1200px;
  margin: auto;
  width: 100%;
`

const description =
  '“Wetime” ได้แนวคิดมาจากคำว่า We ที่หมายถึง พวกเรา และ Time ที่หมายถึง เวลา ที่นำมารวมกันแล้วคือ การเข้ามาใช้เวลาร่วมกัน การทำงานร่วมกันมันเป็นอะไรที่น่าสนุกนะ แต่บางครั้งการทำงานร่วมกันก็กินเวลาจนหาข้อสรุปไม่ได้ Wetime จึงมีไอเดียอยากให้การประชุมไม่น่าเบื่อและจำเจ เอาหลักการแบ่งเวลามาปรับใช้ให้ทุกคน Produdctive มากขึ้น และยิ่งเป็นยุค New Normal แบบนี้ ถ้าแบ่งเวลาไม่ดี ยิ่งน่าปวดหัว'
const description2 =
  'Wetime อยากช่วยให้ทุกคน Productive และทำงานง่าย ๆ เพราะแค่ทำงานที่บ้านก็เซ็งมากพอแล้ว อย่าให้การแบ่งเวลามาเป็นปัญหาของทุกคน พวกเราเองก็หวังว่าทุกคนจะทำงานได้อย่างราบรื่นจากเว็บไซด์ดี ๆ อย่าง Wetime ของเรานะ!'

export function Landing(): ReactElement {
  const history = useHistory()

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
      <Button
        onClick={() => {
          history.push('/app')
        }}
        variant="contained"
      >
        เริ่มใช้
        <img src={ButtonLogo} style={{ margin: '0 8px' }} />
        บนบราวเซอร์คุณ
      </Button>
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
    <Box display="flex" width="100%" margin="64px 0">
      <img src={Yolo1} style={{ width: '100%', margin: 'auto' }} />
    </Box>
  )

  const yoloFooter = (
    <Box display="flex" width="100%">
      <img src={YoloFooter} style={{ width: '100%', margin: 'auto' }} />
    </Box>
  )

  const facebookCard = (image: any, title: string, url: string) => (
    <Box
      component="a"
      href={url}
      target="_blank"
      display="block"
      borderRadius="38px"
      width="250px"
      style={{
        background: 'white',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <Box width="250px" borderRadius="38px">
        <img src={image} style={{ width: '100%' }} />
      </Box>
      <Box padding="12px 8px" textAlign="center">
        <Typography fontWeight="medium" lineHeight="20px">
          {title}
        </Typography>
        <Typography fontWeight="light" style={{ color: '#555555' }}>
          อ่านต่อ...
        </Typography>
      </Box>
    </Box>
  )

  const yoloFacebook = (
    <Box paddingBottom="64px" width="100%">
      <Box paddingTop="72px" width="100%" color="white" textAlign="center">
        <Typography fontSize="42px" fontWeight="medium">
          บทความจากเรา
        </Typography>
      </Box>

      <Box display="flex" margin="32px">
        <Box margin="auto">
          <Grid container spacing={2}>
            <Grid item>
              {facebookCard(
                Content1,
                'เว็บไซด์น้องใหม่ที่ทำให้การ WFH ไม่วุ่นวายอีกต่อไป',
                'https://www.facebook.com/Wetimee/posts/103708118692676'
              )}
            </Grid>
            <Grid item>
              {facebookCard(
                Content2,
                'ทำงานอย่างมีประสิทธิภาพ กับการแบ่งเวลาด้วยมะเขือเทศ!',
                'https://www.facebook.com/Wetimee/posts/103724258691062'
              )}
            </Grid>
            <Grid item>
              {facebookCard(
                Content3,
                '“รับมืออย่างไร ถ้าฉันหมดไฟช่วย WFH!”',
                'https://www.facebook.com/Wetimee/posts/103738155356339'
              )}
            </Grid>
          </Grid>
          <Box height="32px" />
          <Grid container spacing={2}>
            <Grid item>
              {facebookCard(
                Content4,
                'เคล็ดลับทำให้WFH ไม่น่าเบื่อของแชมป์โต้อุดมฯ',
                'https://www.facebook.com/Wetimee/posts/103800122016809'
              )}
            </Grid>
            <Grid item>
              {facebookCard(
                Content5,
                ' แบ่งเวลา | วางตาราง | มีวินัย',
                'https://www.facebook.com/Wetimee'
              )}
            </Grid>
            <Grid item>
              {facebookCard(
                Content6,
                'Wetime กับแนวคิดการทำงาน..',
                'https://www.facebook.com/Wetimee'
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box marginTop="30px" display="flex">
        <Button
          href="https://www.facebook.com/Wetimee"
          variant="contained"
          style={{ margin: 'auto', background: 'white', color: '#4A2EF4' }}
        >
          <FacebookIcon />
          &nbsp;&nbsp;ติดตามต่อที่ Facebook
        </Button>
      </Box>
    </Box>
  )

  const appFotter = (
    <Box display="flex" width="100%">
      <Box padding="120px 0" margin="auto">
        <Box display="flex" marginBottom="16px">
          <img src={Icon} style={{ margin: 'auto' }} />
        </Box>
        <Typography color="primary" fontWeight="light" fontSize="26px">
          ใช้เวลาอย่างคุ้มค่าของทุกคนไปกับวีไทม์
        </Typography>
        <Box display="flex" marginTop="24px">
          <Button
            onClick={() => {
              history.push('/app')
            }}
            variant="contained"
            style={{ margin: 'auto' }}
          >
            เริ่มใช้
            <img src={ButtonLogo} style={{ margin: '0 8px' }} />
            บนบราวเซอร์คุณ
          </Button>
        </Box>
      </Box>
    </Box>
  )

  const Description2 = (
    <Box position="absolute" left="0" width="100%">
      <Box>
        <img src={Triangle} style={{ width: '100%' }} />
      </Box>
      <Box style={{ background: '#4A2EF4' }} marginTop="-40px">
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
      <Box maxWidth="1200px" margin="auto">
        {yolo1}
      </Box>
      <Box style={{ background: '#4A2EF4' }}>
        <Box maxWidth="1200px" margin="auto">
          {yoloFacebook}
        </Box>
      </Box>
      <Box maxWidth="1200px" margin="auto">
        {appFotter}
      </Box>
      <Box style={{ background: '#F9F9FB' }}>
        <Box maxWidth="1200px" margin="auto">
          {yoloFooter}
        </Box>
      </Box>
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
