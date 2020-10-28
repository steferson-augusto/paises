import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: "light" | "dark" | undefined;

    colors: {
      text: string
      primary: string
      secondary: string

      background: string
      sidebar: {
        background: string
        hover: string
      }
      surface: {
        background: string
        hover: string
      }
      header: {
        background: string
        text: string
      }
    };
  }
}
