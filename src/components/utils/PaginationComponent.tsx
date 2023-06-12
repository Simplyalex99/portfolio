import React from 'react';
import { createUltimatePagination } from 'react-ultimate-pagination';
import paginationStyles from '@/styles/components/Pagination.module.scss';

type PageProps = {
  isActive?: boolean;
  onClick: () => void;
  disabled: boolean;
  value: number;
};
type EllipsisProps = {
  onClick: () => void;
  disabled: boolean;
};

type PageLinkProps = {
  onClick: () => void;
  disabled: boolean;
};

type WrapperProps = {
  children: React.ReactNode;
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};
const ButtonLight = ({
  onClick,
  disabled,
  children,
  className,
}: PageLinkProps & ButtonProps) => {
  return (
    <button
      className={`${
        paginationStyles['page-link']
      } ${className} ${'dark-blue'} ${
        paginationStyles['page-link-light-mode']
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
const ButtonDark = ({
  onClick,
  disabled,
  children,
  className,
}: PageLinkProps & ButtonProps) => {
  return (
    <button
      className={`${paginationStyles['page-link']} ${className} ${paginationStyles['page-link-dark-mode']}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const PageDark = (props: any) => {
  const { isActive, onClick, disabled, value } = props as PageProps;

  return (
    <ButtonDark
      onClick={onClick}
      disabled={disabled}
      className={`${paginationStyles['page-link-dark-mode']} ${
        paginationStyles['warm-blue']
      } ${
        isActive
          ? `${paginationStyles['active-dark-mode']} ${paginationStyles.active}`
          : ''
      } `}
    >
      {value}
    </ButtonDark>
  );
};
const PageLight = (props: any) => {
  const { isActive, onClick, disabled, value } = props as PageProps;

  return (
    <ButtonLight
      onClick={onClick}
      disabled={disabled}
      className={`${paginationStyles['page-link-light-mode']} ${
        paginationStyles['dark-blue']
      } ${
        isActive
          ? `${paginationStyles['active-dark-mode']} ${paginationStyles.active}`
          : ''
      } `}
    >
      {value}
    </ButtonLight>
  );
};

const EllipsisLight = (props: any) => {
  const { onClick, disabled } = props as EllipsisProps;
  return (
    <ButtonLight onClick={onClick} disabled={disabled}>
      ...
    </ButtonLight>
  );
};

const FirstPageLinkLight = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonLight onClick={onClick} disabled={disabled}>
      First
    </ButtonLight>
  );
};

const PreviousPageLinkLight = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonLight onClick={onClick} disabled={disabled}>
      Previous
    </ButtonLight>
  );
};

const NextPageLinkLight = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonLight onClick={onClick} disabled={disabled}>
      Next
    </ButtonLight>
  );
};

const LastPageLinkLight = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonLight onClick={onClick} disabled={disabled}>
      Last
    </ButtonLight>
  );
};
const EllipsisDark = (props: any) => {
  const { onClick, disabled } = props as EllipsisProps;
  return (
    <ButtonDark onClick={onClick} disabled={disabled}>
      ...
    </ButtonDark>
  );
};

const FirstPageLinkDark = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonDark onClick={onClick} disabled={disabled}>
      First
    </ButtonDark>
  );
};

const PreviousPageLinkDark = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonDark onClick={onClick} disabled={disabled}>
      Previous
    </ButtonDark>
  );
};

const NextPageLinkDark = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonDark onClick={onClick} disabled={disabled}>
      Next
    </ButtonDark>
  );
};

const LastPageLinkDark = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <ButtonDark onClick={onClick} disabled={disabled}>
      Last
    </ButtonDark>
  );
};
const Wrapper = (props: WrapperProps) => {
  const { children } = props;
  return <div className={paginationStyles.pagination}>{children}</div>;
};

const itemTypeToComponentDark = {
  PAGE: PageDark,
  ELLIPSIS: EllipsisDark,
  FIRST_PAGE_LINK: FirstPageLinkDark,
  PREVIOUS_PAGE_LINK: PreviousPageLinkDark,
  NEXT_PAGE_LINK: NextPageLinkDark,
  LAST_PAGE_LINK: LastPageLinkDark,
};
const itemTypeToComponentLight = {
  PAGE: PageLight,
  ELLIPSIS: EllipsisLight,
  FIRST_PAGE_LINK: FirstPageLinkLight,
  PREVIOUS_PAGE_LINK: PreviousPageLinkLight,
  NEXT_PAGE_LINK: NextPageLinkLight,
  LAST_PAGE_LINK: LastPageLinkLight,
};

const UltimatePagination = createUltimatePagination({
  itemTypeToComponent: itemTypeToComponentLight,
  WrapperComponent: Wrapper,
});
type themeType = 'LIGHT' | 'DARK';
export const createPaginationTheme = (theme: themeType) => {
  if (theme === 'DARK') {
    return createUltimatePagination({
      itemTypeToComponent: itemTypeToComponentDark,
      WrapperComponent: Wrapper,
    });
  }
  return createUltimatePagination({
    itemTypeToComponent: itemTypeToComponentLight,
    WrapperComponent: Wrapper,
  });
};
export const Pagination = UltimatePagination;
export default Pagination;
