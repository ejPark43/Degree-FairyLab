import styled from "styled-components";

function ProductImageSection({ image, name }) {
  return (
    <ImageWrapper>
      <ProductImage src={image} alt={name} />
    </ImageWrapper>
  );
}

export default ProductImageSection;

const ImageWrapper = styled.div`
  min-width: 900px;
  height: 820px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f7f7f7;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
