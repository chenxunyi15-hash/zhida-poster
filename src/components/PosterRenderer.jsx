import React from "react";
import ClassicTemplate from "../templates/ClassicTemplate";
import InkTemplate from "../templates/InkTemplate";
import DarkTemplate from "../templates/DarkTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";

var TEMPLATE_MAP = {
  classic: ClassicTemplate,
  ink: InkTemplate,
  dark: DarkTemplate,
  minimal: MinimalTemplate,
};

export default function PosterRenderer({ data, template }) {
  var Template = TEMPLATE_MAP[template] || ClassicTemplate;
  if (!data) return null;
  return React.createElement(Template, { data: data });
}