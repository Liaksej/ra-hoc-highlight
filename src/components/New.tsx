import { ReactNode } from "react";

interface NewPoprs {
  children: ReactNode;
}

export function New(props: NewPoprs) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}
