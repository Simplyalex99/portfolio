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
const Button = ({
  onClick,
  disabled,
  children,
  className,
}: PageLinkProps & ButtonProps) => {
  return (
    <button
      className={`${paginationStyles['page-link']} ${className} `}
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
    <Button
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
    </Button>
  );
};
const PageLight = (props: any) => {
  const { isActive, onClick, disabled, value } = props as PageProps;

  return (
    <Button
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
    </Button>
  );
};

const Ellipsis = (props: any) => {
  const { onClick, disabled } = props as EllipsisProps;
  return (
    <Button onClick={onClick} disabled={disabled}>
      ...
    </Button>
  );
};

const FirstPageLink = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <Button onClick={onClick} disabled={disabled}>
      First
    </Button>
  );
};

const PreviousPageLink = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <Button onClick={onClick} disabled={disabled}>
      Previous
    </Button>
  );
};

const NextPageLink = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <Button onClick={onClick} disabled={disabled}>
      Next
    </Button>
  );
};

const LastPageLink = (props: any) => {
  const { onClick, disabled } = props as PageLinkProps;
  return (
    <Button onClick={onClick} disabled={disabled}>
      Last
    </Button>
  );
};

const Wrapper = (props: WrapperProps) => {
  const { children } = props;
  return <div className={paginationStyles.pagination}>{children}</div>;
};
const itemTypeToComponent = {
  ELLIPSIS: Ellipsis,
  FIRST_PAGE_LINK: FirstPageLink,
  PREVIOUS_PAGE_LINK: PreviousPageLink,
  NEXT_PAGE_LINK: NextPageLink,
  LAST_PAGE_LINK: LastPageLink,
};
const itemTypeToComponentDark = {
  PAGE: PageDark,
  ...itemTypeToComponent,
};
const itemTypeToComponentLight = {
  PAGE: PageLight,
  ...itemTypeToComponent,
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
