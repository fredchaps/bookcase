import React from "react";
import Container from "../components/Container";

export default {
  title: "Container",
  component: Container,
};

export const Spacing = () => <Container>I'm a bunch of filler!</Container>;

Spacing.story = {
  name: "Spacing",
};
