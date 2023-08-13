import Image from 'next/image';
import { BannerContainer } from './styleComponents/Banner.styled';

const Banner = () => {
    return (
        <BannerContainer maxWidth="lg">
            <Image src="/banner.jpg" width="1150" height="300" alt="banner" />
        </BannerContainer>
    );
};

export default Banner;
