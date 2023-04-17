import { Divider } from '@mantine/core';
import { ReactElement } from 'react';
import { HeaderLink } from '../types/CommonTypes';
import { DefaultLayoutFAQ } from './DefaultLayoutFAQ';
import { DefaultLayoutFooter, FooterData } from './DefaultLayoutFooter';
import { DefaultLayoutHeader } from './DefaultLayoutHeader';
import { DefaultLayoutHeroContent } from './DefaultLayoutHeroContent';
import { DefaultLayoutHeroHeader } from './DefaultLayoutHeroHeader';

interface LayoutProps {
  children: ReactElement;
}

const headerLinks: HeaderLink[] = [
  {
    label: 'label1',
    link: 'link-1',
  },
  {
    label: 'label2',
    link: 'link-2',
  },
  {
    label: 'label3',
    link: 'link-3',
  },
];

const footerDatas: FooterData[] = [
  {
    title: 'footer-1',
    links: [
      {
        label: 'footer-1-1',
        link: '#',
      },
      {
        label: 'footer-1-2',
        link: '#',
      },
      {
        label: 'footer-1-3',
        link: '#',
      },
    ],
  },
  {
    title: 'footer-2',
    links: [
      {
        label: 'footer-1-1',
        link: '#',
      },
      {
        label: 'footer-1-2',
        link: '#',
      },
    ],
  },
  {
    title: 'footer-3',
    links: [
      {
        label: 'footer-3-1',
        link: '#',
      },
      {
        label: 'footer-3-2',
        link: '#',
      },
      {
        label: 'footer-3-3',
        link: '#',
      },
      {
        label: 'footer-3-4',
        link: '#',
      },
    ],
  },
];

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <DefaultLayoutHeader logo="MallocTech" links={headerLinks} />
      <DefaultLayoutHeroHeader />
      <Divider variant="dashed" size="xs" />
      <DefaultLayoutHeroContent
        title="Malloc Tech Hero Content"
        description="Malloc Tech Hero Description"
      />
      <Divider variant="dashed" size="xs" />
      <DefaultLayoutFAQ />
      <DefaultLayoutFooter data={footerDatas} />
      {children}
    </div>
  );
};

export default DefaultLayout;
