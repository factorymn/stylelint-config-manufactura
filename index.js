module.exports = {
    "rules": {
        "at-rule-empty-line-before": [ "always", {
            except: ["blockless-group", "all-nested"],
            ignore: ["after-comment", "all-nested"]
        }],
        "at-rule-name-case": "lower",
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "block-closing-brace-newline-after": "always-multi-line",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-no-single-line": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-newline-before": "always-single-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always-single-line",
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-named": "never",
        "color-no-invalid-hex": true,
        "comment-empty-line-before": "never",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-properties-order": [

            // Strong properties (for easy debugging)
            "content",
            "opacity",
            "visibility",
            "overflow",
            "overflow-x",
            "overflow-y",
            "clear",
            "clip",
            "float",
            "display",
            "vertical-align",
            "box-sizing",
            "position",

            // Basic box properties
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "max-width",
            "min-width",
            "height",
            "max-height",
            "min-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",

            // Flexible layout properties
            "align-content",
            "align-items",
            "align-self",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "justify-content",
            "order",

            // Multi-column layout properties
            "break-after",
            "break-before",
            "break-inside",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "columns",
            "widows",

            // Table properties
            "border-collapse",
            "border-spacing",
            "caption-side",
            "empty-cells",
            "table-layout",

            // Basic UI properties
            "cursor",
            "ime-mode",
            "nav-down",
            "nav-index",
            "nav-left",
            "nav-right",
            "nav-up",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "resize",
            "user-select",

            // Lists and counters properties
            "counter-increment",
            "counter-reset",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",

            // Paged media properties
            "orphans",
            "page-break-after",
            "page-break-before",
            "page-break-inside",
            "marks",
            "quotes",

            // Text properties
            "color",
            "direction",
            "font",
            "font-family",
            "font-feature-settings",
            "font-kerning",
            "font-language-override",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-synthesis",
            "font-variant",
            "font-variant-alternates",
            "font-variant-caps",
            "font-variant-east-asian",
            "font-variant-ligatures",
            "font-variant-numeric",
            "font-variant-position",
            "font-weight",
            "hanging-punctuation",
            "hyphens",
            "letter-spacing",
            "line-break",
            "line-height",
            "overflow-wrap",
            "tab-size",
            "text-align",
            "text-align-last",
            "text-combine-upright",
            "text-decoration",
            "text-decoration-color",
            "text-decoration-line",
            "text-decoration-style",
            "text-indent",
            "text-justify",
            "text-orientation",
            "text-overflow",
            "text-shadow",
            "text-transform",
            "text-underline-position",
            "unicode-bidi",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap",
            "writing-mode",

            // Animation properties
            "animation",
            "animation-delay",
            "animation-direction",
            "animation-duration",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-name",
            "animation-play-state",
            "animation-timing-function",

            // Background and border properties
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-origin",
            "background-position",
            "background-poistion-x",
            "background-poistion-y",
            "background-repeat",
            "background-size",
            "border",
            "border-color",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-radius",
            "border-style",
            "border-width",
            "border-top",
            "border-top-color",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-top-style",
            "border-top-width",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-style",
            "border-bottom-width",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "box-decoration-break",
            "box-shadow",

            // Filter effects, masking, image properties
            "filter",
            "image-orientation",
            "image-rendering",
            "image-resolution",
            "mask",
            "mask-type",
            "object-fit",
            "object-position",

            // Marquee properties
            "marquee-direction",
            "marquee-play-count",
            "marquee-speed",
            "marquee-style",

            // Scrollbar properties
            "scrollbar-3dlight-color",
            "scrollbar-arrow-color",
            "scrollbar-base-color",
            "scrollbar-darkshadow-color",
            "scrollbar-face-color",
            "scrollbar-highlight-color",
            "scrollbar-shadow-color",
            "scrollbar-track-color",

            // Speech properties
            "mark",
            "mark-after",
            "mark-before",
            "phonemes",
            "rest",
            "rest-after",
            "rest-before",
            "voice-balance",
            "voice-duration",
            "voice-pitch",
            "voice-pitch-range",
            "voice-rate",
            "voice-stress",
            "voice-volume",

            // Transform properties
            "transform",
            "transform-origin",
            "transform-style",
            "backface-visibility",
            "perspective",
            "perspective-origin",

            // Transitions properties
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",

            // Stack order and zoom properties
            "z-index",
            "zoom"
        ],
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-newline-before": "never-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-block-trailing-semicolon": "always",
        "function-blacklist": [],
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "never-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always",
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "never-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "double",
        "function-whitespace-after": "always",
        "indentation": [ 4, 4 ],
        "max-empty-lines": 2,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "media-query-parentheses-space-inside": "never",
        "no-eol-whitespace": true,
        "no-missing-eof-newline": true,
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "number-zero-length-no-unit": true,
        "property-no-vendor-prefix": true,
        "root-no-standard-properties": true,
        "rule-nested-empty-line-before": [ "always", {
            except: ["first-nested"]
        }],
        "rule-non-nested-empty-line-before": "always-multi-line",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-no-vendor-prefix": true,
        "selector-pseudo-element-colon-notation": "double",
        "selector-root-no-composition": true,
        "string-quotes": "double",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-no-vendor-prefix": true
    }
}
