export type HomeProps = {
  manga_banner: mangaItem[];
};

export type BannerProps = {
  manga_banner: mangaItem[];
};

export type mangaItem = {
  image: string;
  id: number;
  name: string;
  urlName: string;
};
