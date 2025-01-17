import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React, { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TError = {
  data:{
    message:string,
    stack:string,
    success:boolean,
  };
  status:number
}

export type TMeta = {
  limit:number,
  page:number,
  total:number,
  totalPage:number
}

export type TResponse<T> = {
  data?:T;
  error?:TError;
  meta?:TMeta;
  success:boolean,
  message:string
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name:string;
  value:boolean | React.Key
}