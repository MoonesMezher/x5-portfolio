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

export type TMainInputProps = { label?: string, textarea?: boolean, type?: string, required?: boolean, placeholder?: string, value: string, setValue: any, errorRequest?: any, filed: string }

export type TTableProps = { data: Array<{id: string, img: string, title: string, category: string} | { id: string, name: string, email: string, body: string } >}

export type TData = Array<{id: string, img: string, title: string, category: string} | { id: string, name: string, email: string, body: string }>;

export type TAlertProps = { message: string, handleNoOption: () => any, handleYesOption: () => any}