import {
  apply,
  chain,
  url,
  move,
  template,
  mergeWith,
} from '@angular-devkit/schematics';
import { TemplateOptions } from '@angular-devkit/core';

import { Schema as ApplicationOptions } from './schema';

export default function (options: ApplicationOptions) {
  const appPath = options.name;

  return chain([
    mergeWith(
      apply(url('./_files'), [
        template(<TemplateOptions>{
          ...options as any
        }),
        move(appPath),
      ]),
    )
  ])
}


