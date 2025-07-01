import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function StratPage() {
  return (
    <Theme appearance="light" accentColor="indigo" grayColor="mauve" radius="large">
      <main style={{ padding: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Radix UI Strat Page</h1>
        <p style={{ fontSize: 18, marginBottom: 24 }}>
          This page demonstrates Radix Themes integration in a Next.js App Router project.
        </p>
 
      </main>
    </Theme>
  );
}
