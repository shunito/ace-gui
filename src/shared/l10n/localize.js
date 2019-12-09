const { newLocalizer } = require('@daisy/ace-localize');

const enJson = require("./locales/en.json");
const frJson = require("./locales/fr.json");
const pt_BRJson = require("./locales/pt_BR.json");
const esJson = require("./locales/es.json");
const jaJson = require("./locales/ja_JP.json");

export const localizer = newLocalizer({
    en: {
        name: "English",
        default: true,
        translation: enJson,
    },
    fr: {
        name: "Français",
        translation: frJson,
    },
    pt_BR: {
        name: "Português do Brasil",
        translation: pt_BRJson,
    },
    es: {
        name: "Español",
        translation: esJson,
    },
    es: {
        name: "Japanese",
        translation: jaJson,
    },
});
