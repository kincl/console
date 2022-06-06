import {
  Hint,
  HintBody,
  HintTitle,
  Page,
  PageSection,
  Stack,
  Title
} from "@patternfly/react-core";
import * as React from "react";

export const MyLandingPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Page
      additionalGroupedContent={
        <PageSection variant="light">
          <Title headingLevel="h1">{title}</Title>
        </PageSection>
      }
      groupProps={{ sticky: "top" }}
    >
      <PageSection>
        <Stack hasGutter>
          <Hint>
            <HintTitle>Welcome</HintTitle>
            <HintBody>
              List of deployed Databases
            </HintBody>
          </Hint>

        </Stack>
      </PageSection>
    </Page>
  );
};

export default MyLandingPage;
