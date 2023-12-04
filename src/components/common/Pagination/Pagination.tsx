import React, { useState } from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

import { useWindowSize } from "@/hooks/useWindowSize";
import * as Style from "./index.styled";

type PaginationProps = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (element: number, page: number) => void;
};
const Pagination: React.FC<PaginationProps> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let portionSize = 3;

  if (useWindowSize()[0] > 900) {
    portionSize = 10;
  } else {
    portionSize = 5;
  }
  if (useWindowSize()[0] < 300) {
    portionSize = 3;
  }

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  console.log(portionCount)

  let pagesElements = pages
    .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
    .map((element) => {
      if (element === props.currentPage) {
        return (
          <Style.ActiveItem key={`pagination${element}`}>
            {element}
          </Style.ActiveItem>
        );
      } else {
        return (
          <Style.Item
            key={`pagination${element}`}
            onClick={() => props.onPageChange(element, props.pageSize)}
          >
            {element}
          </Style.Item>
        );
      }
    });

  return (
    <Style.Pagination>
      <Style.Content>
        {portionNumber > 1 && (
          <Style.Item onClick={() => setPortionNumber(portionNumber - 1)}>
            <VscArrowLeft />
          </Style.Item>
        )}
        {pagesElements}
        {portionCount > portionNumber && (
          <Style.Item onClick={() => setPortionNumber(portionNumber + 1)}>
            <VscArrowRight />
          </Style.Item>
        )}
      </Style.Content>
    </Style.Pagination>
  );
};
export default Pagination;
