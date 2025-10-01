"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";

export default function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example" className="relative flex justify-center w-screen max-w-[1200px]">
      <motion.ul
        ref={ref}
        style={{ maskImage }}
        className="flex list-none h-[160px] sm:h-[400px] overflow-x-scroll px-0 py-5 mx-auto gap-5 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200"
      >
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#ff0088]">a</li>
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#dd00ee]">a</li>
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#9911ff]">a</li>
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#0d63f8]">a</li>
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#0cdcf7]">a</li>
        <li className="flex-[0_0_160px] sm:flex-[0_0_400px] bg-[#8df0cc]">a</li>
      </motion.ul>
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
