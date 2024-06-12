import React from 'react';

interface VisibleChildrenCountProps {
  parentClassName: string;
}

const isElementVisibleWithinParent = (element: HTMLElement, parent: HTMLElement) => {
  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return (
    elementRect.left >= parentRect.left && elementRect.right <= parentRect.right
  );
};

const VisibleChildrenCount = (parentClassName: string): number => {
  const parentDiv = document.querySelector(`.${parentClassName}`);

  if (!parentDiv) {
    return 0;
  }

  const childDivs = parentDiv.querySelectorAll(":scope > div > div");

  const visibleChildDivs = Array.from(childDivs).filter((div) =>
    isElementVisibleWithinParent(div as HTMLElement, parentDiv as HTMLElement)
  );

  return visibleChildDivs.length;
};

export default VisibleChildrenCount;
