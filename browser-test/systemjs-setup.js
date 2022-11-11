document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/core": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core/system/es2015/ivy/angular-core.min.js",
          "@angular/common": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common/system/es2015/ivy/angular-common.min.js",
          "@angular/forms": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__forms/system/es2015/ivy/angular-forms.min.js",
          "@angular/cdk/a11y": "/base/system/es2015/ivy/angular-a11y.min.js",
          "@angular/cdk/accordion": "/base/system/es2015/ivy/angular-accordion.min.js",
          "@angular/cdk/bidi": "/base/system/es2015/ivy/angular-bidi.min.js",
          "@angular/cdk/clipboard": "/base/system/es2015/ivy/angular-clipboard.min.js",
          "@angular/cdk/coercion": "/base/system/es2015/ivy/angular-coercion.min.js",
          "@angular/cdk/collections": "/base/system/es2015/ivy/angular-collections.min.js",
          "@angular/cdk/drag-drop": "/base/system/es2015/ivy/angular-drag-drop.min.js",
          "@angular/cdk/keycodes": "/base/system/es2015/ivy/angular-keycodes.min.js",
          "@angular/cdk/layout": "/base/system/es2015/ivy/angular-layout.min.js",
          "@angular/cdk/menu": "/base/system/es2015/ivy/angular-menu.min.js",
          "@angular/cdk/observers": "/base/system/es2015/ivy/angular-observers.min.js",
          "@angular/cdk/overlay": "/base/system/es2015/ivy/angular-overlay.min.js",
          "@angular/cdk/platform": "/base/system/es2015/ivy/angular-platform.min.js",
          "@angular/cdk/portal": "/base/system/es2015/ivy/angular-portal.min.js",
          "@angular/cdk/scrolling": "/base/system/es2015/ivy/angular-scrolling.min.js",
          "@angular/cdk/stepper": "/base/system/es2015/ivy/angular-stepper.min.js",
          "@angular/cdk/table": "/base/system/es2015/ivy/angular-table.min.js",
          "@angular/cdk/text-field": "/base/system/es2015/ivy/angular-text-field.min.js",
          "@angular/cdk/tree": "/base/system/es2015/ivy/angular-tree.min.js"
        }
      }`,
  })
);
