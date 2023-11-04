// MangaScreen.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import MangaCover from '../../components/Manga'; // Importe o componente MangaCover aqui

// interface for mangaScreen
interface MangaScreenProps {}

function MangaScreen(props: MangaScreenProps) {
  const router = useRouter();
  const { id } = router.query;

  console.log('router', router);

  // Suponhamos que você tenha os dados do mangá, incluindo título, URL da capa e sinopse
  const mangaData = {
    title: 'Nome do Mangá',
    imageUrl: 'URL_da_capa.jpg',
    synopsis: 'Sinopse do Mangá...',
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Manga {id}</h1>
        {/* Renderize o componente MangaCover com os dados do mangá */}
        <MangaCover
          title={mangaData.title}
          imageUrl={mangaData.imageUrl}
          synopsis={mangaData.synopsis}
        />
      </div>
    </div>
  );
}

export default MangaScreen;
