import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import Page from 'src/components/page';
import ConfContent from 'src/components/index';
import { META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const { query } = useRouter();
  const meta = {
    title: 'TDD 스터디 2기',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta} fullViewport>
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
    </Page>
  );
}
