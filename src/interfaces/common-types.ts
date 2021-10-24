/**
 * All common types that could be re-used goes here.
 */

import type { UserContext } from '@auth0/nextjs-auth0';
import type { ParsedUrlQuery as IParsedUrlQuery } from 'querystring';

export const ButtonSizeArray = ['small', 'medium', 'large'] as const;
export const ButtonVariantArray = [
  'primary',
  'secondary',
  'tertiary',
  'primaryLight',
  'secondaryLight',
] as const;
export const ButtonFontWeightArray = ['400', '700'] as const;
export const HeroBGColoursArray = ['yellow', 'grey', 'orange'];

export type ButtonSize = typeof ButtonSizeArray[number];
export type ButtonFontWeight = typeof ButtonFontWeightArray[number];
export type ButtonVariant = typeof ButtonVariantArray[number];
export type HeroBGColours = typeof HeroBGColoursArray[number];

export type SharedPageProps = {
  user: UserContext['user'];
};

export type ParsedUrlQuery = IParsedUrlQuery;

/**
 * This gives you the function type for making a new prop out of partial value,
 * normally in component test, you want to have new prop object for your component for each test
 * with this type you can get a function like this:
 *
 *      interface ButtonProps {
 *          text: string;
 *          length: number
 *      }
 *
 *      const Button:React.FC<ButtonProps> = ()=> <>...</>
 *
 *      const setup:SetupTestPropsFunc<typeof Button> = (newProps)=>({
 *          // default value here:
 *          text:'test text',
 *          length: 2,
 *          ...newProps
 *      })
 *
 * Then you can invoke this setup() for easy swapping part of the value, like:
 *
 *      setup({ text: 'test 2' })
 *
 * Typescript ensures your type is correct here.
 */
export type SetupTestPropsFunc<
  ComponentType extends
    | keyof JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = (
  props: Partial<React.ComponentProps<ComponentType>>,
) => React.ComponentProps<ComponentType>;
