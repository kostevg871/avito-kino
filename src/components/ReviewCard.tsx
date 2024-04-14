import { useState } from "react";
import { IReview } from "../utils/types";
import { Card, Flex, Typography } from "antd";

interface IProps {
  item: IReview;
}

export const ReviewCard = ({ item }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Flex gap={3} vertical>
      <Card>
        <Typography.Title>{item.title}</Typography.Title>
        <Typography.Paragraph
          ellipsis={{
            rows: 2,
            expandable: "collapsible",
            expanded,
            symbol: expanded ? "скрыть" : "показать",
            onExpand: (_, info) => setExpanded(info.expanded),
          }}
        >
          {item.review}
        </Typography.Paragraph>
      </Card>
    </Flex>
  );
};
