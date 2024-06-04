import React, { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="w-full md:max-w-5xl md:mx-auto h-[83vh]">{children}</div>
  );
};

export default Wrapper;
