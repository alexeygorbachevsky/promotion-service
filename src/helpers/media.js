import { css } from "styled-components";

import { SCREEN_WIDTH, toREM } from "constants/styles";

const widths = Object.keys(SCREEN_WIDTH).reduce(
    (memo, size) => ({
        smallerThan: {
            ...memo.smallerThan,
            [size]: (...args) => css`
        @media (max-width: ${toREM(SCREEN_WIDTH[size] - 1)}) {
          ${css(...args)};
        }
      `,
        },
        biggerOrEqualThan: {
            ...memo.biggerOrEqualThan,
            [size]: (...args) => css`
        @media (min-width: ${toREM(SCREEN_WIDTH[size])}) {
          ${css(...args)};
        }
      `,
        },
        // call: interval.{fromSize}.{toSize}`{styles}` or interval.{fromSize}.{toSize}(styles)
        interval: {
            ...memo.interval,
            [size]: Object.keys(SCREEN_WIDTH).reduce(
                (acc, toSize) => ({
                    ...acc,
                    // prettier-ignore
                    [toSize]: (...args) => css`
            @media (min-width: ${toREM(SCREEN_WIDTH[toSize])}) and (max-width: ${toREM(SCREEN_WIDTH[size] - 1)}) {
              ${css(...args)};
            }
          `,
                }),
                {},
            ),
        },
    }),
    {
        smallerThan: {},
        biggerOrEqualThan: {},
        interval: {},
    },
);

export default widths;
