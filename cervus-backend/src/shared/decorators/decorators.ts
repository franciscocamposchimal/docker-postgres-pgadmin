import { createParamDecorator } from '@nestjs/common';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.res,
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);