// import type { Block, BLOCKS, Inline, Node } from '@contentful/rich-text-types';
// import { ButtonProperties } from '@graphql/__generated__/ButtonProperties';
// import { DataTableProperties } from '@graphql/__generated__/DataTableProperties';
// import { InteractiveFieldLabelProperties } from '@graphql/__generated__/InteractiveFieldLabelProperties';
// import { RichTextBlockProperties } from '@graphql/__generated__/RichTextBlockProperties';
// import { TilesProperties_items_Tile } from '@graphql/__generated__/TilesProperties';
// import type { HeroBGColours } from '@interfaces/common-types';
// import {
//   MyMembershipPageQuery_pageData_items,
//   MyMembershipPageQuery_sideNav_items,
//   MyMembershipPageQuery_sideNav_items_sideNavIconUnselected,
// } from '@pages/my-membership/__generated__/MyMembershipPageQuery';

export type ValueOf<T> = T[keyof T];
export type Nullable<T> = T | null;

/**
 * These types are for the header, sideNav, dashboard, anything not in mainContentCollection
 * So, it doesn't matter that we are using the page level query type here,
 * any auto generated page level type could do the trick
 * */
// export type Icon = MyMembershipPageQuery_sideNav_items_sideNavIconUnselected;
// export type SideNav = MyMembershipPageQuery_sideNav_items;

// export interface RichTextDocument extends Node {
//   nodeType: BLOCKS.DOCUMENT;
//   content: Array<Block | Inline>;
// }

export enum DashboardIconType {
  MEMBERSHIP_PACKAGE = 'Membership Package',
  MEMBER_SAVINGS = 'Member Savings',
  CALLOUTS_REMAINING = 'Callouts Remaining',
  CONTINUOUS_MEMBER = 'Continuous Member',
}

// export type PageData = Omit<
//   MyMembershipPageQuery_pageData_items,
//   'mainContentCollection'
// > & {
//   title?: string | null;
//   heroIsCarousel?: boolean | null;
//   heroBgColour?: ValueOf<HeroBGColours> | null;
//   heroBgImage?: Icon | null;
//   mainContentCollection: any;
//   pageButton?: ButtonProperties | null;
//   heroContentCollection?: any;
// };

// export interface ContentBlock {
//   title: string | null;
//   hash?: string;
//   helpText?: string | null;
//   itemsCollection?: {
//     items: Array<
//       | InteractiveFieldLabelProperties
//       | RichTextBlockProperties
//       | DataTableProperties
//       | TilesProperties_items_Tile
//       | CarouselSlide
//       | null
//       // this is for fixing the incompatibility caused by the empty interface
//       // type foo__DashboardIcon {} generated in every page level fragment type file
//       | {}
//     >;
//   } | null;
// }

// export interface CarouselSlide {
//   type?: string | null;
//   backgroundImage?: Icon | null;
//   logoImage?: Icon | null;
//   heading?: string | null;
//   description?: string | null;
//   href?: string | null;
// }

// export interface RichTextBlock {
//   title: string;
//   type: string;
//   content: {
//     json: RichTextDocument;
//   };
// }

// export interface CommonCMSData {
//   sideNav: Nullable<{
//     items: Array<SideNav | null>;
//   }>;
//   pageData: Nullable<{
//     items: Array<PageData | null>;
//   }>;
// }

export interface Variables {
  slug: string;
  preview: boolean;
}
