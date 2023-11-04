import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Manga from '../components/Manga'
import { HomeProps } from '../globals/types'
import styles from '../styles/Home.module.css'

import { AlignText, CardListVertical, Container, Sections, Content, Aside, SideBar } from '../styles/styles'

const Home = (props: HomeProps) => {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.topDistance}>
        <Banner manga_banner={props.manga_banner} />
      </div>

      <div className={styles.topDistance}>

        <Content>
          <Sections>
            <h1> te </h1>

          </Sections>

          <Aside>
            <h1> te </h1>

          </Aside>

        </Content>



      </div>


    </div>
  )
}

export async function getServerSideProps() {
  const listOfData = [
    {
      image: 'https://64.media.tumblr.com/6694401c8ac005bb4e5df7c485c72241/tumblr_mtv2qwFMGO1s3jdkuo6_1280.jpg',
      id: 1,
      name: "Dice: that cube change everything",
      urlName: 'dice_that_cube_change_everything'
    },
    {
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb58bcd3-9012-4dac-9e05-cd48c97f62aa/dcxzs87-5b38243d-f28e-49c0-8eef-7c964e9f9095.png/v1/fill/w_1024,h_576,q_80,strp/iwaou___tensei_shitara_slime_datta_ken___wallpaper_by_ryushurei_dcxzs87-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvY2I1OGJjZDMtOTAxMi00ZGFjLTllMDUtY2Q0OGM5N2Y2MmFhXC9kY3h6czg3LTViMzgyNDNkLWYyOGUtNDljMC04ZWVmLTdjOTY0ZTlmOTA5NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rfVoslwuGr02C2-uuVALU_cFkRNhcL--85k7osELZdY',
      id: 4,
      name: "Tensei shitara slime datta ken",
      urlName: 'tensei_shitara_slime_datta_ken'
    },
    {
      image: 'https://d30womf5coomej.cloudfront.net/sa/4b/d6274012-b516-46f9-8d68-d1e791d3758b.jpg',
      id: 2,
      name: 'A returners magic should be special',
      urlName: 'a_returnes_magic_should_be_special'
    },
    {
      image: 'https://cdn6.aptoide.com/imgs/0/5/e/05ec8767589174b53ba09cfea98ada26_fgraphic.png',
      id: 3,
      name: "Taming master",
      urlName: 'taming_master'
    },
    {
      image: 'https://images.alphacoders.com/146/146351.jpg',
      id: 5,
      name: "Sakura Card Captors",
      urlName: 'sakura_card_captors'
    },
  ]

  return {
    props: {
      manga_banner: listOfData
    }
  }
}

export default Home
