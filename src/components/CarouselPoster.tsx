import React from "react";
import { Carousel } from "antd";
import { useGetPostersByIdQuery } from "../features/api/postersApi";
import Paragraph from "antd/es/typography/Paragraph";

interface IProps {
  movieId: string;
}

const CarouselPoster = ({ movieId }: IProps) => {
  const { data, isLoading } = useGetPostersByIdQuery({ movieId });

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Paragraph>Постеры к фильму</Paragraph>
          <Carousel autoplay>
            {data?.docs.map((image) => (
              <div key={image.id}>
                <img
                  src={image.url}
                  alt={image.url}
                  style={{
                    width: "100%",
                    maxHeight: "700px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </>
      )}
    </>
  );
};

export default CarouselPoster;
