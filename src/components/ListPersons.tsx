import { Card, Flex, Image, List, Typography } from "antd";
import { IPersons } from "../utils/types";

const { Text } = Typography;

interface IProps {
  persons: IPersons[];
}

export const ListPersons = ({ persons }: IProps) => {
  return (
    <List
      pagination={
        persons.length >= 10 && {
          position: "top",
          align: "center",
          pageSize: 10,
          hideOnSinglePage: true,
        }
      }
      grid={{ gutter: 16, xs: 2, sm: 2, md: 3, lg: 3 }}
      dataSource={persons}
      header={<Text>Актеры</Text>}
      renderItem={(person) => (
        <Card title={person.name}>
          <Flex vertical={true}>
            <Image width={200} src={person.photo} preview={false} />
            <Text>{person.description}</Text>
          </Flex>
        </Card>
      )}
    />
  );
};
