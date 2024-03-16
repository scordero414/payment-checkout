import { HelloWorld } from '@/src/components/hello-world';
import type { Metadata } from 'next';

export default function MainPage() {
  return <HelloWorld />;
}

export const metadata: Metadata = {
  title: 'Hello World',
};
