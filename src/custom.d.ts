declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
}

declare module "*.png" {
    const value: string;
    export default value;
}