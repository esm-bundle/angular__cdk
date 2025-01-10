document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/core": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-core.min.js",
          "@angular/core/primitives/event-dispatch": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-core-primitives-event-dispatch.min.js",
          "@angular/core/primitives/signals": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-core-primitives-signals.min.js",
          "@angular/common": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-common.min.js",
          "@angular/forms": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular/system/es2022/angular-forms.min.js",
          "@angular/cdk/a11y": "/base/system/es2022/angular-a11y.min.js",
          "@angular/cdk/accordion": "/base/system/es2022/angular-accordion.min.js",
          "@angular/cdk/bidi": "/base/system/es2022/angular-bidi.min.js",
          "@angular/cdk/clipboard": "/base/system/es2022/angular-clipboard.min.js",
          "@angular/cdk/coercion": "/base/system/es2022/angular-coercion.min.js",
          "@angular/cdk/coercion/private": "/base/system/es2022/angular-coercion-private.min.js",
          "@angular/cdk/collections": "/base/system/es2022/angular-collections.min.js",
          "@angular/cdk/drag-drop": "/base/system/es2022/angular-drag-drop.min.js",
          "@angular/cdk/keycodes": "/base/system/es2022/angular-keycodes.min.js",
          "@angular/cdk/layout": "/base/system/es2022/angular-layout.min.js",
          "@angular/cdk/menu": "/base/system/es2022/angular-menu.min.js",
          "@angular/cdk/observers": "/base/system/es2022/angular-observers.min.js",
          "@angular/cdk/observers/private": "/base/system/es2022/angular-observers-private.min.js",
          "@angular/cdk/overlay": "/base/system/es2022/angular-overlay.min.js",
          "@angular/cdk/platform": "/base/system/es2022/angular-platform.min.js",
          "@angular/cdk/portal": "/base/system/es2022/angular-portal.min.js",
          "@angular/cdk/private": "/base/system/es2022/angular-private.min.js",
          "@angular/cdk/scrolling": "/base/system/es2022/angular-scrolling.min.js",
          "@angular/cdk/stepper": "/base/system/es2022/angular-stepper.min.js",
          "@angular/cdk/table": "/base/system/es2022/angular-table.min.js",
          "@angular/cdk/text-field": "/base/system/es2022/angular-text-field.min.js",
          "@angular/cdk/tree": "/base/system/es2022/angular-tree.min.js"
        }
      }`,
  }),
);
