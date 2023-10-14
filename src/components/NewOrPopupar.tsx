import { ComponentType } from "react";
import { ArticleListItem, VideoListItem } from "@/app/page";
import { Popular } from "@/components/Popular";
import { New } from "@/components/New";

const VIEW_LIMIT_NEW = 100;
const VIEW_LIMIT_POPULAR = 1000;

export function withNewOrPopular<T extends ArticleListItem | VideoListItem>(
  Component: ComponentType<T>,
) {
  return function NewOrPopular(props: Omit<T, "views"> & { views: number }) {
    if (props.views >= VIEW_LIMIT_POPULAR) {
      return (
        <Popular>
          <Component {...(props as T)} />
        </Popular>
      );
    }
    if (props.views < VIEW_LIMIT_NEW) {
      return (
        <New>
          <Component {...(props as T)} />
        </New>
      );
    }
    return <Component {...(props as T)} />;
  };
}
