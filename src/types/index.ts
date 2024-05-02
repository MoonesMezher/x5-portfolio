import { ReactNode } from "react";

export type TMainLinkProps = { info: { url: string, title: string } };

export type TMainTitleProps = { title: string, img: string, style: string };

export interface TCardprops {
    service: string;
    price: string;
    brief: string;
    link: string;
    icon: ReactNode;
}

export type TLimitStringHelper = (text: string, limit: number) => string;