import React from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from "./banner.module.css"
import { BannerProps } from '../../globals/types'
import Link from 'next/link'

const Banner = (props: BannerProps) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const slides = {}
    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={viewportRef}>
                <div className={styles.embla__container}>
                    {props.manga_banner.map((item, index) => {
                        const { image, id, name, urlName } = item
                        return (
                            (
                                <div className={styles.embla__slide} key={index}>
                                    <div className={styles.embla__slide__inner}>
                                        <img
                                            className={styles.embla__slide__img}
                                            src={image}
                                            alt="A cool cat."
                                        />
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Banner