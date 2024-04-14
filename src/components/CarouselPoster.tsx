import { Carousel, Spin } from "antd";
import { useGetPostersByIdQuery } from "../features/api/postersApi";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

interface IProps {
  movieId: string;
}

const CarouselPoster = ({ movieId }: IProps) => {
  const { data, isLoading, isSuccess } = useGetPostersByIdQuery({ movieId });

  return (
    <>
      <Title>Постеры к фильму</Title>
      {isLoading ? (
        <Spin></Spin>
      ) : isSuccess && data.total === 0 ? (
        <Paragraph>Нет информации о постерах</Paragraph>
      ) : (
        <>
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
