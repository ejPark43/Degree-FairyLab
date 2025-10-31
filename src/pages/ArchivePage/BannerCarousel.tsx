import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

import banner1 from "/images/banner-1.png";
import banner2 from "/images/banner-2.png";
import banner3 from "/images/banner-3.png";
import banner4 from "/images/banner-4.png";
import { lightTheme } from "../../styles/theme";

const banners = [banner1, banner2, banner3, banner4];

const extendedBanners =
  banners.length < 5 ? [...banners, ...banners.slice(0, 4)] : banners;
export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start", // ← 왼쪽부터 정렬
    dragFree: true,
    containScroll: false,
    // containScroll: "trimSnaps",
    skipSnaps: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(3, true);
  }, [emblaApi]);
  return (
    <Container>
      <Viewport ref={emblaRef}>
        <Track>
          {extendedBanners.map((src, i) => (
            <Slide key={i}>
              <BannerImg src={src} alt={`banner-${i}`} />
            </Slide>
          ))}
        </Track>
      </Viewport>
    </Container>
  );
}

/* --- styled-components --- */

const Container = styled.div`
  /* width: 100%; */
  width: 4110px;
  height: 1365px;
  position: relative;
  overflow-x: hidden;
  background-color: ${lightTheme.colors.primary};
`;

const Viewport = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const Track = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 960px;
  user-select: none;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
