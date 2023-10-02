import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { injectClassNames } from 'utils/css';
import styles from './Items.module.scss';

const {
  items,
  active
} = styles;

const links = [
  { name: 'Cards', url: '/', alias: [] },
  { name: 'Install', url: '/install', alias: []},
  { name: 'Profile', url: '/profile', alias: [] }
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul className={ items }>
      { links.map(({ name, url, alias }: {name: string, url: string, alias: Array<string>}) => (
        <li
          key={ name }
          className={
            injectClassNames([
              active,
              pathname === url
                        || alias.includes(pathname)
            ])
          }
        >
          <Link href={ url }>{ name }</Link>
        </li>
      )) }
    </ul>
  );
}
