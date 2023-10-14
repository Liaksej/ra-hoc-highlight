import { ReactNode } from "react";

interface PopularPoprs {
  children: ReactNode;
}

export function Popular(props: PopularPoprs) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}
