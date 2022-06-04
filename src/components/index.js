import { Heading, Pagination, usePagination } from '@aws-amplify/ui-react';
import { Flex, Text, Divider } from '@aws-amplify/ui-react';
import userEvent from '@testing-library/user-event';

export const ReAmplified = () => (
  <Heading>kino, lit, Real.</Heading>
)

export const DefaultDivider = () => (
    <Flex direction="column" padding="10px">
      <Divider />
      <br/>
    </Flex>
  );
  export const DefaultPaginationExample = () => {
    const paginationProps = usePagination({ totalPages: 8 });
  
    return <Pagination {...paginationProps} />;
  };

