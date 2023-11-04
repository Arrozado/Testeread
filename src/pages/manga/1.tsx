
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

// interface for mangaScreen 
interface MangaScreenProps {

}

function MangaScreen(props: MangaScreenProps) {
    const router = useRouter()
    const { id } = router.query

    console.log("router", router)

    return (
        <div>
            <Header />
            <div>
                <h1>Manga {id}</h1>
            </div>
        </div>
    )
}

export default MangaScreen
